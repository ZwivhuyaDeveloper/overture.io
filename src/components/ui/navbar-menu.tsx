/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Afacad, Tektur } from "next/font/google";

const tektur = Tektur({
  weight: ["700"],
  variable: "--font-tektur",
  subsets: ["latin"],
});

const afacad = Afacad({
  weight: ["700","400","500","600"],
  variable: "--font-afacad",
  subsets: ["latin"],
});

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const [isTouchActive, setIsTouchActive] = useState(false);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsTouchActive(!isTouchActive);
    setActive(isTouchActive ? null : item);
  };
  
  const handleMouseEnter = () => {
    if (window.innerWidth > 768) { // Only on desktop
      setActive(item);
    }
  };
  
  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleTouchStart}
      className="relative "
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer font-normal text-lg hover:opacity-[0.9] text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const handleMouseLeave = () => {
    if (window.innerWidth > 768) { // Only on desktop
      setActive(null);
    }
  };
  
  return (
    <nav
      onMouseLeave={handleMouseLeave}
      className={`${cn(afacad.className)} relative rounded-full border border-transparent dark:bg-black/10 backdrop-blur-lg
         dark:border-white/[0.2] bg-black/20 shadow-input flex justify-center space-x-2 md:space-x-4 px-4 md:px-8 py-2 md:py-4`}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 p-2 rounded-lg hover:bg-white/5 transition-colors">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl w-full sm:w-auto h-20 sm:h-16 object-cover"
      />
      <div className="flex-1 min-w-0">
        <h4 className="text-lg sm:text-xl font-bold mb-1 text-white line-clamp-1">
          {title}
        </h4>
        <p className="text-neutral-300 text-sm max-w-full dark:text-neutral-300 line-clamp-2">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-neutral-300 dark:text-neutral-200 hover:text-white transition-colors py-1 px-2 rounded hover:bg-white/5 block"
    >
      {children}
    </a>
  );
};