/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { BackgroundBeams } from "../ui/background-beams";
import web from "@/assets/web1.png";
import web2 from "@/assets/web2.png";
import Image from "next/image";
import { Tektur, Syncopate, Archivo } from "next/font/google";
import { Meteors } from "../ui/meteors";
import { Button } from "../ui/button";

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

const syncopate = Syncopate({
  weight: ["400","700"],
  variable: "--font-syncopate",
  subsets: ["latin"],
});

export function Vision() {
  return (
    <div className="gap-16 flex flex-col items-center">
        <div className="w-full gap-4 flex flex-col items-center justify-center max-w-7xl mx-auto">
          <div className="w-fit h-fit p-2 bg-zinc-200 rounded-full px-4">
            <h2 className={`${tektur.className} 
                tracking-widest relative text-left z-10 text-md sm:text-sm text-black`}>
                Vision  
            </h2>
          </div>
          <h1 className={`${syncopate.className} 
                tracking-widest relative text-center w-2xl z-10 text-md sm:text-xl font-bold text-black`}>
                Our Vision: Pioneering the Future of Digital Innovation
          </h1>
        </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      {/*card 1*/}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-zinc-200 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs gap-4 flex flex-col">
          <h2 className={`${syncopate.className} 
          tracking-widest relative text-left z-10 text-md sm:text-xl font-bold text-black`}>
          Your next BIG step on the web
          </h2>
          <p className={`${tektur.className} 
          tracking-widest relative text-left z-10 text-md sm:text-md text-black`}>
          Beyond pixels and code, our designs are built on a foundation of empathy and understanding. Explore our work to see how we create digital experiences that resonate with users.
          </p>
          <Button variant="default" className="w-fit rounded-full">View our work</Button>
        </div>
        <Image
          src={web2}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-2 lg:-right-[10%]  -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      {/*card 2*/}
      <WobbleCard containerClassName="col-span-1 gap-6 flex items-center justify-center flex-col bg-blue-700 min-h-[300px]">
        <h2 className={`${syncopate.className} 
        tracking-widest relative text-left z-10 text-md sm:text-xl font-bold text-white`}>
          Explore our Pricing
        </h2>
        <p className={`${tektur.className} 
        tracking-widest relative text-left z-10 text-md sm:text-md text-white`}>
          Our pricing is transparent and flexible, designed to fit your budget.
        </p>
        <Button variant="default" className="w-fit bg-white text-black rounded-full">View our pricing</Button>
      </WobbleCard>
      {/*card 3*/}
      <WobbleCard containerClassName="col-span-1 gap-4 flex flex-col bg-orange-700 min-h-[300px]">
        <h2 className={`${syncopate.className} 
        tracking-widest relative text-left z-10 text-md sm:text-xl font-bold text-white`}>
          Our Services
        </h2>
        <p className={`${tektur.className} 
        tracking-widest relative text-left z-10 text-md sm:text-md text-white`}>
          Our services are designed to help you achieve your goals and create a successful business.
        </p>
      </WobbleCard>
      {/*card 4*/}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-zinc-200 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs gap-4 flex flex-col">
          <h2 className={`${syncopate.className} 
          tracking-widest relative text-left z-10 text-md sm:text-xl font-bold text-black`}>
          Your next BIG step on the web
          </h2>
          <p className={`${tektur.className} 
          tracking-widest relative text-left z-10 text-md sm:text-md text-black`}>
          Beyond pixels and code, our designs are built on a foundation of empathy and understanding. Explore our work to see how we create digital experiences that resonate with users.
          </p>
        </div>
        <Image
          src={web2}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-2 lg:-right-[10%]  -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      {/*card 5*/}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-zinc-200 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className={`${syncopate.className} 
          tracking-widest relative text-left z-10 text-md sm:text-xl font-bold text-black`}>
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className={`${tektur.className} 
          tracking-widest relative text-left z-10 text-md sm:text-md text-black`}>
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
      </WobbleCard>
    </div>
    </div>
  );
}