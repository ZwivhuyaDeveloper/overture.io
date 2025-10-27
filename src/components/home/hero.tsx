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
      <div className="container gap-8 sm:gap-12 md:gap-16 lg:gap-96 backdrop-blur-sm  lg:backdrop-blur-none pb-6 sm:pb-8 md:pb-12 lg:pb-20 mt-20 pt-100 sm:pt-80 md:pt-30 lg:pt-24 sm:mt-20 md:mt-24 lg:mt-1 relative z-10 flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-end  min-h-screen w-full lg:w-[85%] mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
        
        <div className="w-full lg:w-1/2 mb-0 sm:mb-0 md:mb-10 flex flex-col lg:mb-0 text-center lg:text-left">
          <h1 className={`${syncopate.className} mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl`}>
            <TextGenerateEffect words={title} />
          </h1>
          <FadeContent blur={true} duration={1000} easing="ease-in-out" delay={500} initialOpacity={0.5} >
            <p className={`${afacad.className} text-lg sm:text-md md:text-lg lg:text-xl px-0 lg:px-0 w-full lg:w-5/6 md:w-4/2 sm:w-4/2 tracking-wide sm:tracking-wider text-center text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8`}>
              {description}
            </p>
          </FadeContent>
        </div>

        <div className='flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-10 items-center justify-center lg:items-end w-full lg:w-2/5'>

          <FadeContent blur={true} duration={1000} easing="ease-in-out" delay={700} initialOpacity={0.5}
          className="w-full" >
            <h1 className={`${afacad.className} mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-base sm:text-lg md:text-xl text-white text-center lg:text-left tracking-wide sm:tracking-wider w-full lg:w-xs_+`}>
              With every project we infuse magic every step of the way
            </h1>
          </FadeContent>

          <FadeContent blur={true} duration={1000} 
            easing="ease-in-out" delay={900} initialOpacity={0.5} 
            className="flex flex-row sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full items-center justify-center lg:justify-start">

            <div className="flex flex-row gap-1.5 sm:gap-2 items-center">
              <Button variant="default" className='bg-white text-black font-semibold rounded-full text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 lg:py-2.5'>Book a call</Button>
              <Button variant="default" className='bg-white text-black rounded-full flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10'><ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" /></Button>
            </div>
            <Button variant="outline" className='bg-white/10 dark:bg-white/10 font-semibold text-white rounded-full text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 lg:py-2.5 border-white/20 hover:bg-white/20'>Portfolio</Button>

          </FadeContent>
        </div>

      </div>
    </section>
  );
}