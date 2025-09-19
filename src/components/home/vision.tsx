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
    <div className="gap-16 mb-10 h-full flex flex-col items-center bg-white dark:bg-zinc-900">
        <div className="w-full gap-4 flex flex-col items-center justify-center max-w-7xl mx-auto">
          <div className="w-fit h-fit p-2 bg-zinc-200 dark:bg-zinc-800 rounded-full px-4">
            <h2 className={`${tektur.className} 
                tracking-widest relative text-left z-10 text-md font-semibold sm:text-sm text-black dark:text-white`}>
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
          <h1 className={`${syncopate.className} 
                tracking-widest relative text-center w-2xl z-10 text-md sm:text-xl font-bold text-black dark:text-white`}>
                Our Vision:  the Future oPioneeringf Digital Innovation
          </h1>
          </AnimatedContent>
        </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full h-full mb-20">
      {/*card 1*/}

      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-zinc-200 dark:bg-zinc-800 min-h-[500px] lg:min-h-[300px]"
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
        <div className="max-w-xs gap-4 flex flex-col">
          <h2 className={`${syncopate.className} 
          tracking-widest relative text-left z-10 text-md sm:text-xl font-bold text-black dark:text-white`}>
          Your next BIG step on the web
          </h2>
          <p className={`${afacad.className} 
          tracking-normal relative text-left z-10 text-lg sm:text-xl text-black dark:text-white`}>
          Beyond pixels and code, our designs are built on a foundation of empathy and understanding. Explore our work to see how we create digital experiences that resonate with users.
          </p>
          <Button variant="default" className="w-fit rounded-full">View our work</Button>
        </div>
        <div  className=" flex px-0 mx-auto -translate-x-20 transform perspective-900 -rotate-y-45 rotate-x-25 translate-z-60 ">
          <Image
            src={web2}
            width={350}
            height={350}
            quality={100}
            alt="linear demo image"
            className="absolute -right-2 lg:-right-[10%]  -bottom-10 object-contain rounded-2xl"
          />
          <Image
            src={web}
            width={350}
            height={350}
            quality={100}
            alt="linear demo image"
            className="absolute -right-2 lg:-right-[20%]  -bottom-20 object-contain rounded-2xl"
          />
          <Image
            src={web4}
            width={350}
            height={350}
            quality={100}
            alt="linear demo image"
            className="absolute -right-2 lg:-right-[30%]  -bottom-30 object-contain rounded-2xl"
          />
          <Image
            src={web3}
            width={350}
            height={350}
            quality={100}
            alt="linear demo image"
            className="absolute -right-2 lg:-right-[40%]  -bottom-40 object-contain rounded-2xl"
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
          <div className="flex flex-col gap-4 w-full h-full">
            <h2 className={`${syncopate.className} 
            tracking-widest relative text-left z-10 text-md mb-5 sm:text-xl font-bold text-white`}>
              Explore our Pricing
            </h2>
            <p className={`${afacad.className} 
            tracking-normal relative text-left z-10 text-md mb-10 sm:text-xl text-white`}>
              Our pricing is transparent and flexible, designed to fit your budget.
            </p>
          </div>
          <div className="flex items-center w-full">
            <Button variant="default" className="w-fit bg-white text-black rounded-full">View our pricing</Button>
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
          <h2 className={`${syncopate.className} 
          tracking-widest relative text-left z-10 text-md sm:text-xl font-bold text-white`}>
            Our Services
          </h2>
        <p className={`${afacad.className} 
        tracking-normal relative text-left z-10 text-md sm:text-xl text-white`}>
          Our services are designed to help you achieve your goals and create a successful business.
        </p>
        </AnimatedContent>
      </WobbleCard>
      {/*card 4*/}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-zinc-200 dark:bg-zinc-800 min-h-[500px] lg:min-h-[300px]"
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
        <div className="max-w-xs gap-4 flex flex-col">
          <h2 className={`${syncopate.className} 
          tracking-widest relative text-left z-10 text-md sm:text-xl font-bold text-black dark:text-white`}>
          Your next BIG step on the web
          </h2>
          <p className={`${afacad.className} 
          tracking-normal relative text-left z-10 text-md sm:text-xl text-black dark:text-white`}>
          Beyond pixels and code, our designs are built on a foundation of empathy and understanding. Explore our work to see how we create digital experiences that resonate with users.
          </p>
        </div>
        <div className="flex px-0 mx-auto -translate-x-20 translate-y-20 transform perspective-1500 rotate-y-10 rotate-x-45 -rotate-z-40 translate-z-40">
          <Image
          src={web4}
          width={300}
          height={300}
          alt="linear demo image"
          className="absolute -right-2 lg:-right-[10%]  -bottom-20 object-contain rounded-2xl"
        />
          <Image
          src={web2}
          width={300}
          height={300}
          alt="linear demo image"
          className="absolute -right-2 lg:-right-[20%]  -bottom-10 object-contain rounded-2xl"
        />
        </div>
        </AnimatedContent>
      </WobbleCard>
      {/*card 5*/}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-purple-500 dark:bg-purple-700 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
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
        <div className="max-w-sm">
          <h2 className={`${syncopate.className} 
          tracking-widest relative text-left z-10 text-md sm:text-xl font-bold text-white dark:text-white`}>
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className={`${afacad.className} 
          tracking-normal relative text-left z-10 text-md sm:text-xl text-white dark:text-white`}>
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src={web}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-2 z-20 md:-right-[5%] lg:-right-[1%] -bottom-10 object-contain rounded-2xl"
        />
        <BackgroundBeams />
        </AnimatedContent>
      </WobbleCard>
    </div>
    </div>
  );
}