"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";
import { Syncopate } from "next/font/google";

const syncopate = Syncopate({
  weight: ["400", "700"],
  variable: "--font-syncopate",
  subsets: ["latin"],
});

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className=" bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-neutral-50 dark:via-neutral-50 dark:to-neutral-100 bg-gradient-to-l from-white  to-white opacity-0"
              style={{
                filter: filter ? "blur(50px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className={`${syncopate.className}  text-black tracking-widest shadow-blue-300/20 rounded-4xl px-6 w-sm lg:w-4xl py-2 text-2xl lg:text-5xl leading-normal`}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};