"use client";

import { useTheme } from '@/contexts/Themecontext';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';


export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme, isDark } = useTheme();
  
  return (
    <Button
      onClick={toggleTheme}
      className={cn(
        "relative h-9 w-9 rounded-full flex items-center justify-center",
        "bg-gray-100/50 dark:bg-gray-900/20 backdrop-blur-sm hover:bg-gray-200 dark:hover:bg-gray-800",
        "focus:outline-none focus:ring-0 focus:ring-offset-0",
        "focus:ring-primary/50 dark:focus:ring-primary/50",
        "focus:ring-offset-white dark:focus:ring-offset-gray-900",
        "transition-all duration-200",
        className
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon color='cyan' fill='cyan' className="h-4 w-4" />
          ) : (
            <Sun color='orange' fill='orange' className="h-4 w-4" />
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}