"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Tektur, Syncopate, Afacad } from 'next/font/google'
import Image from "next/image";
import AnimatedContent from "../AnimatedContent";

const tektur = Tektur({ weight: ['400', '700'], variable: '--font-tektur', subsets: ['latin'] })
const syncopate = Syncopate({ weight: ['400', '700'], variable: '--font-syncopate', subsets: ['latin'] })
const afacad = Afacad({ weight: ['400', '500', '600', '700'], variable: '--font-afacad', subsets: ['latin'] })

// Function to generate colors based on orange, blue, and purple theme
const generateRandomColors = (count: number) => {
  const colors = [];
  
  // Define base hues for our theme colors
  const baseHues = [
    30,   // Orange
    210,  // Blue  
    270   // Purple
  ];
  
  for (let i = 0; i < count; i++) {
    // Select a base hue and create variations
    const baseHue = baseHues[i % baseHues.length];
    
    // Create variations by adding/subtracting up to 30 degrees for gradient shades
    const hueVariation = (i % 7) - 3; // -3 to +3
    const hue = (baseHue + hueVariation * 10 + 360) % 360;
    
    // Vary saturation and lightness for more variety
    const saturation = 70 + (i % 4) * 8;  // 70-102% (capped at 100%)
    const lightness = 60 + (i % 3) * 8;   // 45-61% (darker range)
    
    colors.push(`hsla(${hue}, ${saturation}%, ${lightness}%, 1)`);
  }
  
  return colors;
};

export function ServicesSection() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  
  // Generate colors for the current number of cards
  const cardColors = generateRandomColors(cards.length);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/20 backdrop-blur-lg h-full w-full z-20"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[700px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  width={1000}
                  height={1000}
                  src={active.src}
                  alt={active.title}
                  quality={100}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className={`${syncopate.className} font-bold text-lg text-neutral-700 dark:text-neutral-200`}
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`lowercase-description-${active.description}-${id}`}
                      className={`${tektur.className} text-neutral-600 text-lg dark:text-neutral-400 lowercase`}
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className={`${afacad.className} text-sm px-4 py-3 rounded-full font-bold bg-blue-500 dark:bg-blue-400 text-white`}
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`${afacad.className}  text-neutral-600 text-sm md:text-lg lg:text-lg h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]`}
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="max-w-6xl mx-auto w-full gap-4 my-20 py-20">
      <div className="w-full gap-4 flex flex-col items-center justify-center mb-20   max-w-7xl mx-auto">
          <div className="w-fit h-fit p-2 bg-zinc-200 rounded-full px-4">
            <h2 className={`${tektur.className} 
                tracking-widest relative text-left z-10 text-md sm:text-sm text-black`}>
                Services  
            </h2>
          </div>
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={0}
            threshold={0.1}
            delay={0}
            onComplete={() => {}}
          >
            <div className="justify-center items-center mt-5 mb-10 gap-5 flex flex-col">
              <h1 className={`${syncopate.className} 
                  tracking-widest relative text-center w-4xl z-10 text-md sm:text-3xl font-bold text-black dark:text-white`}>
                  Comprehensive Digital Solutions for Modern Businesses
              </h1>
              <p className="text-xl justify-self-center text-center text-gray-500 max-w-3xl mx-auto">
                From concept to execution, we deliver end-to-end digital services that transform your ideas into powerful, scalable, 
                and engaging experiences that captivate your audience and drive measurable business results.
              </p>
            </div>
          </AnimatedContent>
        </div>
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={0}
          threshold={0.1}
          delay={0}
          onComplete={() => {}}
        >
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row space-y-1  mt-2  justify-between items-center rounded-xl cursor-pointer transition-all duration-300 relative overflow-hidden"
            style={{
              background: `linear-gradient(60deg, ${cardColors[index]} 90%, rgba(255, 255, 255, 0.1) 100%)`
            }}
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={1000}
                  height={1000}
                  src={card.src}
                  alt={card.title}
                  quality={100}
                  className="h-60 w-60 md:h-20 md:w-20 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className={`${syncopate.className} font-bold text-white text-lg dark:text-neutral-200 text-center md:text-left`}
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className={`${afacad.className} normal-case text-white text-lg dark:text-neutral-400  text-center md:text-left`}
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-white/90 hover:bg-white text-gray-800 backdrop-blur-sm border border-white/30 mt-4 md:mt-0 shadow-md"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
        </AnimatedContent>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Web Development",
    title: "Web Development",
    src: "/overture_render3.png",
    ctaText: "Learn More",
    ctaLink: "/projects",
    content: () => {
      return (
        <p>
          We create stunning, responsive websites that captivate your audience and drive results. 
          Our web development services include custom website design, e-commerce solutions, 
          content management systems, and progressive web apps. <br /> <br /> Using the latest 
          technologies like React, Next.js, and modern CSS frameworks, we build fast, secure, 
          and scalable websites that provide exceptional user experiences across all devices.
        </p>
      );
    },
  },
  {
    description: "Native App Development",
    title: "Native App Development",
    src: "/overture_render3.png",
    ctaText: "Learn More",
    ctaLink: "/projects",
    content: () => {
      return (
        <p>
          Transform your ideas into powerful mobile applications with our native app development 
          services. We specialize in creating high-performance iOS and Android apps that deliver 
          seamless user experiences. <br /> <br /> Our expertise includes Swift for iOS, Kotlin for 
          Android, and cross-platform solutions using React Native and Flutter. From concept to 
          deployment, we handle every aspect of the app development lifecycle.
        </p>
      );
    },
  },

  {
    description: "UI/UX Design",
    title: "UI/UX Design Services",
    src: "/overture_render3.png",
    ctaText: "Learn More",
    ctaLink: "/projects",
    content: () => {
      return (
        <p>
          Design experiences that users love with our comprehensive UI/UX design services. 
          We combine aesthetics with functionality to create intuitive interfaces that engage 
          and delight your users. <br /> <br /> Our design process includes user research, 
          wireframing, prototyping, and usability testing. We ensure your digital products 
          are not only beautiful but also accessible, responsive, and optimized for conversion.
        </p>
      );
    },
  },
  {
    description: "Brand Identity & Marketing",
    title: "Brand Identity & Marketing",
    src: "/overture_render3.png",
    ctaText: "Learn More",
    ctaLink: "/projects",
    content: () => {
      return (
        <p>
          Build a powerful brand presence that resonates with your target audience. Our brand 
          identity and marketing services help you establish a unique market position and create 
          lasting connections with customers. <br /> <br /> We offer logo design, brand guidelines, 
          marketing strategy, content creation, and digital marketing campaigns. Let us help you 
          tell your story and grow your business in the digital landscape.
        </p>
      );
    },
  },
  {
    description: "Consulting",
    title: "Consulting Services",
    src: "/overture_render3.png",
    ctaText: "Learn More",
    ctaLink: "/projects",
    content: () => {
      return (
        <p>
          Leverage our expertise to make informed technology decisions and drive your business 
          forward. Our consulting services provide strategic guidance on digital transformation, 
          technology stack selection, and process optimization. <br /> <br /> We work closely with 
          your team to understand your business goals, identify opportunities for improvement, 
          and implement solutions that enhance efficiency, scalability, and competitive advantage.
        </p>
      );
    },
  },
];
