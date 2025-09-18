"use client"

import { ChevronRight, type LucideIcon, Loader2, AlertCircle, RefreshCw } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
      badge?: string
    }[]
    isLoading?: boolean
    error?: string | null
    onRetry?: () => void
    badge?: string
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          // Handle loading state for categories
          if (item.isLoading && item.title === "Categories") {
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>{item.title}</span>
                  <Badge variant="secondary" className="ml-auto">Loading...</Badge>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          }

          // Handle error state for categories
          if (item.error && item.title === "Categories") {
            return (
              <SidebarMenuItem key={item.title}>
                <div className="flex flex-col space-y-2 p-2">
                  <SidebarMenuButton>
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    <span>{item.title}</span>
                    <Badge variant="destructive" className="ml-auto">Error</Badge>
                  </SidebarMenuButton>
                  <div className="text-xs text-muted-foreground px-2">
                    {item.error}
                  </div>
                  {item.onRetry && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={item.onRetry}
                      className="ml-2"
                    >
                      <RefreshCw className="h-3 w-3 mr-1" />
                      Retry
                    </Button>
                  )}
                </div>
              </SidebarMenuItem>
            )
          }

          // Handle empty categories
          if (item.title === "Categories" && (!item.items || item.items.length === 0) && !item.isLoading && !item.error) {
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <Badge variant="outline" className="ml-auto">0</Badge>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          }

          // Normal navigation items
          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    {item.badge && (
                      <Badge variant="secondary" className="ml-auto text-xs">
                        {item.badge}
                      </Badge>
                    )}
                    {item.items && item.items.length > 0 && (
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    )}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                {item.items && item.items.length > 0 && (
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                              {subItem.badge && (
                                <Badge variant="outline" className="ml-auto text-xs">
                                  {subItem.badge}
                                </Badge>
                              )}
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                )}
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
