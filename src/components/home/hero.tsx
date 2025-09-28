import React from 'react';
import { cn } from '@/lib/utils';
import { Afacad, Anta, Syncopate, Tektur } from 'next/font/google';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { Button } from '../ui/button';
import { ArrowRightIcon, ArrowUpRight } from 'lucide-react';
import { BackgroundBeams } from '../ui/background-beams';
import FadeContent from '../FadeContent';
import Video from 'next-video';
import backgroundVideo from '/videos/0000-0231.mp4';

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

const afacad = Afacad({
  weight: ["400","500","600","700",],
  variable: "--font-afacad",
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
    <section className={cn("relative w-full min-h-screen -mt-20 overflow-hidden", className)}>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
      {/* eslint-disable-next-line @typescript-eslint/no-require-imports */}
        <video src={require("../../assets/0000-0231.mp4")} 
          className='object-cover h-full w-full overlay ' 
          controls={false}
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
        />
      </div>

      {/* Content */}
      <div className="container lg:gap-96 lg:backdrop-blur-none backdrop-blur-sm lg:pb-20 pb-8 lg:mt-1 mt-24 relative z-10 flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-end min-h-screen w-full lg:w-[85%] mx-auto px-4 lg:px-0">
        
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
          <h1 className={`${syncopate.className} mb-6 lg:mb-8 text-2xl sm:text-3xl lg:text-5xl`}>
            <TextGenerateEffect words={title} />
          </h1>
          <FadeContent blur={true} duration={1000} easing="ease-in-out" delay={500} initialOpacity={0.5} >
            <p className={`${afacad.className} text-base sm:text-lg md:text-xl px-0 lg:px-0 w-full lg:w-5/6 tracking-wider text-white mb-6 lg:mb-8`}>
              {description}
            </p>
          </FadeContent>
        </div>

        <div className='flex flex-col gap-6 lg:gap-10 items-center justify-center lg:items-end w-full lg:w-2/5'>

          <FadeContent blur={true} duration={1000} easing="ease-in-out" delay={700} initialOpacity={0.5}
          className="w-full" >
            <h1 className={`${afacad.className} mb-6 lg:mb-8 text-lg sm:text-xl text-white text-center lg:text-left tracking-wider w-full lg:w-xs`}>
              With every project we infuse magic every step of the way
            </h1>
          </FadeContent>

          <FadeContent blur={true} duration={1000} 
            easing="ease-in-out" delay={900} initialOpacity={0.5} 
            className="flex flex-col sm:flex-row gap-4 lg:gap-6 w-full items-center justify-center lg:justify-start">

            <div className="flex flex-row gap-2 items-center">
              <Button variant="default" className='bg-white text-black font-semibold rounded-full text-sm md:text-base px-4 md:px-6 py-2 lg:py-2.5'>Book a call</Button>
              <Button variant="default" className='bg-white text-black rounded-full flex items-center justify-center w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10'><ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" /></Button>
            </div>
            <Button variant="outline" className='bg-white/10 dark:bg-white/10 font-semibold text-white rounded-full text-sm md:text-base px-4 md:px-6 py-2 lg:py-2.5 border-white/20 hover:bg-white/20'>Portfolio</Button>

          </FadeContent>
        </div>

      </div>
    </section>
  );
}