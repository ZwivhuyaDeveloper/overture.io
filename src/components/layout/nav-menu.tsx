/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import overtureLogo from "@/assets/OVERTURE LOGO.png";
import Link from 'next/link';
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Tektur } from "next/font/google";
import { 
  Menu as MenuIcon, 
  X, 
  Users, 
  Briefcase, 
  FolderOpen, 
  DollarSign, 
  Lightbulb, 
  Mail,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

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
            <Image
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
      <div className={`md:hidden fixed inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30 backdrop-blur-xl z-40 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full pt-14 sm:pt-16 px-4 sm:px-6 pb-6 overflow-y-auto max-w-md sm:max-w-lg mx-auto w-full bg-black/40 backdrop-blur-sm rounded-l-3xl border-l border-white/10">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8 sm:mb-10 p-4 bg-white/5 rounded-2xl border border-white/10">
            <Link href="/" className="flex items-center flex-row gap-3 sm:gap-4" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src={overtureLogo.src}
                alt="Overture Logo"
                width={50}
                height={50}
                className="object-cover w-8 h-8 sm:w-10 sm:h-10"
              />
              <div className="flex flex-col items-start">
                <span className={`${tektur.className} text-white text-left font-bold text-lg sm:text-xl tracking-widest`}>Overture</span>
                <span className="text-gray-400 text-xs tracking-wide">Digital Agency</span>
              </div>
            </Link>
          </div>
          
          {/* Mobile Menu Items */}
          <div className="space-y-2 sm:space-y-3">
            {/* About */}
            <div className="space-y-2 sm:space-y-3">
              <Button 
                variant="ghost"
                className="text-white hover:bg-white/10 text-base sm:text-lg font-medium w-full justify-start p-4 h-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
                onClick={() => setActive(active === 'About' ? null : 'About')}
              >
                <span className="flex flex-row items-center justify-between w-full">
                  <span className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span>About</span>
                  </span>
                  {active === 'About' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </span>
              </Button>
              {active === 'About' && (
                <div className="ml-2 space-y-2 p-3 bg-white/5 rounded-lg border border-white/10">
                  <Link href="/hobby" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Our Story</span>
                  </Link>
                  <Link href="/individual" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Team</span>
                  </Link>
                  <Link href="/team" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Culture</span>
                  </Link>
                  <Link href="/enterprise" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Careers</span>
                  </Link>
                </div>
              )}
            </div>
            
            {/* Services */}
            <div className="space-y-2 sm:space-y-3">
              <Button 
                variant="ghost"
                className="text-white hover:bg-white/10 text-base sm:text-lg font-medium w-full justify-start p-4 h-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
                onClick={() => setActive(active === 'Services' ? null : 'Services')}
              >
                <span className="flex flex-row items-center justify-between w-full">
                  <span className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-green-400" />
                    <span>Services</span>
                  </span>
                  {active === 'Services' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </span>
              </Button>
              {active === 'Services' && (
                <div className="ml-2 space-y-2 p-3 bg-white/5 rounded-lg border border-white/10">
                  <Link href="/web-dev" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Web Development</span>
                  </Link>
                  <Link href="/mobile-dev" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Mobile Development</span>
                  </Link>
                  <Link href="/ui-ux" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">UI/UX Design</span>
                  </Link>
                  <Link href="/consulting" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Consulting</span>
                  </Link>
                </div>
              )}
            </div>
            
            {/* Projects */}
            <div className="space-y-2 sm:space-y-3">
              <Button 
                variant="ghost"
                className="text-white hover:bg-white/10 text-base sm:text-lg font-medium w-full justify-start p-4 h-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
                onClick={() => setActive(active === 'Projects' ? null : 'Projects')}
              >
                <span className="flex flex-row items-center justify-between w-full">
                  <span className="flex items-center gap-3">
                    <FolderOpen className="w-5 h-5 text-purple-400" />
                    <span>Projects</span>
                  </span>
                  {active === 'Projects' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </span>
              </Button>
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
              <Button 
                variant="ghost"
                className="text-white hover:bg-white/10 text-base sm:text-lg font-medium w-full justify-start p-4 h-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
                onClick={() => setActive(active === 'Pricing' ? null : 'Pricing')}
              >
                <span className="flex flex-row items-center justify-between w-full">
                  <span className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-yellow-400" />
                    <span>Pricing</span>
                  </span>
                  {active === 'Pricing' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </span>
              </Button>
              {active === 'Pricing' && (
                <div className="ml-2 space-y-2 p-3 bg-white/5 rounded-lg border border-white/10">
                  <Link href="/hobby" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Starter</span>
                  </Link>
                  <Link href="/individual" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Professional</span>
                  </Link>
                  <Link href="/team" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Business</span>
                  </Link>
                  <Link href="/enterprise" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Enterprise</span>
                  </Link>
                </div>
              )}
            </div>
            
            {/* Insights */}
            <div className="space-y-2 sm:space-y-3">
              <Button 
                variant="ghost"
                className="text-white hover:bg-white/10 text-base sm:text-lg font-medium w-full justify-start p-4 h-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
                onClick={() => setActive(active === 'Insights' ? null : 'Insights')}
              >
                <span className="flex flex-row items-center justify-between w-full">
                  <span className="flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-orange-400" />
                    <span>Insights</span>
                  </span>
                  {active === 'Insights' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </span>
              </Button>
              {active === 'Insights' && (
                <div className="ml-2 space-y-2 p-3 bg-white/5 rounded-lg border border-white/10">
                  <Link href="/blog" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Blog</span>
                  </Link>
                  <Link href="/case-studies" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Case Studies</span>
                  </Link>
                  <Link href="/resources" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Resources</span>
                  </Link>
                  <Link href="/events" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Newsletter</span>
                  </Link>
                </div>
              )}
            </div>
            
            {/* Contact */}
            <div className="space-y-2 sm:space-y-3">
              <Button 
                variant="ghost"
                className="text-white hover:bg-white/10 text-base sm:text-lg font-medium w-full justify-start p-4 h-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
                onClick={() => setActive(active === 'Contact' ? null : 'Contact')}
              >
                <span className="flex flex-row items-center justify-between w-full">
                  <span className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-red-400" />
                    <span>Contact</span>
                  </span>
                  {active === 'Contact' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </span>
              </Button>
              {active === 'Contact' && (
                <div className="ml-2 space-y-2 p-3 bg-white/5 rounded-lg border border-white/10">
                  <Link href="/contact" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Send an Email</span>
                  </Link>
                  <Link href="/schedule" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Schedule a Call</span>
                  </Link>
                  <Link href="/support" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Support</span>
                  </Link>
                  <Link href="/locations" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Office Locations</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
          
          {/* Theme Toggle */}
          <div className="mt-8 w-full sm:mt-10 p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-white font-medium">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}