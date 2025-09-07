import React from 'react';
import { cn } from '@/lib/utils';
import { Anta, Syncopate, Tektur } from 'next/font/google';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { Button } from '../ui/button';
import { ArrowRightIcon, ArrowUpRight } from 'lucide-react';

const tektur = Tektur({
  weight: ["700","400"],
  variable: "--font-tektur",
  subsets: ["latin"],
});

const syncopate = Syncopate({
  weight: ["400","700"],
  variable: "--font-syncopate",
  subsets: ["latin"],
});

interface HeroProps {
  title: string;
  description: string;
  className?: string;
}

export function Hero({
  title,
  description,
  className,
}: HeroProps) {
  return (
    <section className={cn("relative w-full h-screen -mt-20 overflow-hidden", className)}>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
      {/* eslint-disable-next-line @typescript-eslint/no-require-imports */}
      <video src={require("../../assets/0000-0231.mp4")} 
        className='object-cover h-full w-full ' 
        controls={false}
        autoPlay
        loop  
        muted
        playsInline
      />
        <div className="" />
      </div>

      {/* Content */}
      <div className="container pb-30 relative z-10 flex flex-row justify-between items-end h-full w-full max-w-full px-[150px] mx-auto text-left text-white">
        <div className="w-full max-w-4xl">
          <h1 className={`${syncopate.className} mb-8`}>
            <TextGenerateEffect words={title} />
          </h1>
          <p className={`${tektur.className} text-md px-6 w-1/2 sm:text-lg tracking-widest text-white/90 mb-6`}>
            {description}
          </p>
        </div>
        <div className='flex flex-col gap-10 items-center'>

          <h1 className={`${tektur.className} mb-8 text-lg tracking-widest w-1/2`}>
            With every project we infuse magic every step of the way
          </h1>

          <div className="flex flex-row gap-10 items-center">
            <div className="flex flex-row gap-2 items-center">
              <Button variant="default" className='bg-white text-black font-semibold rounded-full'>Book a call</Button>
              <Button variant="default" className='bg-white text-black rounded-full pt-2 flex items-center justify-center w-9 h-9'><ArrowUpRight className="w-6 h-6" /></Button>
            </div>
            <Button variant="outline" className='bg-white font-semibold text-white rounded-full'>Portfolio</Button>
          </div>

        </div>
      </div>
    </section>
  );
}