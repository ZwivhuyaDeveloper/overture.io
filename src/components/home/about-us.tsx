"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { Syncopate, Tektur, Archivo,Afacad } from "next/font/google";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import render from "@/assets/overture_render1.png";
import { DirectionAwareHover } from '../ui/direction-aware-hover';
import { Button } from "../ui/button";
import { AnimatedTooltipPreview } from "../team";
import AnimatedContent from "../AnimatedContent";

const afacad = Afacad({
  weight: ["400","500","600","700"],
  variable: "--font-afacad",
  subsets: ["latin"],
})

const archivo = Archivo({
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-archivo",
  subsets: ["latin"],
}); 

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

const imageUrl = "/overture_render1.png";

export function AboutUs({ className }: { className?: string }) {
  return (
    <div className={cn("min-h-[1080px] w-full rounded-md dark:bg-zinc-900 bg-white relative flex flex-col justify-center antialiased", className)}>
      <div className="max-w-7xl items-center h-full my-8 md:my-45 gap-6 z-30 flex flex-col w-full mx-auto px-4 md:px-0">
        <div className="w-fit h-fit p-2 bg-zinc-200 dark:bg-zinc-800 rounded-full px-4">
            <h2 className={`${tektur.className} 
                tracking-widest relative text-left z-10 text-xs sm:text-sm md:text-lg lg:text-xl text-black dark:text-white`}>
                About Us
            </h2>
        </div>
        <div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-0">
            <Card className="w-full h-auto md:h-[60vh] z-10 shadow-none border-none bg-transparent">
                <CardContent>
                    <AnimatedContent
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        duration={0.8}
                        ease="power3.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={0}
                        threshold={0.1}
                        delay={0}
                        onComplete={() => {}}
                    >
                        <div className="relative items-center flex flex-row">
                            <h1 className={`${syncopate.className} 
                            tracking-widest relative text-left font-bold bg-clip-text bg-gradient-to-r from-black dark:from-white via-zinc-500 dark:via-zinc-300 to-zinc-400 dark:to-zinc-400  text-transparent   w-full max-w-full text-base sm:text-lg md:text-xl lg:text-2xl my-2 z-10`}>
                                Design studio focused on 
                            </h1>
                        </div>
                    </AnimatedContent>

                   <div className="relative items-center flex flex-row">
                        <h1 className={`${syncopate.className} 
                        tracking-widest flex flex-row items-center gap-2 sm:gap-3 md:gap-4 relative text-left font-bold text-black w-full max-w-full text-base sm:text-lg md:text-xl lg:text-2xl my-2 z-10`}>
                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            duration={0.8}
                            ease="power3.out"
                            initialOpacity={0.2}
                            animateOpacity
                            scale={0}
                            threshold={0.1}
                            delay={0}
                            onComplete={() => {}}
                        >
                        <p className="bg-clip-text bg-gradient-to-r from-black dark:from-white via-zinc-600 dark:via-zinc-300 to-zinc-500 dark:to-zinc-400  text-transparent">crafting</p> 
                        </AnimatedContent>
                        
                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={true}
                            duration={0.8}
                            ease="power3.out"
                            initialOpacity={0.2}
                            animateOpacity={true}
                            scale={0}
                            threshold={0.1}
                            delay={0.5}
                            onComplete={() => {}}
                        >
                            <div className="relative flex flex-col gap-0.5 sm:gap-1 shadow-lg bg-white dark:bg-zinc-800 rotate-25 w-16 h-10 sm:w-20 sm:h-12 md:w-25 md:h-15 p-0.5 sm:p-1 rounded-sm sm:rounded-md z-10">
                                <div className="w-full h-2 sm:h-2.5 md:h-3 bg-blue-500 rounded-[2px] sm:rounded-[3px]"/>
                                <div className="w-full h-1.5 sm:h-2 bg-zinc-200 dark:bg-zinc-700 rounded-[2px] sm:rounded-[3px]"/>
                                <div className="h-full w-full flex flex-row gap-0.5 sm:gap-1">
                                    <div className="w-full h-full bg-zinc-200 dark:bg-zinc-700 rounded-[3px] sm:rounded-[4px]"/>
                                    <div className="w-full h-full bg-zinc-200 dark:bg-zinc-700 rounded-[3px] sm:rounded-[4px]"/>
                                </div>
                            </div> 
                        </AnimatedContent>

                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            duration={0.8}
                            ease="power3.out"
                            initialOpacity={0.2}
                            animateOpacity={true}
                            scale={0}
                            threshold={0.1}
                            delay={0}
                            onComplete={() => {}}
                        >
                            <p className="bg-clip-text bg-gradient-to-r from-black dark:from-white via-zinc-600 dark:via-zinc-300 to-zinc-500 dark:to-zinc-400  text-transparent">websites,</p>
                        </AnimatedContent>
                        </h1> 
                    </div>

                    <div className="flex items-center items-center w-full justify-center">
                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            duration={0.8}
                            ease="power3.out"
                            initialOpacity={0.2}
                            animateOpacity
                            scale={0}
                            threshold={0.1}
                            delay={0}
                            onComplete={() => {}}
                        >
                            <h1 className={`${syncopate.className} 
                            tracking-widest relative flex flex-row gap-2 sm:gap-3 md:gap-4 w-full text-left  font-bold bg-clip-text bg-gradient-to-r from-black dark:from-white via-zinc-600 dark:via-zinc-300 to-zinc-500 dark:to-zinc-400  text-transparent max-w-full text-base sm:text-lg md:text-xl lg:text-2xl my-2 z-10`}>
                                <AnimatedContent
                                    distance={100}
                                    direction="horizontal"
                                    reverse={true}
                                    duration={0.8}
                                    ease="power3.out"
                                    initialOpacity={0.2}
                                    animateOpacity
                                    scale={0}
                                    threshold={0.1}
                                    delay={0}
                                    onComplete={() => {}}
                                >
                                    <div className="relative -left-2 sm:-left-3 md:-left-5 flex flex-col gap-0.5 sm:gap-1 shadow-lg bg-white dark:bg-zinc-800 -rotate-25 w-16 h-10 sm:w-20 sm:h-12 md:w-25 md:h-15 p-0.5 sm:p-1 rounded-sm sm:rounded-md z-10">
                                        <div className="w-full h-2 sm:h-2.5 md:h-3 bg-orange-500 rounded-[2px] sm:rounded-[3px]"/>
                                        <div className="w-full h-1.5 sm:h-2 bg-zinc-200 dark:bg-zinc-700 rounded-[2px] sm:rounded-[3px]"/>
                                        <div className="h-full w-full flex flex-row gap-0.5 sm:gap-1">
                                            <div className="w-full h-full bg-zinc-200 dark:bg-zinc-700 rounded-[3px] sm:rounded-[4px]"/>
                                            <div className="w-full h-full bg-zinc-200 dark:bg-zinc-700 rounded-[3px] sm:rounded-[4px]"/>
                                        </div>
                                    </div>
                                </AnimatedContent>
                                
                                <div className=" flex items-center w-fit justify-center">
                                    <p className="text-left w-fit">software</p> 
                                </div>

                                <div className=" gap-2">
                                    <AnimatedContent
                                        distance={100}
                                        direction="vertical"
                                        reverse={true}
                                        duration={0.8}
                                        ease="power3.out"
                                        initialOpacity={0.2}
                                        animateOpacity
                                        scale={0}
                                        threshold={0.1}
                                        delay={0}                                    
                                        onComplete={() => {}}
                                    >
                                        <div className="relative flex flex-col gap-0.5 sm:gap-1 shadow-lg bg-white dark:bg-zinc-800 w-10 h-14 sm:w-12 sm:h-16 md:w-15 md:h-20 p-0.5 sm:p-1 rounded-sm sm:rounded-md z-10">
                                            <div className="w-full h-full bg-zinc-200 dark:bg-zinc-700 rounded-[2px] sm:rounded-[3px]"/>
                                            <div className="h-full w-full flex flex-row gap-0.5 sm:gap-1">
                                                <div className="w-full h-full bg-zinc-200 dark:bg-zinc-700 rounded-[3px] sm:rounded-[4px]"/>
                                                <div className="w-full h-full bg-zinc-200 dark:bg-zinc-700 rounded-[3px] sm:rounded-[4px]"/>
                                            </div>
                                            <div className="w-full h-4 sm:h-5 bg-blue-500 rounded-[2px] sm:rounded-[3px]"/>
                                        </div>
                                    </AnimatedContent>
                                    <AnimatedContent
                                        distance={100}
                                        direction="horizontal"
                                        reverse={false}
                                        duration={0.8}
                                        ease="power3.out"
                                        initialOpacity={0}
                                        animateOpacity
                                        scale={0}
                                        threshold={0}
                                        delay={0.2}
                                        onComplete={() => {}}
                                    >
                                        <div className="absolute justify-center -top-8 -right-4 sm:-top-9 sm:-right-6 md:-top-11 md:-right-8 flex flex-col gap-0.5 sm:gap-1 shadow-lg bg-white dark:bg-zinc-800 w-10 h-14 sm:w-12 sm:h-16 md:w-15 md:h-20 p-0.5 sm:p-1 rounded-sm sm:rounded-md z-10">
                                            <div className="w-full h-2 sm:h-2.5 md:h-3 bg-zinc-200 dark:bg-zinc-700 rounded-[2px] sm:rounded-[3px]"/>
                                            <div className="h-full w-full flex flex-row gap-0.5 sm:gap-1">
                                                <div className="w-full h-full bg-zinc-200 dark:bg-zinc-700 rounded-[3px] sm:rounded-[4px]"/>
                                                <div className="w-full h-full bg-zinc-200 dark:bg-zinc-700 rounded-[3px] sm:rounded-[4px]"/>
                                            </div>
                                            <div className="w-full h-2 sm:h-2.5 md:h-3 bg-purple-500 rounded-[2px] sm:rounded-[3px]"/>
                                        </div>   
                                    </AnimatedContent>
                                </div>
                                <div className="flex items-center w-full h-full justify-center">
                                    <p className="w-full h-full flex text-center ">and apps.</p>
                                </div>
                            </h1>
                        </AnimatedContent>

                    </div>
                    <AnimatedContent 
                        distance={100}
                        direction="horizontal"
                        reverse={false}
                        duration={0.8}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={0}
                        threshold={0}
                        delay={0.2}
                        onComplete={() => {}}
                    >
                        <p className={`${afacad.className} 
                        tracking-wide relative text-left text-black dark:text-white w-full max-w-full text-sm sm:text-base md:text-lg lg:text-xl mt-8 sm:mt-10 md:mt-12 lg:mt-20 my-2 z-10`}>With a team of experienced developers and designers, we are dedicated to delivering high-quality solutions that meet your needs. 
                        We use the latest technologies and best practices to ensure that your project is completed on time and to the highest standard.
                        </p>
                    </AnimatedContent>
                    <div className="w-full h-fit items-center justify-between flex flex-col md:flex-row gap-6 md:gap-10 mt-8 md:mt-15">
                        <AnimatedTooltipPreview />
                        <Button variant="outline" className={`${afacad.className} bg-blue-500 text-white dark:bg-blue-600 dark:text-white text-base md:text-lg rounded-3xl px-6 py-2 md:px-8`}>Meet the Team!</Button>
                    </div>
                </CardContent>
            </Card>
            <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={0.8}
                threshold={0.2}
                delay={0}
                onComplete={() => {}}
            >
                <div className="relative z-30 flex justify-center">
                    <DirectionAwareHover imageUrl={imageUrl} className="w-[50vh] h-[50vh] md:w-[60vh] md:h-[60vh] z-30 flex p-0 bg-transparent border-none shadow-none">
                        <p></p>
                    </DirectionAwareHover>
                </div>
            </AnimatedContent>
        </div>
      </div>
      <div className="z-10">
        <BackgroundBeams />
      </div>
    </div>
  );
}