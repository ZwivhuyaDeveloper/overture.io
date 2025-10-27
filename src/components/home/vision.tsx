/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { BackgroundBeams } from "../ui/background-beams";
import web from "@/assets/web1.png";
import web2 from "@/assets/web2.png";
import web3 from "@/assets/web3.png";
import web4 from "@/assets/web4.png";
import web5 from "@/assets/overture_render3.png"; 
import Image from "next/image";
import { Tektur, Syncopate, Archivo, Afacad } from "next/font/google";
import { Button } from "../ui/button";
import AnimatedContent from "../AnimatedContent";

const archivo = Archivo({
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-archivo",
  subsets: ["latin"],
});

const tektur = Tektur({
  weight: ["700","400"],
  variable: "--font-tektur",
  subsets: ["latin"],
});

const afacad = Afacad({
  weight: ["400","500","600","700"],
  variable: "--font-afacad",
  subsets: ["latin"],
});

const syncopate = Syncopate({
  weight: ["400","700"],
  variable: "--font-syncopate",
  subsets: ["latin"],
});

export function Vision() {
  return (
    <div className="gap-8 sm:gap-12 md:gap-16 mb-6 sm:mb-8 md:mb-10 h-full flex flex-col items-center bg-white dark:bg-zinc-900 px-4 sm:px-6 md:px-8">
        <div className="w-full gap-2 sm:gap-3 md:gap-4 flex flex-col items-center justify-center max-w-7xl mx-auto">
          <div className="w-fit h-fit p-1.5 sm:p-2 bg-zinc-200 dark:bg-zinc-800 rounded-full px-3 sm:px-4">
            <h2 className={`${tektur.className} 
                tracking-widest relative text-left z-10 text-xs sm:text-sm md:text-md text-black dark:text-white`}>
                Vision  
            </h2>
          </div>
          <AnimatedContent
            distance={200}
            direction="vertical"
            reverse={true}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={0}
            threshold={0.2}
            delay={0.1}
            onComplete={() => {}}
          >
          <div className="flex flex-col lg:flex-col md:flex-col sm:flex-col justify-center mt-3 sm:mt-4 md:mt-5 mb-6 sm:mb-8 md:mb-10 items-center gap-2 sm:gap-3 md:gap-4">
            <h1 className={`${syncopate.className} 
              tracking-widest relative text-center w-full max-w-4xl px-4 z-10 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-black dark:text-white
            `}>
              Crafting Digital Experiences That Transform Businesses
            </h1>
            <h2 className={`${afacad.className} text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl justify-self-center font-regular text-center dark:text-gray-300 text-gray-500 max-w-3xl mx-auto px-4 sm:px-6 md:px-8`}> 
              We envision a digital landscape where innovative design meets cutting-edge technology to create meaningful connections 
              between brands and their audiences, driving growth and success in the ever-evolving digital world.
            </h2>
          </div>
          </AnimatedContent>
        </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 max-w-7xl mx-auto w-full h-full mb-12 sm:mb-16 md:mb-20">
      {/*card 1*/}

      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-zinc-200 dark:bg-zinc-800 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[300px]"
        className=""
      >
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
        <div className="max-w-xs gap-4 lg:p-1 md:p-2 sm:p-2 p-2 flex flex-col">
          <h2 className={`${syncopate.className} 
          tracking-widest relative text-left z-10 text-md sm:text-xl font-bold text-black dark:text-white`}>
          Your next BIG step on the web
          </h2>
          <p className={`${afacad.className} 
          tracking-normal relative text-left z-10 text-sm sm:text-base md:text-lg text-black dark:text-white`}>
            Beyond pixels and code, our designs are built on a foundation of empathy and understanding. Explore our work to see how we create digital experiences that resonate with users.
          </p>
          <Button variant="default" className="w-fit rounded-full text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-1.5 sm:py-2">View our work</Button>
        </div>
        <div className="flex px-0 mx-auto -translate-x-10 lg:-translate-x-20 md:-translate-x-8 sm:-translate-x-0 lg:translate-y-0 md:translate-y-8 sm:translate-y-20 translate-y-8 transform perspective-900 -rotate-y-45 rotate-x-25 translate-z-60 relative">
          <Image
            src={web2}
            width={350}
            height={350}
            quality={100}
            alt="linear demo image"
            className="absolute -right-[5%] lg:-right-[10%] xl:w-[350px] xl:h-[200px] lg:w-[300px] lg:h-[170px] md:w-[250px] md:h-[140px] sm:w-[200px] sm:h-[110px] w-[150px] h-[85px] lg:-bottom-10 md:-bottom-10 sm:-bottom-10 -bottom-10 object-contain rounded-2xl"
          />
          <Image
            src={web}
            width={350}
            height={350}
            quality={100}
            alt="linear demo image"
            className="absolute -right-[10%] lg:-right-[20%] xl:w-[350px] xl:h-[200px] lg:w-[300px] lg:h-[170px] md:w-[250px] md:h-[140px] sm:w-[200px] sm:h-[110px] w-[150px] h-[85px] lg:-bottom-20 md:-bottom-20 sm:-bottom-20 -bottom-15 object-contain rounded-2xl"
          />
          <Image
            src={web4}
            width={350}
            height={350}
            quality={100}
            alt="linear demo image"
            className="absolute -right-[15%] lg:-right-[30%] xl:w-[350px] xl:h-[200px] lg:w-[300px] lg:h-[170px] md:w-[250px] md:h-[140px] sm:w-[200px] sm:h-[110px] w-[150px] h-[85px] lg:-bottom-30 md:-bottom-24 sm:-bottom-20 -bottom-20 object-contain rounded-xl"
          />
          <Image
            src={web3}
            width={350}
            height={350}
            quality={100}
            alt="linear demo image"
            className="absolute -right-[20%] lg:-right-[40%] xl:w-[350px] xl:h-[200px] lg:w-[300px] lg:h-[170px] md:w-[250px] md:h-[140px] sm:w-[200px] sm:h-[110px] w-[150px] h-[85px] lg:-bottom-40 md:-bottom-32 sm:-bottom-28 -bottom-25 object-contain rounded-2xl"
          />
        </div>
        
        </AnimatedContent>
      </WobbleCard>

      {/*card 2*/}
      <WobbleCard containerClassName="col-span-1 space-y-4 gap-6 flex items-center justify-between flex-col bg-blue-500 dark:bg-blue-700 min-h-[300px]">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={true}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={0.5}
          threshold={0.1}
          delay={0}
          onComplete={() => {}}
        >
          <div className="flex flex-col lg:p-1 md:p-2 sm:p-3 p-3 gap-2 w-full h-full">
            <h2 className={`${syncopate.className} 
            tracking-widest relative text-left z-10 text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 md:mb-5 font-bold text-white`}>
              Explore our Pricing
            </h2>
            <p className={`${afacad.className} 
            tracking-normal relative text-left z-10 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 text-white`}>
            Discover transparent pricing models tailored to your unique business needs, ensuring exceptional 
            value without compromising on quality or innovation.
            </p>
          </div>
          <div className="flex items-center w-full">
            <Button variant="default" className="w-fit bg-white text-black rounded-full text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-1.5 sm:py-2">View our pricing</Button>
          </div>
        </AnimatedContent>
      </WobbleCard>
      {/*card 3*/}
      <WobbleCard containerClassName="col-span-1 gap-4 flex flex-col bg-orange-500 dark:bg-orange-700 min-h-[300px]">
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
          <div className="flex flex-col lg:p-1 md:p-2 sm:p-3 p-3 gap-2 w-full h-full">
            <h2 className={`${syncopate.className} 
            tracking-widest relative text-left z-10 mb-3 sm:mb-4 md:mb-5 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white`}>
              Our Services
            </h2>
        <p className={`${afacad.className} 
        tracking-normal relative text-left z-10 text-sm sm:text-base md:text-lg text-white`}>
          We deliver comprehensive digital solutions that elevate your brand presence, streamline operations, and drive measurable growth across all digital touchpoints.
        </p>
        <div className="flex items-center w-full mt-4">
          <Button variant="default" className="w-fit bg-white text-black rounded-full text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-1.5 sm:py-2">Browse our services</Button>
        </div>
          </div>
        </AnimatedContent>
      </WobbleCard>
      {/*card 4*/}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-zinc-200 dark:bg-zinc-800 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[300px]"
        className=""
      >
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
        <div className="max-w-xs gap-4 lg:p-1 md:p-2 sm:p-3 p-3 flex flex-col">
          <h2 className={`${syncopate.className} 
          tracking-widest relative text-left z-10 text-md sm:text-xl font-bold text-black dark:text-white`}>
          Transform Your Digital Presence
          </h2>
          <p className={`${afacad.className} 
          tracking-normal relative text-left z-10 text-sm sm:text-base md:text-lg text-black dark:text-white`}>
            We craft strategic digital experiences that combine cutting-edge technology with human-centered design, 
            creating powerful connections between your brand and your audience that drive meaningful engagement and sustainable growth.
          </p>
        </div>
        <div className="flex px-0 mx-auto -translate-x-20 lg:-translate-x-25 md:-translate-x-20 sm:-translate-x-20 lg:translate-y-20 md:translate-y-15 sm:translate-y-10 translate-y-20   transform perspective-1500 rotate-y-10 rotate-x-45 -rotate-z-40 translate-z-40">
          <Image
          src={web4}
          width={300}
          height={300}
          alt="linear demo image"
          className="absolute -right-[5%] lg:-right-[10%]  lg:w-[300px] lg:h-[200px]  md:w-[250px] md:h-[140px] sm:w-[200px] sm:h-[110px] w-[150px] h-[85px] -bottom-20 object-contain rounded-2xl"
        />
          <Image
          src={web2}
          width={300}
          height={300}
          alt="linear demo image"
          className="absolute -right-[10%] lg:-right-[20%]  lg:w-[300px] lg:h-[200px]  md:w-[250px] md:h-[140px] sm:w-[200px] sm:h-[110px] w-[150px] h-[85px] -bottom-10 object-contain rounded-2xl"
        />
        </div>
        </AnimatedContent>
      </WobbleCard>
      {/*card 5*/}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-purple-500 dark:bg-purple-700 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
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
        <div className="max-w-md lg:p-1 md:p-2 sm:p-3 p-3">
          <h2 className={`${syncopate.className} 
          tracking-widest relative text-left z-10 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white dark:text-white`}>
            Ready to Transform Your Digital Future?
          </h2>
          <p className={`${afacad.className} 
          tracking-normal relative text-left z-10 text-sm sm:text-base md:text-lg text-white dark:text-white mb-4 sm:mb-5 md:mb-6`}>
            Let&apos;s discuss how our expertise can help you achieve your business goals. Schedule a free consultation with our team of digital experts today.
          </p>
          <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
            <Button variant="default" className="w-fit bg-white text-black rounded-full text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-1.5 sm:py-2">
              Schedule a Meeting
            </Button>
            <div className="flex items-center space-x-2">
              <span className="text-white text-xs sm:text-sm">Available: Mon - Fri, 9:00 AM - 6:00 PM EST</span>
            </div>
          </div>
        </div>
        <Image
          src={web}
          width={500}
          height={500}
          alt="consultation demo image"
          className="absolute -translate-y-40 hidden lg:block md:block lg:-translate-y-40 md:-translate-y-40 sm:-translate-y-40 flex -right-2 z-20 md:-right-[5%] lg:-right-[1%] xl:-right-[2%] lg:w-[500px] lg:h-[300px] md:w-[400px] md:h-[200px] sm:w-[80px] sm:h-[20px] w-[60px] h-[10px] -bottom-10 object-contain rounded-2xl"
        />
        <BackgroundBeams />
        </AnimatedContent>
      </WobbleCard>
    </div>
    </div>
  );
}