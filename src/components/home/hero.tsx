import React from 'react';
import { cn } from '@/lib/utils';
import { Afacad, Anta, Syncopate, Tektur } from 'next/font/google';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { Button } from '../ui/button';
import { ArrowRightIcon, ArrowUpRight } from 'lucide-react';
import { BackgroundBeams } from '../ui/background-beams';
import FadeContent from '../FadeContent';

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
      </div>

      {/* Content */}
      <div className="container pb-30 relative z-10 flex flex-col lg:flex-row justify-between items-end h-full w-full max-w-full px-4 md:px-8 lg:px-[150px] mx-auto text-left text-white">
        <div className="w-full max-w-4xl mb-8 lg:mb-0">
          <h1 className={`${syncopate.className} mb-6 lg:mb-8 text-3xl md:text-4xl lg:text-5xl`}>
            <TextGenerateEffect words={title} />
          </h1>
          <FadeContent blur={true} duration={1000} easing="ease-in-out" delay={500} initialOpacity={0.5} >
            <h2 className={`${afacad.className} text-lg md:text-xl px-4 md:px-8 w-full md:w-1/2 lg:w-1/2 tracking-wider text-white/90 mb-6`}>
              {description}
            </h2>
          </FadeContent>
        </div>
        <div className='flex flex-col gap-6 lg:gap-10 items-center justify-center w-full lg:w-auto'>

          <FadeContent blur={true} duration={1000} easing="ease-in-out" delay={700} initialOpacity={0.5}
          className="w-full text-center lg:text-left" >
            <h1 className={`${afacad.className} mb-6 lg:mb-8 text-lg md:text-xl tracking-wider w-full`}>
              With every project we infuse magic every step of theway
            </h1>
          </FadeContent>

          <FadeContent blur={true} duration={1000} 
          easing="ease-in-out" delay={900} initialOpacity={0.5} 
          className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full items-center justify-center lg:justify-start">

            <div className="flex flex-row gap-2 items-center">
              <Button variant="default" className='bg-white text-black font-semibold rounded-full text-sm md:text-base px-4 md:px-6 py-2'>Book a call</Button>
              <Button variant="default" className='bg-white text-black rounded-full pt-2 flex items-center justify-center w-8 h-8 md:w-9 md:h-9'><ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" /></Button>
            </div>
            <Button variant="outline" className='bg-white/10 dark:bg-white/10 font-semibold text-white rounded-full text-sm md:text-base px-4 md:px-6 py-2'>Portfolio</Button>

          </FadeContent>

        </div>
      </div>
    </section>
  );
}