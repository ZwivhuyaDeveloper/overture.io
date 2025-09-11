"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { Syncopate, Tektur, Archivo } from "next/font/google";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import background2 from "@/assets/overture-blue.png";

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

export function AboutUs({ className }: { className?: string }) {
  return (
    <div className={cn("h-[1080px} w-full rounded-md dark:bg-neutral-950 bg-white relative flex flex-col  justify-center antialiased", className)}>
      <div className="max-w-7xl items-center h-full my-45 gap-6 flex flex-col w-full mx-auto">
        <div className="w-fit h-fit p-2 bg-zinc-200 rounded-full px-4">
            <h2 className={`${tektur.className} 
                tracking-widest relative text-left z-10 text-md sm:text-sm text-black`}>
                About Us
            </h2>
        </div>
        <div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-0">
            <Card className="w-full h-[60vh] z-10 shadow-none border-none bg-transparent">
                <CardContent>
                    <div className="relative items-center flex flex-row">
                        <h1 className={`${syncopate.className} 
                        tracking-widest relative text-left font-bold text-black w-full max-w-full text-2xl my-2 z-10`}>
                            Design studio focused on 
                        </h1>
                    </div>
                    <div className="relative items-center flex flex-row">
                        <h1 className={`${syncopate.className} 
                        tracking-widest flex flex-row items-center gap-4 relative text-left font-bold text-black w-full max-w-full text-2xl my-2 z-10`}>
                            <p>crafting</p> 
                                <div className="relative flex flex-col gap-1 shadow-lg bg-white rotate-25  w-25 h-15 p-1 rounded-md z-10">
                                    <div className="w-full h-3 bg-blue-500 rounded-[3px]"/>
                                    <div className="w-full h-2 bg-zinc-200 rounded-[3px]"/>
                                    <div className="h-full w-full flex flex-row gap-1">
                                        <div className="w-full h-full bg-zinc-200 rounded-[4px]"/>
                                        <div className="w-full h-full bg-zinc-200 rounded-[4px]"/>
                                    </div>
                                </div> 
                            <p>websites,</p>
                        </h1> 
                    </div>
                    <div>
                        <h1 className={`${syncopate.className} 
                        tracking-widest relative flex flex-row gap-3 text-left font-bold text-black w-full max-w-full text-2xl my-2 z-10`}>
                            <div className="relative -left-5 flex flex-col gap-1 shadow-lg bg-white -rotate-25  w-60 h-15 p-1 rounded-md z-10">
                                <div className="w-full h-3 bg-orange-500 rounded-[3px]"/>
                                <div className="w-full h-2 bg-zinc-200 rounded-[3px]"/>
                                <div className="h-full w-full flex flex-row gap-1">
                                    <div className="w-full h-full bg-zinc-200 rounded-[4px]"/>
                                    <div className="w-full h-full bg-zinc-200 rounded-[4px]"/>
                                </div>
                            </div>
                            <p>software</p> 
                            <div className=" gap-2">
                                <div className="relative flex flex-col gap-1 shadow-lg bg-white w-15 h-20 p-1 rounded-md z-10">
                                    <div className="w-full h-full bg-zinc-200 rounded-[3px]"/>
                                    <div className="h-full w-full flex flex-row gap-1">
                                        <div className="w-full h-full bg-zinc-200 rounded-[4px]"/>
                                        <div className="w-full h-full bg-zinc-200 rounded-[4px]"/>
                                    </div>
                                    <div className="w-full h-3 bg-blue-500 rounded-[3px]"/>
                                </div>
                                <div className="absolute justify-center top-7 right-45 flex flex-col gap-1 shadow-lg bg-white w-15 h-20 p-1 rounded-md z-10">
                                    <div className="w-full h-3 bg-zinc-200 rounded-[3px]"/>
                                    <div className="h-full w-full flex flex-row gap-1">
                                        <div className="w-full h-full bg-zinc-200 rounded-[4px]"/>
                                        <div className="w-full h-full bg-zinc-200 rounded-[4px]"/>
                                    </div>
                                    <div className="w-full h-3 bg-blue-500 rounded-[3px]"/>
                                </div>
                            </div>
                            <p className="w-full">and apps.</p>
                        </h1>
                    </div>
                    <p className={`${archivo.className} 
                    tracking-widest relative text-left text-black w-full max-w-full text-base mt-20 my-2 z-10`}>With a team of experienced developers and designers, we are dedicated to delivering high-quality solutions that meet your needs. We use the latest technologies and best practices to ensure that your project is completed on time and to the highest standard.</p>
                </CardContent>
            </Card>
            <Card className="w-full h-[60vh] z-10 p-0 bg-transparent border-none shadow-none">
                <Image src={background2} width={1000} height={1000} quality={100} alt="linear demo image" className=" object-cover w-full h-full rounded-2xl" />
            </Card>
        </div>
      </div>
    </div>
  );
}