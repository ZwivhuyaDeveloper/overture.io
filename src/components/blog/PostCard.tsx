"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { urlFor } from '@/lib/blog';
import type { PostPreview } from '@/types/blog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Eye, 
  Heart, 
  MessageCircle, 
  Bookmark, 
  Share2, 
  Clock, 
  User, 
  Newspaper
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { motion } from 'framer-motion';

interface PostCardProps {
  post: PostPreview;
  variant?: 'default' | 'featured' | 'compact';
}

interface EngagementMetrics {
  views: number;
  likes: number;
  comments: number;
  shares: number;
  readingProgress: number;
  isBookmarked: boolean;
  isLiked: boolean;
}

export function PostCard({ post, variant = 'default' }: PostCardProps) {
  const [engagement, setEngagement] = useState<EngagementMetrics>({
    views: Math.floor(Math.random() * 1000) + 100,
    likes: Math.floor(Math.random() * 100) + 10,
    comments: Math.floor(Math.random() * 50) + 5,
    shares: Math.floor(Math.random() * 30) + 2,
    readingProgress: 0,
    isBookmarked: false,
    isLiked: false,
  });

  const [showShareMenu, setShowShareMenu] = useState(false);

  const formatDate = (dateString: string) => {
    try {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true });
    } catch {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
  };

  const getReadingTime = (content?: unknown) => {
    // Estimate reading time based on content length
    if (!content) return 3;
    const text = JSON.stringify(content);
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const readingTime = getReadingTime(post.excerpt);

  const handleLike = () => {
    setEngagement(prev => ({
      ...prev,
      likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1,
      isLiked: !prev.isLiked,
    }));
  };

  const handleBookmark = () => {
    setEngagement(prev => ({
      ...prev,
      isBookmarked: !prev.isBookmarked,
    }));
  };

  const handleShare = () => {
    setEngagement(prev => ({
      ...prev,
      shares: prev.shares + 1,
    }));
    setShowShareMenu(!showShareMenu);
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link href={`/blog/${post.slug.current}`} className="group">
          <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-sm overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                {post.mainImage && (
                  <div className="flex-shrink-0 w-20 h-20 relative overflow-hidden rounded-lg">
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.mainImage.alt || post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        News
                      </Badge>
                      {engagement.readingProgress > 0 && (
                        <Badge variant="outline" className="text-xs">
                          {Math.round(engagement.readingProgress)}% read
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(post.publishedAt)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                  )}
                  
                  {/* Engagement Metrics */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{formatNumber(engagement.views)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        <span>{formatNumber(engagement.likes)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        <span>{formatNumber(engagement.comments)}</span>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-6 w-6 p-0"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLike();
                        }}
                      >
                        <Heart className={`h-3 w-3 ${engagement.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-6 w-6 p-0"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookmark();
                        }}
                      >
                        <Bookmark className={`h-3 w-3 ${engagement.isBookmarked ? 'fill-blue-500 text-blue-500' : ''}`} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Link href={`/blog/${post.slug.current}`} className="group">
        <Card className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden h-full flex flex-col relative">
          {/* Reading Progress Bar */}
          {engagement.readingProgress > 0 && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 z-10">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                style={{ width: `${engagement.readingProgress}%` }}
              />
            </div>
          )}
          
          {/* Image Container */}
          {post.mainImage ? (
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Overlay Actions */}
              <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {variant === 'featured' && (
                  <Badge className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
                    Featured
                  </Badge>
                )}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0 bg-white/90 hover:bg-white text-gray-800 backdrop-blur-sm shadow-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    handleBookmark();
                  }}
                >
                  <Bookmark className={`h-4 w-4 ${engagement.isBookmarked ? 'fill-blue-500 text-blue-500' : ''}`} />
                </Button>
              </div>
              
              {/* Engagement Stats Overlay */}
              <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white text-sm">
                <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Eye className="h-3 w-3" />
                  <span>{formatNumber(engagement.views)}</span>
                </div>
                <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Heart className="h-3 w-3" />
                  <span>{formatNumber(engagement.likes)}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
              <div className="text-gray-400 dark:text-gray-600">
                <Newspaper className="h-12 w-12 mx-auto" />
              </div>
            </div>
          )}
          
          <CardHeader className="pb-3">
            {/* Category and Date */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  News
                </Badge>
                {engagement.readingProgress > 0 && (
                  <Badge variant="outline" className="text-xs">
                    {Math.round(engagement.readingProgress)}% read
                  </Badge>
                )}
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="h-3 w-3" />
                  <span>{readingTime} min read</span>
                </div>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {formatDate(post.publishedAt)}
              </span>
            </div>
            
            {/* Title */}
            <h3 className={`font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
              variant === 'featured' ? 'text-xl' : 'text-lg'
            }`}>
              {post.title}
            </h3>
            
            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-3">
                {post.excerpt}
              </p>
            )}
            
            {/* Author Info */}
            {post.author && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-xs">
                      {post.author?.name?.charAt(0) || <User className="h-3 w-3" />}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {post.author.name}
                  </span>
                </div>
                
                {/* Quick Actions */}
                <div className="flex items-center gap-1">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 w-6 p-0"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLike();
                    }}
                  >
                    <Heart className={`h-3 w-3 ${engagement.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                </div>
              </div>
            )}
          </CardHeader>
          
          <CardFooter className="pt-0 mt-auto">
            {/* Enhanced Engagement Metrics */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  <span>{formatNumber(engagement.views)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-3 w-3" />
                  <span>{formatNumber(engagement.likes)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-3 w-3" />
                  <span>{formatNumber(engagement.comments)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Share2 className="h-3 w-3" />
                  <span>{formatNumber(engagement.shares)}</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLike();
                  }}
                >
                  <Heart className={`h-4 w-4 ${engagement.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0"
                  onClick={(e) => {
                    e.preventDefault();
                    handleBookmark();
                  }}
                >
                  <Bookmark className={`h-4 w-4 ${engagement.isBookmarked ? 'fill-blue-500 text-blue-500' : ''}`} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0 relative"
                  onClick={(e) => {
                    e.preventDefault();
                    handleShare();
                  }}
                >
                  <Share2 className="h-4 w-4" />
                  {showShareMenu && (
                    <div className="absolute bottom-full right-0 mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-2 min-w-[120px] z-20">
                      <div className="text-xs text-gray-600 dark:text-gray-400 font-medium mb-2">Share to:</div>
                      {['Twitter', 'LinkedIn', 'Facebook', 'Copy'].map((platform) => (
                        <button
                          key={platform}
                          className="block w-full text-left px-2 py-1 text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                          onClick={() => {
                            // Handle share action
                            setShowShareMenu(false);
                          }}
                        >
                          {platform}
                        </button>
                      ))}
                    </div>
                  )}
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
