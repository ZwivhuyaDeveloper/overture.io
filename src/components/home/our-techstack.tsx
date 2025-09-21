"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Afacad, Tektur } from "next/font/google";
import { Syncopate } from "next/font/google";
import AnimatedContent from "../AnimatedContent"

const afacad = Afacad({
  weight: ["400","700","600","500"],
  variable: "--font-afacad",
  subsets: ["latin"],
})

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

export function TechStack() {
  return (
    <div className="h-[540px] rounded-md mb-50 w-full flex gap-4 flex-col antialiased bg-white dark:bg-zinc-900 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">

      <div className="w-fit h-fit p-2 bg-zinc-200 dark:bg-zinc-800 rounded-full px-4">
        <h2 className={`${tektur.className} 
            tracking-widest relative text-left z-10 text-md sm:text-sm text-black dark:text-white`}>
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
        <div className="flex flex-col justify-center mt-5 mb-10 items-center gap-4">
        <h1 className={`${syncopate.className} 
            tracking-widest relative justify-center items-center flex text-center w-xl z-10 text-xl sm:text-3xl font-bold 
            text-black dark:text-white
            `}>
            Our Technology Stack
        </h1>
        <h3 className={`${afacad.className} text-2xl justify-center font-regular flex text-center text-gray-500 max-w-3xl mx-auto`}>
            We leverage cutting-edge technologies and industry-leading tools to build scalable, secure, and high-performance digital solutions that drive innovation and deliver exceptional user experiences.
        </h3>
        </div>
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
