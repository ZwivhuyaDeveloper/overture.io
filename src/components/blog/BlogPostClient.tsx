"use client"

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PostHeader } from '@/components/blog/PostHeader';
import { PostContent } from '@/components/blog/PostContent';
import { PostCard } from '@/components/blog/PostCard';
import { AppSidebar } from '@/components/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Loader2,
  Share2,
  Heart,
  Bookmark
} from "lucide-react"
import { Tektur } from 'next/font/google';
import type { Post, Category, PostPreview } from '@/types/blog';

const tektur = Tektur({
  weight: ['400', '700'],
  variable: '--font-tektur',
  subsets: ['latin'],
});

interface BlogPostClientProps {
  post: Post;
  recentPosts: PostPreview[];
  categories: Category[];
}

interface BlogPostState {
  post: Post | null;
  recentPosts: PostPreview[];
  categories: Category[];
  relatedPosts: PostPreview[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  selectedCategory: string | null;
  sortBy: 'latest' | 'popular' | 'title';
  engagement: {
    views: number;
    likes: number;
    comments: number;
    shares: number;
    isLiked: boolean;
    isBookmarked: boolean;
  };
}

export function BlogPostClient({ post: initialPost, recentPosts: initialRecentPosts, categories: initialCategories }: BlogPostClientProps) {
  const router = useRouter();
  const searchParamsObj = useSearchParams();
  const [state, setState] = useState<BlogPostState>({
    post: initialPost,
    recentPosts: initialRecentPosts,
    categories: initialCategories,
    relatedPosts: [],
    isLoading: false,
    error: null,
    searchQuery: '',
    selectedCategory: null,
    sortBy: 'latest',
    engagement: {
      views: Math.floor(Math.random() * 1000) + 100,
      likes: Math.floor(Math.random() * 100) + 10,
      comments: Math.floor(Math.random() * 50) + 5,
      shares: Math.floor(Math.random() * 30) + 2,
      isLiked: false,
      isBookmarked: false,
    },
  });

  // Fetch related posts on component mount
  useEffect(() => {
    const fetchRelatedPosts = async () => {
      if (!state.post) return;
      
      try {
        // Get related posts from the same categories
        const categorySlugs = state.post.categories?.map(cat => cat.slug?.current).filter(Boolean) || [];
        let relatedPosts: PostPreview[] = [];
        
        if (categorySlugs.length > 0) {
          // For simplicity, we'll use recent posts as related posts
          // In a real implementation, you'd fetch posts by category
          relatedPosts = state.recentPosts.filter(p => p._id !== state.post?._id).slice(0, 3);
        }

        setState(prev => ({
          ...prev,
          relatedPosts,
        }));
      } catch (error) {
        console.error('Error fetching related posts:', error);
      }
    };

    fetchRelatedPosts();
  }, [state.post, state.recentPosts]);

  // Handle engagement actions
  const handleLike = () => {
    setState(prev => ({
      ...prev,
      engagement: {
        ...prev.engagement,
        likes: prev.engagement.isLiked ? prev.engagement.likes - 1 : prev.engagement.likes + 1,
        isLiked: !prev.engagement.isLiked,
      },
    }));
  };

  const handleBookmark = () => {
    setState(prev => ({
      ...prev,
      engagement: {
        ...prev.engagement,
        isBookmarked: !prev.engagement.isBookmarked,
      },
    }));
  };

  const handleShare = () => {
    if (state.post) {
      if (navigator.share) {
        navigator.share({
          title: state.post.title,
          text: state.post.excerpt,
          url: window.location.href,
        });
      } else {
        navigator.clipboard.writeText(window.location.href);
      }
    }
  };

  const handleBackToDashboard = () => {
    const categoryParam = searchParamsObj.get('category');
    if (categoryParam) {
      router.push(`/dashboard?category=${categoryParam}`);
    } else {
      router.push('/dashboard');
    }
  };

  const handleBackToBlog = () => {
    router.push('/blog');
  };

  if (state.isLoading) {
    return (
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="flex items-center justify-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            <span className="ml-2 text-muted-foreground">Loading post...</span>
          </div>
        </SidebarInset>
      </SidebarProvider>
    );
  }

  if (state.error || !state.post) {
    return (
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="text-red-500 mb-2">⚠️</div>
              <div className="text-lg font-semibold text-red-700 mb-1">Error</div>
              <div className="text-muted-foreground">{state.error || 'Post not found'}</div>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={handleBackToDashboard}
              >
                Back to Dashboard
              </Button>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    );
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard" onClick={(e) => { e.preventDefault(); handleBackToDashboard(); }}>
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/blog" onClick={(e) => { e.preventDefault(); handleBackToBlog(); }}>
                    Blog
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    {state.post.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 flex-col gap-6 p-6 pt-0">
          {/* Post Header with Engagement */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleBackToDashboard}
                    className="mr-2"
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Dashboard
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleBackToBlog}
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Blog
                  </Button>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={handleLike}
                    className={state.engagement.isLiked ? 'text-red-500' : ''}
                  >
                    <Heart className={`h-4 w-4 mr-1 ${state.engagement.isLiked ? 'fill-current' : ''}`} />
                    {state.engagement.likes}
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={handleBookmark}
                    className={state.engagement.isBookmarked ? 'text-blue-500' : ''}
                  >
                    <Bookmark className={`h-4 w-4 mr-1 ${state.engagement.isBookmarked ? 'fill-current' : ''}`} />
                    Save
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={handleShare}
                  >
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Article */}
          <Card className="mb-8">
            <CardContent className="p-0">
              <PostHeader post={state.post} />
              <div className="prose prose-lg dark:prose-invert max-w-none p-6">
                <PostContent content={state.post.body} />
              </div>
            </CardContent>
          </Card>

          {/* Engagement Stats */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg">Article Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{state.engagement.views}</div>
                  <div className="text-sm text-muted-foreground">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{state.engagement.likes}</div>
                  <div className="text-sm text-muted-foreground">Likes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{state.engagement.comments}</div>
                  <div className="text-sm text-muted-foreground">Comments</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{state.engagement.shares}</div>
                  <div className="text-sm text-muted-foreground">Shares</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Categories */}
          {state.post.categories && state.post.categories.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {state.post.categories.map((category) => (
                    <Badge 
                      key={category._id}
                      variant="secondary"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => router.push(`/dashboard?category=${category.slug?.current}`)}
                    >
                      {category.title}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Related Posts */}
          {state.relatedPosts.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className={`${tektur.className} text-2xl`}>
                  Related Posts
                </CardTitle>
                <CardDescription>
                  More articles you might find interesting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {state.relatedPosts.map((relatedPost) => (
                    <PostCard 
                      key={relatedPost._id} 
                      post={relatedPost} 
                      variant="compact"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Recent Posts */}
          {state.recentPosts.length > 0 && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className={`${tektur.className} text-2xl`}>
                  Recent Posts
                </CardTitle>
                <CardDescription>
                  Stay updated with our latest content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {state.recentPosts.slice(0, 3).map((recentPost) => (
                    <PostCard 
                      key={recentPost._id} 
                      post={recentPost} 
                      variant="compact"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
