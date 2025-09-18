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
    <div className="flex flex-col mt-10 items-center bg-white dark:bg-zinc-900 justify-center overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
          <div className="h-100">
            <div className='w-full p-8 gap-4 flex flex-col items-center justify-center'>
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
              <h2 className={`${syncopate.className} text-2xl w-2xl text-center font-bold text-black dark:text-white mb-4`}>
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
              <h2 className={`${syncopate.className} text-2xl w-2xl text-center font-bold text-black dark:text-white`}>
                  &ldquo;Watch the showreel below to answer that question.&rdquo;
              </h2>
              </AnimatedContent>
            </div>
          </div>
          </>
        }
      >
        <div className="flex w-full h-full flex-col  items-center justify-center">
          <Image
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            src={require("../../assets/thumbnail.png")}
            alt="hero"
            height={800}
            width={1800}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
          <div className="absolute">
            <Button variant="default" className="relative bottom-0 h-fit w-fit rounded-full">
              <h2 className="text-white">Watch the showreel</h2>
              <Play fill="white" className="w-6 h-6 text-white" />
            </Button>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
