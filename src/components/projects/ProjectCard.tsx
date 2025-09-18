"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { urlFor } from '@/lib/project';
import type { ProjectPreview } from '@/types/project';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  User, 
  Code,
  Globe,
  Smartphone,
  Star,
  Eye,
  Heart,
  Bookmark
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: ProjectPreview;
  featured?: boolean;
}

interface EngagementMetrics {
  views: number;
  likes: number;
  isBookmarked: boolean;
  isLiked: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [engagement, setEngagement] = useState<EngagementMetrics>({
    views: Math.floor(Math.random() * 5000) + 500,
    likes: Math.floor(Math.random() * 200) + 20,
    isBookmarked: false,
    isLiked: false,
  });

  const [imageLoaded, setImageLoaded] = useState(false);

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

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const getProjectTypeIcon = (type: string) => {
    switch (type) {
      case 'mobile':
        return <Smartphone className="h-4 w-4" />;
      case 'api':
        return <Code className="h-4 w-4" />;
      default:
        return <Globe className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'planning':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'on-hold':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getProjectTypeLabel = (type: string) => {
    switch (type) {
      case 'web': return 'Web App';
      case 'mobile': return 'Mobile App';
      case 'ecommerce': return 'E-commerce';
      case 'website': return 'Website';
      case 'platform': return 'Platform';
      case 'api': return 'API';
      case 'fullstack': return 'Full Stack';
      default: return type;
    }
  };

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group"
      >
        <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="relative h-64 overflow-hidden">
            {project.mainImage && (
              <>
                <Image
                  src={urlFor(project.mainImage).url()}
                  alt={project.mainImage.alt || project.title}
                  fill
                  className={`object-cover transition-transform duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImageLoaded(true)}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </>
            )}
            
            {/* Featured Badge */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-yellow-500 text-white border-yellow-500 flex items-center gap-1">
                <Star className="h-3 w-3" />
                Featured
              </Badge>
            </div>

            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <Badge className={getStatusColor(project.status)}>
                {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
              </Badge>
            </div>

            {/* Project Type Icon */}
            <div className="absolute bottom-4 left-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                {getProjectTypeIcon(project.projectType)}
              </div>
            </div>
          </div>

          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs flex items-center gap-1">
                    {getProjectTypeIcon(project.projectType)}
                    {getProjectTypeLabel(project.projectType)}
                  </Badge>
                  {project.client && (
                    <Badge variant="outline" className="text-xs">
                      {project.client}
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                  {project.excerpt}
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pb-3">
            {/* Technologies */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Badge key={tech._id} variant="outline" className="text-xs">
                    {tech.name}
                  </Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.technologies.length - 4} more
                  </Badge>
                )}
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-1">
                {project.categories.slice(0, 2).map((category) => (
                  <Badge 
                    key={category._id} 
                    variant="secondary" 
                    className="text-xs"
                    style={{ 
                      backgroundColor: category.color ? `${category.color}20` : undefined,
                      color: category.color || undefined,
                      borderColor: category.color ? `${category.color}40` : undefined
                    }}
                  >
                    {category.title}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>

          <CardFooter className="pt-3">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {formatNumber(engagement.views)}
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  {formatNumber(engagement.likes)}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleLike}
                  className={`p-2 h-8 w-8 ${engagement.isLiked ? 'text-red-500' : 'text-gray-500'}`}
                >
                  <Heart className={`h-4 w-4 ${engagement.isLiked ? 'fill-current' : ''}`} />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleBookmark}
                  className={`p-2 h-8 w-8 ${engagement.isBookmarked ? 'text-blue-500' : 'text-gray-500'}`}
                >
                  <Bookmark className={`h-4 w-4 ${engagement.isBookmarked ? 'fill-current' : ''}`} />
                </Button>
                <Button asChild size="sm" className="ml-2">
                  <Link href={`/projects/${project.slug.current}`}>
                    View Details
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="h-full overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          {project.mainImage && (
            <>
              <Image
                src={urlFor(project.mainImage).url()}
                alt={project.mainImage.alt || project.title}
                fill
                className={`object-cover transition-transform duration-300 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </>
          )}
          
          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            <Badge className={getStatusColor(project.status)}>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
            </Badge>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-yellow-500 text-white border-yellow-500 flex items-center gap-1">
                <Star className="h-3 w-3" />
                Featured
              </Badge>
            </div>
          )}
        </div>

        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs flex items-center gap-1">
                  {getProjectTypeIcon(project.projectType)}
                  {getProjectTypeLabel(project.projectType)}
                </Badge>
                {project.client && (
                  <Badge variant="outline" className="text-xs">
                    {project.client}
                  </Badge>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                {project.excerpt}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pb-3">
          {/* Technologies */}
          <div className="space-y-2">
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge key={tech._id} variant="outline" className="text-xs">
                  {tech.name}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{project.technologies.length - 3} more
                </Badge>
              )}
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-1">
              {project.categories.slice(0, 2).map((category) => (
                <Badge 
                  key={category._id} 
                  variant="secondary" 
                  className="text-xs"
                  style={{ 
                    backgroundColor: category.color ? `${category.color}20` : undefined,
                    color: category.color || undefined,
                    borderColor: category.color ? `${category.color}40` : undefined
                  }}
                >
                  {category.title}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-3">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {formatNumber(engagement.views)}
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                {formatNumber(engagement.likes)}
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Button
                size="sm"
                variant="ghost"
                onClick={handleLike}
                className={`p-2 h-8 w-8 ${engagement.isLiked ? 'text-red-500' : 'text-gray-500'}`}
              >
                <Heart className={`h-4 w-4 ${engagement.isLiked ? 'fill-current' : ''}`} />
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link href={`/projects/${project.slug.current}`}>
                  View Details
                </Link>
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
