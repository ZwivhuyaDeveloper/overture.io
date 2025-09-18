'use client';

import { useState, useEffect } from 'react';
import { getAllProjects, getAllProjectCategories } from '@/lib/project';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { NavMenu } from '@/components/layout/nav-menu';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Code, Globe, Smartphone, Calendar, Star, ArrowRight, ExternalLink, Github } from 'lucide-react';
import type { ProjectPreview, ProjectCategory } from '@/types/project';
import { Tektur, Syncopate, Afacad } from 'next/font/google';
import Link from 'next/link';
import Silk from '@/components/Silk';

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

const afacad = Afacad({
  weight: ['400', '600', '700'],
  variable: '--font-afacad',
  subsets: ['latin'],
});

export default function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectPreview[]>([]);
  const [categories, setCategories] = useState<ProjectCategory[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<ProjectPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProjectType, setSelectedProjectType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, categoriesData] = await Promise.all([
          getAllProjects(),
          getAllProjectCategories()
        ]);
        setProjects(projectsData);
        setFilteredProjects(projectsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = projects;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.categories.some(cat => cat.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        project.technologies.some(tech => tech.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project =>
        project.categories.some(cat => cat.slug?.current === selectedCategory)
      );
    }

    // Filter by project type
    if (selectedProjectType !== 'all') {
      filtered = filtered.filter(project => project.projectType === selectedProjectType);
    }

    // Filter by status
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(project => project.status === selectedStatus);
    }

    setFilteredProjects(filtered);
  }, [projects, searchTerm, selectedCategory, selectedProjectType, selectedStatus]);

  const projectTypeOptions = [
    { value: 'web', label: 'Web Application' },
    { value: 'mobile', label: 'Mobile Application' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'website', label: 'Website' },
    { value: 'platform', label: 'Web Platform' },
    { value: 'api', label: 'API Development' },
    { value: 'fullstack', label: 'Full Stack' },
  ];

  const statusOptions = [
    { value: 'completed', label: 'Completed' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'planning', label: 'Planning' },
    { value: 'on-hold', label: 'On Hold' },
  ];

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

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <NavMenu />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mt-10 mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Projects Portfolio</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <div className="px-4 mb-12">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 md:p-12 text-white">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <Silk
                  speed={5}
                  scale={1}
                  color="#7B7481"
                  noiseIntensity={1.5}
                  rotation={0}
                />
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-fit h-fit p-3 bg-white/20 backdrop-blur-sm rounded-full px-6 mx-auto mb-6 border border-white/30">
                    <h2 className={`${tektur.className} tracking-widest text-lg text-white`}>
                      Portfolio
                    </h2>
                  </div>
                  <h1 className={`${syncopate.className} text-4xl md:text-6xl font-bold text-white mb-6`}>
                    Our Projects
                  </h1>
                  <p className={`${afacad.className} text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed`}>
                    Explore our portfolio of innovative web and mobile development projects. 
                    Each project showcases our commitment to excellence and cutting-edge technology.
                  </p>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{projects.length}</div>
                    <div className="text-white/80">Total Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{projects.filter(p => p.featured).length}</div>
                    <div className="text-white/80">Featured</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{projects.filter(p => p.status === 'completed').length}</div>
                    <div className="text-white/80">Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{categories.length}</div>
                    <div className="text-white/80">Categories</div>
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
                    placeholder="Search projects, clients, technologies..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 h-12 text-base border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-48 h-12 border-gray-300 dark:border-gray-600">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category._id} value={category.slug?.current || ''}>
                        {category.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedProjectType} onValueChange={setSelectedProjectType}>
                  <SelectTrigger className="w-full sm:w-48 h-12 border-gray-300 dark:border-gray-600">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {projectTypeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-full sm:w-40 h-12 border-gray-300 dark:border-gray-600">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    {statusOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {searchTerm && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Search: {searchTerm}
                  <button
                    onClick={() => setSearchTerm('')}
                    className="ml-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-0.5"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {selectedCategory !== 'all' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Category: {categories.find(c => c.slug?.current === selectedCategory)?.title}
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="ml-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-0.5"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {selectedProjectType !== 'all' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Type: {projectTypeOptions.find(t => t.value === selectedProjectType)?.label}
                  <button
                    onClick={() => setSelectedProjectType('all')}
                    className="ml-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-0.5"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {selectedStatus !== 'all' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Status: {statusOptions.find(s => s.value === selectedStatus)?.label}
                  <button
                    onClick={() => setSelectedStatus('all')}
                    className="ml-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-0.5"
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>
          </div>

        {/* Projects Grid */}
        <div className="space-y-8">
            {/* Featured Projects */}
            {filteredProjects.filter(p => p.featured).length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <h2 className={`${syncopate.className} text-2xl font-bold text-gray-900 dark:text-white`}>
                    Featured Projects
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects
                    .filter(project => project.featured)
                    .map((project) => (
                      <ProjectCard key={project._id} project={project} featured />
                    ))}
                </div>
              </div>
            )}

            {/* All Projects */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`${syncopate.className} text-2xl font-bold text-gray-900 dark:text-white`}>
                  All Projects ({filteredProjects.length})
                </h2>
              </div>
              
              {filteredProjects.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-500 dark:text-gray-400 mb-4">
                    No projects found matching your criteria.
                  </div>
                  <Button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSelectedProjectType('all');
                      setSelectedStatus('all');
                    }}
                    variant="outline"
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects
                    .filter(project => !project.featured)
                    .map((project) => (
                      <ProjectCard key={project._id} project={project} />
                    ))}
                </div>
              )}
            </div>
          </div>
      </div>
    </div>
  );
}
