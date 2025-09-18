"use client"

import * as React from "react"
import {
  BookOpen,
  TrendingUp,
  Calendar,
  Tag,
  Search,
  Star,
  Clock,
  Users,
  Settings,
  Home,
  Newspaper,
  Archive,
  ChevronDown,
  ChevronRight,
  Globe,
  BarChart3,
  FileText,
  Video,
  Podcast,
  Image as ImageIcon,
  Bell,
  Bookmark,
  History,
  Rss,
  Mail,
} from "lucide-react"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

// Enhanced news platform navigation data
const newsNavData = {
  // Main navigation sections
  navMain: [
    {
      title: "Dashboard",
      url: "/blog",
      icon: Home,
      isActive: true,
      description: "News overview",
    },
    {
      title: "Breaking News",
      url: "/blog/breaking",
      icon: Newspaper,
      badge: "LIVE",
      description: "Latest breaking stories",
    },
    {
      title: "Trending Now",
      url: "/blog/trending",
      icon: TrendingUp,
      description: "Popular this week",
    },
    {
      title: "Latest Articles",
      url: "/blog/latest",
      icon: Clock,
      description: "Most recent posts",
    },
    {
      title: "Most Popular",
      url: "/blog/popular",
      icon: Star,
      description: "Top rated content",
    },
  ],
  
  // Content categories with subcategories
  navCategories: {
    title: "Content Categories",
    items: [
      {
        title: "Technology",
        url: "/blog/category/technology",
        icon: Settings,
        count: 45,
        subItems: [
          { title: "AI & Machine Learning", url: "/blog/category/technology/ai" },
          { title: "Web Development", url: "/blog/category/technology/web-dev" },
          { title: "Mobile Apps", url: "/blog/category/technology/mobile" },
          { title: "Cybersecurity", url: "/blog/category/technology/security" },
        ]
      },
      {
        title: "Business",
        url: "/blog/category/business",
        icon: BarChart3,
        count: 32,
        subItems: [
          { title: "Startups", url: "/blog/category/business/startups" },
          { title: "Finance", url: "/blog/category/business/finance" },
          { title: "Leadership", url: "/blog/category/business/leadership" },
          { title: "Strategy", url: "/blog/category/business/strategy" },
        ]
      },
      {
        title: "Design",
        url: "/blog/category/design",
        icon: BookOpen,
        count: 28,
        subItems: [
          { title: "UI/UX", url: "/blog/category/design/ui-ux" },
          { title: "Branding", url: "/blog/category/design/branding" },
          { title: "Typography", url: "/blog/category/design/typography" },
          { title: "Illustration", url: "/blog/category/design/illustration" },
        ]
      },
      {
        title: "Marketing",
        url: "/blog/category/marketing",
        icon: TrendingUp,
        count: 37,
        subItems: [
          { title: "Digital Marketing", url: "/blog/category/marketing/digital" },
          { title: "Content Strategy", url: "/blog/category/marketing/content" },
          { title: "SEO", url: "/blog/category/marketing/seo" },
          { title: "Social Media", url: "/blog/category/marketing/social" },
        ]
      },
    ],
  },
  
  // Content types
  navContentTypes: {
    title: "Content Types",
    items: [
      {
        title: "Articles",
        url: "/blog/type/articles",
        icon: FileText,
        count: 89,
      },
      {
        title: "Videos",
        url: "/blog/type/videos",
        icon: Video,
        count: 23,
      },
      {
        title: "Podcasts",
        url: "/blog/type/podcasts",
        icon: Podcast,
        count: 15,
      },
      {
        title: "Infographics",
        url: "/blog/type/infographics",
        icon: ImageIcon,
        count: 12,
      },
    ],
  },
  
  // Filters and search
  navFilters: {
    title: "Filters & Search",
    items: [
      {
        title: "Advanced Search",
        url: "/blog/search",
        icon: Search,
      },
      {
        title: "By Date Range",
        url: "/blog/filter/date",
        icon: Calendar,
      },
      {
        title: "By Tags",
        url: "/blog/filter/tags",
        icon: Tag,
      },
      {
        title: "By Author",
        url: "/blog/filter/author",
        icon: Users,
      },
    ],
  },
  
  // User actions
  navUserActions: {
    title: "Quick Actions",
    items: [
      {
        title: "Saved Articles",
        url: "/blog/saved",
        icon: Bookmark,
        count: 8,
      },
      {
        title: "Reading History",
        url: "/blog/history",
        icon: History,
      },
      {
        title: "Notifications",
        url: "/blog/notifications",
        icon: Bell,
        badge: "3",
      },
      {
        title: "Subscribe",
        url: "/blog/subscribe",
        icon: Mail,
      },
    ],
  },
  
  // Archive
  navArchive: {
    title: "Archive",
    items: [
      {
        title: "All Articles",
        url: "/blog/archive",
        icon: Archive,
      },
      {
        title: "RSS Feed",
        url: "/blog/rss",
        icon: Rss,
      },
      {
        title: "Newsletter",
        url: "/blog/newsletter",
        icon: Mail,
      },
    ],
  },
  
  // Featured collections
  projects: [
    {
      name: "Featured Stories",
      url: "/blog/featured",
      icon: Star,
      description: "Editor's selection",
    },
    {
      name: "Editor's Pick",
      url: "/blog/editors-pick",
      icon: BookOpen,
      description: "Handpicked content",
    },
    {
      name: "Most Read",
      url: "/blog/most-read",
      icon: TrendingUp,
      description: "Trending articles",
    },
    {
      name: "Weekly Digest",
      url: "/blog/weekly-digest",
      icon: Calendar,
      description: "Week's highlights",
    },
  ],
  
  // User profile
  user: {
    name: "News Editor",
    email: "editor@overture.agency",
    avatar: "/avatars/news-editor.jpg",
    role: "Senior Editor",
    stats: {
      articles: 156,
      followers: 2340,
      views: "45.2K",
    },
  },
}

// Enhanced navigation item component
interface NavItemProps {
  item: {
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    badge?: string;
    count?: number;
  };
  isActive?: boolean;
}

function NavItem({ item, isActive = false }: NavItemProps) {
  return (
    <SidebarMenuButton
      isActive={isActive}
      className="group relative w-full justify-start"
    >
      <item.icon className="h-4 w-4" />
      <span className="font-medium">{item.title}</span>
      {item.badge && (
        <Badge 
          variant="destructive" 
          className="ml-auto text-xs px-1.5 py-0.5 h-5"
        >
          {item.badge}
        </Badge>
      )}
      {item.count !== undefined && (
        <Badge 
          variant="secondary" 
          className="ml-auto text-xs px-1.5 py-0.5 h-5"
        >
          {item.count}
        </Badge>
      )}
    </SidebarMenuButton>
  )
}

// Collapsible section component
interface CollapsibleNavSectionProps {
  title: string;
  items: {
    title: string;
    url: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    count?: number;
    subItems?: { title: string; url: string }[];
  }[];
  defaultOpen?: boolean;
}

function CollapsibleNavSection({ 
  title, 
  items, 
  defaultOpen = false 
}: CollapsibleNavSectionProps) {
  return (
    <Collapsible defaultOpen={defaultOpen} className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-sidebar-accent rounded-md transition-colors">
            <span className="font-semibold text-sm">{title}</span>
            <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                {item.subItems ? (
                  <Collapsible defaultOpen={false} className="group/submenu">
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="group/submenu-button">
                        <item.icon className="h-4 w-4" />
                        <span className="flex-1">{item.title}</span>
                        {item.count !== undefined && (
                          <Badge variant="outline" className="text-xs">
                            {item.count}
                          </Badge>
                        )}
                        <ChevronRight className="h-3 w-3 ml-auto transition-transform group-data-[state=open]/submenu:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.subItems.map((subItem: { title: string; url: string }) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url} className="text-xs" title={subItem.title}>
                                {subItem.title}
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <a href={item.url} className="block" title={item.title}>
                    <NavItem item={item} />
                  </a>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  )
}

// Simple section component
interface SimpleNavSectionProps {
  title: string;
  items: {
    title: string;
    url: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    badge?: string;
    count?: number;
  }[];
}

function SimpleNavSection({ title, items }: SimpleNavSectionProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="font-semibold text-sm mb-2">
        {title}
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <a href={item.url} className="block">
              <NavItem item={item} />
            </a>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

export function NewsSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="p-4">
          <TeamSwitcher
            teams={[
              {
                name: "Overture News",
                logo: Globe,
                plan: "Professional",
              },
            ]}
          />
          <div className="mt-4 p-3 bg-sidebar-accent rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Bell className="h-4 w-4 text-sidebar-accent-foreground" />
              <span className="text-sm font-medium text-sidebar-accent-foreground">
                Live Updates
              </span>
            </div>
            <p className="text-xs text-sidebar-accent-foreground/70">
              3 new articles published in the last hour
            </p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="py-4">
        {/* Main Navigation */}
        <SidebarGroup className="mb-2">
          <SidebarMenu>
            {newsNavData.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <a href={item.url} className="block">
                  <NavItem item={item} isActive={item.isActive} />
                </a>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        
        {/* Featured Collections */}
        <SidebarGroup className="mb-4">
          <SidebarGroupLabel className="font-semibold text-sm mb-2 flex items-center gap-2">
            <Star className="h-4 w-4" />
            Featured Collections
          </SidebarGroupLabel>
          <NavProjects projects={newsNavData.projects} />
        </SidebarGroup>
        
        {/* Content Categories */}
        <CollapsibleNavSection 
          title="Content Categories" 
          items={newsNavData.navCategories.items} 
          defaultOpen={true}
        />
        
        {/* Content Types */}
        <CollapsibleNavSection 
          title="Content Types" 
          items={newsNavData.navContentTypes.items} 
          defaultOpen={false}
        />
        
        {/* Filters & Search */}
        <SimpleNavSection 
          title="Filters & Search" 
          items={newsNavData.navFilters.items} 
        />
        
        {/* User Actions */}
        <SimpleNavSection 
          title="Quick Actions" 
          items={newsNavData.navUserActions.items} 
        />
        
        {/* Archive */}
        <SimpleNavSection 
          title="Archive" 
          items={newsNavData.navArchive.items} 
        />
      </SidebarContent>
      
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-sidebar-accent rounded-lg">
            <div className="flex-1">
              <p className="text-sm font-medium text-sidebar-accent-foreground">
                Newsletter
              </p>
              <p className="text-xs text-sidebar-accent-foreground/70">
                Get weekly updates
              </p>
            </div>
            <Button size="sm" variant="outline" className="h-8">
              <Mail className="h-3 w-3 mr-1" />
              Subscribe
            </Button>
          </div>
          
          <NavUser user={newsNavData.user} />
        </div>
      </SidebarFooter>
      
      <SidebarRail />
    </Sidebar>
  )
}
