"use client"

import { useState, useEffect } from "react"
import { AppSidebar } from "@/components/app-sidebar"
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
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PostCard } from "@/components/blog/PostCard"
import { getAllCategories, getAllPosts, getPostsByCategory } from "@/lib/blog"
import type { PostPreview, Category } from "@/types/blog"
import {
  Search,
  Filter,
  TrendingUp,
  Plus,
  FileText,
  Eye,
  Calendar,
  Loader2
} from "lucide-react"

interface DashboardState {
  categories: Category[]
  posts: PostPreview[]
  filteredPosts: PostPreview[]
  selectedCategory: string | null
  searchQuery: string
  sortBy: 'latest' | 'popular' | 'title'
  isLoading: boolean
  error: string | null
}

export default function DashboardPage() {
  const [state, setState] = useState<DashboardState>({
    categories: [],
    posts: [],
    filteredPosts: [],
    selectedCategory: null,
    searchQuery: '',
    sortBy: 'latest',
    isLoading: true,
    error: null,
  })

  // Fetch categories and posts on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setState(prev => ({ ...prev, isLoading: true }))
        
        // Fetch categories and posts in parallel
        const [categories, posts] = await Promise.all([
          getAllCategories(),
          getAllPosts()
        ])
        
        setState(prev => ({
          ...prev,
          categories,
          posts,
          filteredPosts: posts,
          isLoading: false,
          error: null,
        }))
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
        setState(prev => ({
          ...prev,
          isLoading: false,
          error: 'Failed to load data. Please try again.',
        }))
      }
    }

    fetchData()
  }, [])

  // Filter and sort posts when dependencies change
  useEffect(() => {
    const filterAndSortPosts = async () => {
      try {
        let postsToFilter = state.posts

        // Filter by category if selected
        if (state.selectedCategory) {
          postsToFilter = await getPostsByCategory(state.selectedCategory)
        }

        // Filter by search query
        if (state.searchQuery) {
          const query = state.searchQuery.toLowerCase()
          postsToFilter = postsToFilter.filter(post =>
            post.title.toLowerCase().includes(query) ||
            post.excerpt?.toLowerCase().includes(query) ||
            post.author?.name.toLowerCase().includes(query)
          )
        }

        // Sort posts
        const sortedPosts = [...postsToFilter].sort((a, b) => {
          switch (state.sortBy) {
            case 'latest':
              return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
            case 'popular':
              // For demo purposes, sort by title length as a proxy for popularity
              return b.title.length - a.title.length
            case 'title':
              return a.title.localeCompare(b.title)
            default:
              return 0
          }
        })

        setState(prev => ({
          ...prev,
          filteredPosts: sortedPosts,
        }))
      } catch (error) {
        console.error('Error filtering posts:', error)
        setState(prev => ({
          ...prev,
          error: 'Failed to filter posts. Please try again.',
        }))
      }
    }

    filterAndSortPosts()
  }, [state.posts, state.selectedCategory, state.searchQuery, state.sortBy])

  const handleCategorySelect = (categorySlug: string | null) => {
    setState(prev => ({
      ...prev,
      selectedCategory: categorySlug,
    }))
  }

  const handleSearchChange = (query: string) => {
    setState(prev => ({
      ...prev,
      searchQuery: query,
    }))
  }

  const handleSortChange = (sortBy: 'latest' | 'popular' | 'title') => {
    setState(prev => ({
      ...prev,
      sortBy,
    }))
  }

  const getStats = () => {
    return {
      totalPosts: state.posts.length,
      totalCategories: state.categories.length,
      filteredPosts: state.filteredPosts.length,
      latestPost: state.posts[0]?.publishedAt ? new Date(state.posts[0].publishedAt).toLocaleDateString() : 'N/A'
    }
  }

  const stats = getStats()

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
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard">
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {state.selectedCategory && (
                  <>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="capitalize">
                        {state.selectedCategory}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 flex-col gap-6 p-6 pt-0">
          {state.isLoading ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Loading dashboard...</span>
            </div>
          ) : state.error ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="text-red-500 mb-2">⚠️</div>
                <div className="text-lg font-semibold text-red-700 mb-1">Error</div>
                <div className="text-muted-foreground">{state.error}</div>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => window.location.reload()}
                >
                  Retry
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Stats Cards */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalPosts}</div>
                    <p className="text-xs text-muted-foreground">
                      Published articles
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Categories</CardTitle>
                    <Filter className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalCategories}</div>
                    <p className="text-xs text-muted-foreground">
                      Active categories
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Filtered</CardTitle>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.filteredPosts}</div>
                    <p className="text-xs text-muted-foreground">
                      Current results
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Latest Post</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.latestPost}</div>
                    <p className="text-xs text-muted-foreground">
                      Most recent
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Filters and Search */}
              <Card>
                <CardHeader>
                  <CardTitle>Content Management</CardTitle>
                  <CardDescription>
                    Browse and manage your blog posts by category and search
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col lg:flex-row gap-4">
                    {/* Search */}
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          placeholder="Search posts, authors..."
                          value={state.searchQuery}
                          onChange={(e) => handleSearchChange(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    {/* Category Filter */}
                    <Select value={state.selectedCategory || 'all'} onValueChange={handleCategorySelect}>
                      <SelectTrigger className="w-full lg:w-48">
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {state.categories.map((category) => (
                          <SelectItem key={category._id} value={category.slug?.current || ''}>
                            {category.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {/* Sort */}
                    <Select value={state.sortBy} onValueChange={handleSortChange}>
                      <SelectTrigger className="w-full lg:w-40">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="latest">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Latest
                          </div>
                        </SelectItem>
                        <SelectItem value="popular">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4" />
                            Popular
                          </div>
                        </SelectItem>
                        <SelectItem value="title">Title</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* New Post Button */}
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      New Post
                    </Button>
                  </div>

                  {/* Category Pills */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-sm text-muted-foreground mr-2">Quick filter:</span>
                    <Badge 
                      variant={state.selectedCategory === null ? "default" : "secondary"}
                      className="cursor-pointer"
                      onClick={() => handleCategorySelect(null)}
                    >
                      All Posts
                    </Badge>
                    {state.categories.slice(0, 5).map((category) => (
                      <Badge 
                        key={category._id}
                        variant={state.selectedCategory === category.slug?.current ? "default" : "secondary"}
                        className="cursor-pointer"
                        onClick={() => handleCategorySelect(category.slug?.current || null)}
                      >
                        {category.title}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Posts Grid */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold tracking-tight">
                    {state.selectedCategory 
                      ? `${state.categories.find(c => c.slug?.current === state.selectedCategory)?.title || 'Category'} Posts`
                      : 'All Posts'}
                  </h2>
                  <div className="text-sm text-muted-foreground">
                    Showing {state.filteredPosts.length} of {state.posts.length} posts
                  </div>
                </div>

                {state.filteredPosts.length === 0 ? (
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12">
                      <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No posts found</h3>
                      <p className="text-muted-foreground text-center mb-4">
                        {state.searchQuery || state.selectedCategory
                          ? 'Try adjusting your search or filter criteria.'
                          : 'Start by creating your first blog post.'}
                      </p>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Create Post
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {state.filteredPosts.map((post) => (
                      <PostCard 
                        key={post._id} 
                        post={post} 
                        variant={state.selectedCategory ? 'default' : 'featured'}
                      />
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
