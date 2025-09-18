"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { 
  Search, 
  Bell, 
  Settings, 
  TrendingUp, 
  X, 
  Eye, 
  Globe,
  User,
  ArrowRight,
  Play,
  Pause
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface BreakingNewsItem {
  id: string
  title: string
  category: string
  timestamp: string
  urgent: boolean
  priority?: 'low' | 'medium' | 'high'
  views?: number
  author?: string
  excerpt?: string
  imageUrl?: string
}

const breakingNewsData: BreakingNewsItem[] = [
  {
    id: "1",
    title: "Major Technology Breakthrough Announced at Global Summit",
    category: "Technology",
    timestamp: "2 minutes ago",
    urgent: true,
    priority: "high",
    views: 15420,
    author: "Tech Correspondent",
    excerpt: "Scientists reveal revolutionary AI advancement that could transform multiple industries.",
    imageUrl: "/api/placeholder/400/200"
  },
  {
    id: "2",
    title: "New Design Trends Shaping 2024 Digital Landscape",
    category: "Design",
    timestamp: "15 minutes ago",
    urgent: false,
    priority: "medium",
    views: 8930,
    author: "Design Editor",
    excerpt: "Leading designers share insights on the emerging visual trends for the coming year.",
    imageUrl: "/api/placeholder/400/200"
  },
  {
    id: "3",
    title: "Market Analysis: Q4 Performance Exceeds Expectations",
    category: "Business",
    timestamp: "1 hour ago",
    urgent: false,
    priority: "medium",
    views: 12450,
    author: "Financial Analyst",
    excerpt: "Comprehensive analysis shows strong growth across all major market sectors.",
    imageUrl: "/api/placeholder/400/200"
  },
  {
    id: "4",
    title: "Climate Summit Reaches Historic Agreement",
    category: "Environment",
    timestamp: "2 hours ago",
    urgent: true,
    priority: "high",
    views: 28900,
    author: "Environmental Reporter",
    excerpt: "World leaders commit to ambitious new targets for carbon reduction.",
    imageUrl: "/api/placeholder/400/200"
  },
  {
    id: "5",
    title: "Breakthrough in Renewable Energy Storage",
    category: "Science",
    timestamp: "3 hours ago",
    urgent: false,
    priority: "medium",
    views: 6780,
    author: "Science Correspondent",
    excerpt: "New battery technology promises to solve renewable energy storage challenges.",
    imageUrl: "/api/placeholder/400/200"
  },
]

export function BreakingNewsHeader() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [isPlaying, setIsPlaying] = useState(true)
  const [speed, setSpeed] = useState(5)
  const [showSearch, setShowSearch] = useState(false)
  const [notifications, setNotifications] = useState(3)
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentNewsIndex((prev) => (prev + 1) % breakingNewsData.length)
      }, speed * 1000)
    }

    return () => clearInterval(interval)
  }, [isPlaying, speed])

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [showSearch])

  const currentNews = breakingNewsData[currentNewsIndex]

  const handleNext = () => {
    setCurrentNewsIndex((prev) => (prev + 1) % breakingNewsData.length)
  }

  const handlePrevious = () => {
    setCurrentNewsIndex((prev) => (prev - 1 + breakingNewsData.length) % breakingNewsData.length)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }


  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log('Searching for:', searchQuery)
  }

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case 'high': return 'bg-red-600 hover:bg-red-700'
      case 'medium': return 'bg-orange-600 hover:bg-orange-700'
      case 'low': return 'bg-blue-600 hover:bg-blue-700'
      default: return 'bg-gray-600 hover:bg-gray-700'
    }
  }

  return (
    <div className="w-full bg-background border-b">
      {/* Breaking News Ticker */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 border-b border-red-200 dark:border-red-800"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between py-3">
                {/* Left side - Breaking label and controls */}
                <div className="flex items-center space-x-3 flex-1">
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <TrendingUp className="h-4 w-4 text-red-600 dark:text-red-400 animate-pulse" />
                      <div className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full animate-ping"></div>
                    </div>
                    <span className="text-sm font-bold text-red-600 dark:text-red-400 tracking-wider">
                      BREAKING NEWS
                    </span>
                  </div>
                  <div className="h-4 w-px bg-red-300 dark:bg-red-700" />
                  
                  {/* News content */}
                  <motion.div
                    key={currentNews.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center space-x-3 flex-1 min-w-0"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge className={`${getPriorityColor(currentNews.priority)} text-white text-xs`}>
                          {currentNews.priority?.toUpperCase() || 'NEWS'}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {currentNews.category}
                        </Badge>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {currentNews.timestamp}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                        {currentNews.title}
                      </p>
                      {currentNews.excerpt && (
                        <p className="text-xs text-gray-600 dark:text-gray-300 truncate mt-1">
                          {currentNews.excerpt}
                        </p>
                      )}
                    </div>
                    
                    {/* Engagement metrics */}
                    <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{currentNews.views?.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{currentNews.author}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Right side - Controls */}
                <div className="flex items-center space-x-2">
                  {/* Navigation controls */}
                  <div className="flex items-center space-x-1 bg-white dark:bg-gray-800 rounded-lg p-1 border">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={handlePrevious}
                      className="h-6 w-6 p-0"
                    >
                      <ArrowRight className="h-3 w-3 rotate-180" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={togglePlay}
                      className="h-6 w-6 p-0"
                    >
                      {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={handleNext}
                      className="h-6 w-6 p-0"
                    >
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  {/* Speed control */}
                  <Select value={speed.toString()} onValueChange={(value) => setSpeed(parseInt(value))}>
                    <SelectTrigger className="w-16 h-6 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3s</SelectItem>
                      <SelectItem value="5">5s</SelectItem>
                      <SelectItem value="10">10s</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  {/* Close button */}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setIsVisible(false)}
                    className="h-6 w-6 p-0 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main Header Bar */}
      <div className="bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Logo and navigation */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <span className="font-bold text-lg text-gray-900 dark:text-white">
                  Overture News
                </span>
              </div>
              
              <div className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Latest
                </a>
                <a href="#" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Trending
                </a>
                <a href="#" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Categories
                </a>
                <a href="#" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Video
                </a>
              </div>
            </div>
            
            {/* Right side - Search and actions */}
            <div className="flex items-center space-x-3">
              {/* Search bar */}
              <AnimatePresence>
                {showSearch ? (
                  <motion.form
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    onSubmit={handleSearch}
                    className="flex items-center"
                  >
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search news, topics, authors..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 w-64 h-9 text-sm"
                      />
                    </div>
                    <Button 
                      type="button"
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setShowSearch(false)}
                      className="ml-2 h-6 w-6 p-0"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </motion.form>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setShowSearch(true)}
                    className="h-8 w-8 p-0"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                )}
              </AnimatePresence>
              
              {/* Notifications */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 relative">
                    <Bell className="h-4 w-4" />
                    {notifications > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-red-600 text-white">
                        {notifications}
                      </Badge>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-4">
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Notifications</h4>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">New article published</p>
                          <p className="text-xs text-gray-500">Technology breakthrough announced</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <div className="h-2 w-2 bg-green-500 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Weekly digest ready</p>
                          <p className="text-xs text-gray-500">Your personalized news summary</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              
              {/* Settings */}
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Settings className="h-4 w-4" />
              </Button>
              
              {/* User menu */}
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
