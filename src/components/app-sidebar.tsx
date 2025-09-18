"use client"

import * as React from "react"
import {
  AudioWaveform,
  GalleryVerticalEnd,
  Folder,
  Home,
  TrendingUp,
  FileText,
  BarChart3,
  Settings,
  HelpCircle
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { getAllCategories } from "@/lib/blog"
import type { Category } from "@/types/blog"

// Static data for user and teams
const staticData = {
  user: {
    name: "Content Admin",
    email: "admin@overture.io",
    avatar: "/avatars/admin.jpg",
  },
  teams: [
    {
      name: "Overture Agency",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Content Team",
      logo: AudioWaveform,
      plan: "Pro",
    },
  ],
}

// Core navigation items (excluding categories)
const coreNavMain = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    isActive: true,
    items: [],
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
    items: [
      {
        title: "Overview",
        url: "/analytics/overview",
      },
      {
        title: "Reports",
        url: "/analytics/reports",
      },
      {
        title: "Performance",
        url: "/analytics/performance",
      },
    ],
  },
  {
    title: "Content",
    url: "/content",
    icon: FileText,
    items: [
      {
        title: "All Posts",
        url: "/content/posts",
      },
      {
        title: "Drafts",
        url: "/content/drafts",
      },
      {
        title: "Scheduled",
        url: "/content/scheduled",
      },
    ],
  },
  {
    title: "Media",
    url: "/media",
    icon: Folder,
    items: [
      {
        title: "Images",
        url: "/media/images",
      },
      {
        title: "Videos",
        url: "/media/videos",
      },
      {
        title: "Documents",
        url: "/media/documents",
      },
    ],
  },
]

const staticProjects = [
  {
    name: "Recent Posts",
    url: "/dashboard",
    icon: TrendingUp,
  },
  {
    name: "Popular Content",
    url: "/analytics",
    icon: BarChart3,
  },
]

const settingsNav = [
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
    items: [
      {
        title: "General",
        url: "/settings/general",
      },
      {
        title: "Users",
        url: "/settings/users",
      },
      {
        title: "Integrations",
        url: "/settings/integrations",
      },
    ],
  },
  {
    title: "Help & Support",
    url: "/help",
    icon: HelpCircle,
    items: [
      {
        title: "Documentation",
        url: "/help/docs",
      },
      {
        title: "Contact Support",
        url: "/help/contact",
      },
    ],
  },
]



interface SidebarState {
  categories: Category[];
  isLoading: boolean;
  error: string | null;
  lastFetch: number | null;
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [state, setState] = React.useState<SidebarState>({
    categories: [],
    isLoading: true,
    error: null,
    lastFetch: null,
  })

  const fetchCategories = React.useCallback(async (forceRefresh = false) => {
    const now = Date.now()
    const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes
    
    // Skip fetching if recently cached and not forcing refresh
    if (!forceRefresh && state.lastFetch && (now - state.lastFetch) < CACHE_DURATION) {
      return
    }

    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }))
      const fetchedCategories = await getAllCategories()
      
      setState(prev => ({
        ...prev,
        categories: fetchedCategories,
        isLoading: false,
        error: null,
        lastFetch: now,
      }))
    } catch (error) {
      console.error('Error fetching categories:', error)
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to load categories',
        lastFetch: now,
      }))
    }
  }, [state.lastFetch])

  // Initial fetch
  React.useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  // Transform categories into navigation format
  const categoriesNav = state.categories.map(category => ({
    title: category.title,
    url: `/dashboard?category=${category.slug?.current}`,
    icon: Folder,
    isActive: false,
    items: [],
    badge: category.description ? undefined : 'New',
  }))

  // Categories section with loading/error states
  const categoriesSection = {
    title: "Categories",
    url: "/categories",
    icon: Folder,
    isActive: false,
    items: categoriesNav,
    isLoading: state.isLoading,
    error: state.error,
    onRetry: () => fetchCategories(true),
  }

  // Combine static navigation with dynamic categories
  const navMain = [
    ...coreNavMain,
    categoriesSection,
    ...settingsNav,
  ]

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={staticData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
        <NavProjects projects={staticProjects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={staticData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
