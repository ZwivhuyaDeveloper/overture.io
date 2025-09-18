"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Tektur } from "next/font/google";
import { Syncopate } from "next/font/google";
import AnimatedContent from "../AnimatedContent";

const syncopate = Syncopate({
  weight: ["400","700"],
  variable: "--font-syncopate",
  subsets: ["latin"],
});
const tektur = Tektur({
  weight: ["700","400"],
  variable: "--font-tektur",
  subsets: ["latin"],
});

export function Partners() {
  return (
    <div className="h-[540px] rounded-md flex gap-8 flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">

      <div className="w-fit h-fit p-2 bg-zinc-200 rounded-full px-4">
        <h2 className={`${tektur.className} 
            tracking-widest relative text-left z-10 text-md sm:text-sm text-black`}>
            Our Partners
        </h2>
      </div>
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={true}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={0.5}
        threshold={0.2}
        delay={0}
        onComplete={() => {}}
      >
        <h1 className={`${syncopate.className} 
            tracking-widest relative text-left z-10 text-md sm:text-xl font-bold text-black`}>
            Our Partners Across the Globe
        </h1>
      </AnimatedContent>
        <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={0.5}
        threshold={0.1}
        delay={0}
        onComplete={() => {}}
      >
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
    </AnimatedContent>
    </div>
  );
}

const testimonials = [
  {
    image: "/nodejs-icon.svg",
    name: "Overture",
    title: "Creative Agency",
  },
  {
    image: "/react-2.svg",
    name: "Overture",
    title: "Creative Agency",
  },
  {
    image: "/tailwindcss.svg",
    name: "Overture",
    title: "Creative Agency",
  },
  {
    image: "/next-js.svg",
    name: "Overture",
    title: "Creative Agency",
  },
  {
    image: "/typescript.svg",
    name: "Overture",
    title: "Creative Agency",
  },
  {
    image: "/aws-2.svg",
    name: "Overture",
    title: "Creative Agency",
  },
  {
    image: "/blender-2.svg",
    name: "Overture",
    title: "Creative Agency",
  },
  {
    image: "/figma-icon.svg",
    name: "Overture",
    title: "Creative Agency",
  },
  {
    image: "/angular-icon-1.svg",
    name: "Overture",
    title: "Creative Agency",
  },
];
