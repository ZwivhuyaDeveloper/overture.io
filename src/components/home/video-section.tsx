"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import { Button } from "../ui/button";
import { Play } from "lucide-react";
import { Syncopate } from "next/font/google"
import ScrollReveal from "../ScrollReveal";
import AnimatedContent from "../AnimatedContent";

const syncopate = Syncopate({
  weight: ["400","700"],
  variable: "--font-syncopate",
  subsets: ["latin"],
})

export function VideoSection() {
  return (
    <div className="flex flex-col mt-6 sm:mt-8 md:mt-10 items-center bg-white dark:bg-zinc-900 justify-center overflow-hidden px-4 sm:px-6 md:px-8">
      <ContainerScroll
        titleComponent={
          <>
          <div className="h-auto">
            <div className='w-full p-4 sm:p-6 md:p-8 gap-2 sm:gap-3 md:gap-4 flex flex-col items-center justify-center'>
              <AnimatedContent
                    distance={200}
                    direction="vertical"
                    reverse={true}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0}
                    onComplete={() => {}}
              >
              <h2 className={`${syncopate.className} text-lg sm:text-xl md:text-2xl lg:text-3xl w-full max-w-2xl text-center font-bold text-black dark:text-white mb-2 sm:mb-3 md:mb-4 px-4`}>
                  &ldquo;Are you ready to change the world with us at your service?&rdquo;
              </h2>
              </AnimatedContent>
              <AnimatedContent
                    distance={200}
                    direction="vertical"
                    reverse={true}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0}
                    onComplete={() => {}}
              >
              <h2 className={`${syncopate.className} text-lg sm:text-xl md:text-2xl lg:text-3xl w-full max-w-2xl text-center font-bold text-black dark:text-white px-4`}>
                  &ldquo;Watch the showreel below to answer that question.&rdquo;
              </h2>
              </AnimatedContent>
            </div>
          </div>
          </>
        }
      >
        <div className="flex w-full h-full flex-col items-center justify-center">
          <Image
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            src={require("../../assets/thumbnail.png")}
            alt="hero"
            height={800}
            width={1800}
            className="mx-auto rounded-lg sm:rounded-xl md:rounded-2xl object-cover h-full object-left-top w-full max-w-full"
            draggable={false}
          />
          <div className="absolute">
            <Button variant="default" className="relative bottom-0 h-fit w-fit rounded-full text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3">
              <h2 className="text-white">Watch the showreel</h2>
              <Play fill="white" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </Button>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
