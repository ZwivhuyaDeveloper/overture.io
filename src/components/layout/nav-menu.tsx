/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import overtureLogo from "@/assets/OVERTURE LOGO.png";
import Link from 'next/link';
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Tektur } from "next/font/google";
import { Menu as MenuIcon, X } from "lucide-react";
import { Button } from "../ui/button";

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
});


export function NavMenu({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className={cn("fixed top-3 sm:top-4 md:top-6 lg:top-10 inset-x-0 w-full mx-auto z-50 flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-1", className)}
    >
      {/* Mobile Menu Button and logo */}
      <div className="md:hidden flex flex-row items-center justify-between w-full max-w-md sm:max-w-lg">
        <Link href="/" className="flex items-center flex-row gap-2 sm:gap-3">
              <img
                src={overtureLogo.src}
                alt="Overture Logo"
                width={50}
                height={50}
                className="object-cover w-5 h-5 sm:w-6 sm:h-6"
              />
              <div className="flex flex-col items-start">
              <span className={`${tektur.className} text-white text-left dark:text-white font-semibold text-sm sm:text-base tracking-widest`}>Overture</span>
              </div>
          </Link>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden z-50 p-1.5 sm:p-2 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-black/30"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          ) : (
            <MenuIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          )}
        </Button>
      </div>

      
      {/* Desktop & Tablet Navigation */}
      <div className="hidden md:block">
        <Menu setActive={setActive}>
        <div className="flex items-center h-[36px] md:h-[38px] lg:h-[40px] gap-3 md:gap-6 lg:gap-12 xl:gap-28 justify-between w-full max-w-6xl mx-auto">
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-2 md:space-y-3 lg:space-y-4 text-xs md:text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-2 md:space-y-3 lg:space-y-4 text-xs md:text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-xs md:text-sm grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-10 p-3 md:p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <div className="w-full h-full relative left-1 md:left-2 lg:left-5 flex flex-row gap-2 md:gap-3 lg:gap-5 items-center container justify-start">
            <Link href="/" className="flex items-center flex-row gap-2 md:gap-3 lg:gap-4 w-full justify-start">
                  <img
                    src={overtureLogo.src}
                    alt="Overture Logo"
                    width={50}
                    height={50}
                    className="object-cover w-5 h-5 md:w-6 md:h-6"
                  />
                  <div className="flex flex-col items-start w-full">
                  <span className={`${tektur.className} text-white text-left dark:text-white font-semibold text-xs md:text-sm lg:text-md tracking-widest`}>Overture</span>
                  </div>
              </Link>
          </div>
          <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-2 md:space-y-3 lg:space-y-4 text-xs md:text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Insights">
          <div className="flex flex-col space-y-2 md:space-y-3 lg:space-y-4 text-xs md:text-sm">
            <HoveredLink href="/blog">Newsletter</HoveredLink>
            <HoveredLink href="/reports">Reports</HoveredLink>
            <HoveredLink href="/resources">Resources</HoveredLink>
            <HoveredLink href="/webinars">Webinars</HoveredLink>
          </div>
        </MenuItem>
          <div className="flex gap-1.5 md:gap-2 lg:gap-3 w-fit items-center">
            <div className="bg-white/30 dark:bg-black/30 p-0.5 md:p-1 px-1.5 md:px-2 lg:px-4 rounded-full">
              <MenuItem setActive={setActive} active={active} item="Contact">
              <div className="flex flex-col space-y-2 md:space-y-3 lg:space-y-4 text-xs md:text-sm">
                <HoveredLink href="/contact">Send an Email</HoveredLink>
                <HoveredLink href="/contact">Book a call</HoveredLink>
                <HoveredLink href="/contact">Chat</HoveredLink>
              </div>
            </MenuItem>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </Menu>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-40 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full pt-14 sm:pt-16 px-4 sm:px-6 pb-6 overflow-y-auto max-w-md sm:max-w-lg mx-auto w-full">
          {/* Logo */}
          <div className="flex items-center justify-center mb-5 sm:mb-6">
            <Link href="/" className="flex items-center flex-row gap-3 sm:gap-4" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src={overtureLogo.src}
                alt="Overture Logo"
                width={50}
                height={50}
                className="object-cover w-7 h-7 sm:w-8 sm:h-8"
              />
              <div className="flex flex-col items-start">
                <span className={`${tektur.className} text-white text-left font-semibold text-base sm:text-lg tracking-widest`}>Overture</span>
              </div>
            </Link>
          </div>
          
          {/* Mobile Menu Items */}
          <div className="space-y-3 sm:space-y-4">
            {/* About */}
            <div className="space-y-2 sm:space-y-3">
              <button 
                className="text-white text-base sm:text-lg font-medium w-full text-left"
                onClick={() => setActive(active === 'About' ? null : 'About')}
              >
                About
              </button>
              {active === 'About' && (
                <div className="ml-3 sm:ml-4 space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                  <Link href="/hobby" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Hobby</Link>
                  <Link href="/individual" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Individual</Link>
                  <Link href="/team" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Team</Link>
                  <Link href="/enterprise" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Enterprise</Link>
                </div>
              )}
            </div>
            
            {/* Services */}
            <div className="space-y-2 sm:space-y-3">
              <button 
                className="text-white text-base sm:text-lg font-medium w-full text-left"
                onClick={() => setActive(active === 'Services' ? null : 'Services')}
              >
                Services
              </button>
              {active === 'Services' && (
                <div className="ml-3 sm:ml-4 space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                  <Link href="/web-dev" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Web Development</Link>
                  <Link href="/interface-design" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Interface Design</Link>
                  <Link href="/seo" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Search Engine Optimization</Link>
                  <Link href="/branding" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Branding</Link>
                </div>
              )}
            </div>
            
            {/* Projects */}
            <div className="space-y-2 sm:space-y-3">
              <button 
                className="text-white text-base sm:text-lg font-medium w-full text-left"
                onClick={() => setActive(active === 'Projects' ? null : 'Projects')}
              >
                Projects
              </button>
              {active === 'Projects' && (
                <div className="ml-3 sm:ml-4 space-y-3 sm:space-y-4">
                  <Link href="https://algochurn.com" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="font-medium">Algochurn</div>
                    <div className="text-sm text-gray-400">Prepare for tech interviews like never before.</div>
                  </Link>
                  <Link href="https://tailwindmasterkit.com" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="font-medium">Tailwind Master Kit</div>
                    <div className="text-sm text-gray-400">Production ready Tailwind css components for your next project</div>
                  </Link>
                  <Link href="https://gomoonbeam.com" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="font-medium">Moonbeam</div>
                    <div className="text-sm text-gray-400">Never write from scratch again. Go from idea to blog in minutes.</div>
                  </Link>
                  <Link href="https://userogue.com" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="font-medium">Rogue</div>
                    <div className="text-sm text-gray-400">Respond to government RFPs, RFIs and RFQs 10x faster using AI</div>
                  </Link>
                </div>
              )}
            </div>
            
            {/* Pricing */}
            <div className="space-y-2 sm:space-y-3">
              <button 
                className="text-white text-base sm:text-lg font-medium w-full text-left"
                onClick={() => setActive(active === 'Pricing' ? null : 'Pricing')}
              >
                Pricing
              </button>
              {active === 'Pricing' && (
                <div className="ml-3 sm:ml-4 space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                  <Link href="/hobby" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Hobby</Link>
                  <Link href="/individual" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Individual</Link>
                  <Link href="/team" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Team</Link>
                  <Link href="/enterprise" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Enterprise</Link>
                </div>
              )}
            </div>
            
            {/* Insights */}
            <div className="space-y-2 sm:space-y-3">
              <button 
                className="text-white text-base sm:text-lg font-medium w-full text-left"
                onClick={() => setActive(active === 'Insights' ? null : 'Insights')}
              >
                Insights
              </button>
              {active === 'Insights' && (
                <div className="ml-3 sm:ml-4 space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                  <Link href="/blog" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Newsletter</Link>
                  <Link href="/reports" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Reports</Link>
                  <Link href="/resources" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Resources</Link>
                  <Link href="/webinars" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Webinars</Link>
                </div>
              )}
            </div>
            
            {/* Contact */}
            <div className="space-y-2 sm:space-y-3">
              <button 
                className="text-white text-base sm:text-lg font-medium w-full text-left"
                onClick={() => setActive(active === 'Contact' ? null : 'Contact')}
              >
                Contact
              </button>
              {active === 'Contact' && (
                <div className="ml-3 sm:ml-4 space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                  <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Send an Email</Link>
                  <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Book a call</Link>
                  <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Chat</Link>
                </div>
              )}
            </div>
          </div>
          
          {/* Theme Toggle */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}