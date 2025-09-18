import { getAllPosts } from '@/lib/blog';
import { PostCard } from '@/components/blog/PostCard';
import { NewsSidebar } from '@/components/news-sidebar';
import { BreakingNewsHeader } from '@/components/breaking-news-header';
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
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, TrendingUp, Clock, Star, Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { Tektur, Syncopate } from 'next/font/google';

const tektur = Tektur({
  weight: ['400', '700'],
  variable: '--font-tektur',
  subsets: ['latin'],
});

const syncopate = Syncopate({
  weight: ['400', '700'],
  variable: '--font-syncopate',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'News Hub - Overture Agency',
  description: 'Latest news, insights, and updates from Overture Agency',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  // Mock featured posts (in real app, this would come from Sanity)
  const featuredPosts = posts.slice(0, 3);
  const regularPosts = posts.slice(3);

  return (
    <SidebarProvider>
      <NewsSidebar />
      <SidebarInset>
        <BreakingNewsHeader />
        
        {/* Main Content */}
        <div className="flex flex-1 flex-col gap-6 p-6 pt-0">
          {/* Breadcrumb */}
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      News Hub
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Latest Articles</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>

          {/* Hero Section */}
          <div className="px-4 mb-12">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 md:p-12 text-white">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px)',
                  backgroundSize: '50px 50px'
                }} />
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-fit h-fit p-3 bg-white/20 backdrop-blur-sm rounded-full px-6 mx-auto mb-6 border border-white/30">
                    <h2 className={`${tektur.className} tracking-widest text-lg text-white`}>
                      News Hub
                    </h2>
                  </div>
                  <h1 className={`${syncopate.className} text-4xl md:text-6xl font-bold text-white mb-6`}>
                    Latest News & Insights
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                    Stay informed with our latest articles, industry insights, and company updates from the forefront of innovation.
                  </p>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">1,234</div>
                    <div className="text-white/80">Articles Published</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">56K</div>
                    <div className="text-white/80">Active Readers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">89</div>
                    <div className="text-white/80">Expert Authors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* Advanced Filter Bar */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Main Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input 
                      placeholder="Search articles, topics, authors..." 
                      className="pl-12 pr-4 h-12 text-base border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Select>
                    <SelectTrigger className="w-full sm:w-48 h-12 border-gray-300 dark:border-gray-600">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="ai">Artificial Intelligence</SelectItem>
                      <SelectItem value="web3">Web3 & Blockchain</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select>
                    <SelectTrigger className="w-full sm:w-40 h-12 border-gray-300 dark:border-gray-600">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="latest">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          Latest
                        </div>
                      </SelectItem>
                      <SelectItem value="popular">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          Popular
                        </div>
                      </SelectItem>
                      <SelectItem value="featured">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4" />
                          Featured
                        </div>
                      </SelectItem>
                      <SelectItem value="discussed">
                        <div className="flex items-center gap-2">
                          <MessageCircle className="h-4 w-4" />
                          Most Discussed
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button variant="outline" size="sm" className="h-12 px-4 border-gray-300 dark:border-gray-600">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </div>
              
              {/* Quick Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">Popular tags:</span>
                {['AI', 'Web3', 'Design', 'Startup', 'Innovation'].map((tag) => (
                  <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

          {/* Featured Articles Section */}
          {featuredPosts.length > 0 && (
            <div className="px-4 mb-12">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
                  <h2 className={`${tektur.className} text-3xl font-bold text-gray-900 dark:text-white`}>
                    Editor&apos;s Pick
                  </h2>
                  <Badge className="bg-red-600 hover:bg-red-700 text-white ml-2">
                    Featured
                  </Badge>
                </div>
                <Button variant="outline" size="sm" className="hidden sm:flex">
                  View All Featured
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
              
              {/* Main Featured Article */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2">
                  <PostCard 
                    key={featuredPosts[0]?._id} 
                    post={featuredPosts[0]} 
                    variant="featured" 
                  />
                </div>
                <div className="space-y-6">
                  {featuredPosts.slice(1, 3).map((post) => (
                    <PostCard 
                      key={post._id} 
                      post={post} 
                      variant="compact" 
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Trending Topics Section */}
          <div className="px-4 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></div>
              <h2 className={`${tektur.className} text-3xl font-bold text-gray-900 dark:text-white`}>
                Trending Topics
              </h2>
              <Badge variant="secondary" className="ml-2">
                <TrendingUp className="h-3 w-3 mr-1" />
                Hot
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Artificial Intelligence", count: 234, trend: "up" },
                { title: "Web3 Development", count: 189, trend: "up" },
                { title: "UX Design Trends", count: 156, trend: "stable" },
                { title: "Startup Funding", count: 143, trend: "up" }
              ].map((topic, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{topic.title}</h3>
                    <TrendingUp className={`h-4 w-4 ${topic.trend === 'up' ? 'text-green-500' : 'text-gray-400'}`} />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{topic.count} articles</p>
                </div>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                <h2 className={`${tektur.className} text-3xl font-bold text-gray-900 dark:text-white`}>
                  All Articles
                </h2>
                <Badge variant="secondary" className="ml-2">
                  {regularPosts.length} articles
                </Badge>
              </div>
              
              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                  <div className="grid grid-cols-2 gap-1 w-4 h-4">
                    <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                  </div>
                </Button>
                <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                  <div className="flex flex-col gap-0.5 w-4 h-4">
                    <div className="w-4 h-0.5 bg-current rounded-sm"></div>
                    <div className="w-3 h-0.5 bg-current rounded-sm"></div>
                    <div className="w-4 h-0.5 bg-current rounded-sm"></div>
                  </div>
                </Button>
              </div>
            </div>
            
            {regularPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  No articles yet
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                  Check back soon for our latest news articles and insights!
                </p>
              </div>
            )}
          </div>

          {/* Load More Button */}
          {regularPosts.length > 0 && (
            <div className="flex justify-center mt-8 px-4">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
