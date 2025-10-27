/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useId } from "react";
import { Tektur, Syncopate, Afacad } from "next/font/google";
import AnimatedContent from "./AnimatedContent";

const afacad = Afacad({
  weight: ["700","400","600","500"],
  subsets: ["latin"],
});

const tektur = Tektur({
  weight: ["700","400"],
  subsets: ["latin"],
});

const syncopate = Syncopate({
  weight: ["400","700"],
  subsets: ["latin"],
});

export default function FeaturesSectionDemo1() {
  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-30 xl:py-50 px-4 sm:px-6 md:px-8">
        <div className="w-full gap-2 sm:gap-3 md:gap-4 flex flex-col items-center justify-center mb-12 sm:mb-16 md:mb-20 lg:mb-30 max-w-7xl mx-auto">
          <div className="w-fit h-fit p-1.5 sm:p-2 bg-zinc-200 rounded-full px-3 sm:px-4">
            <h2 className={`${tektur.className} 
                tracking-widest relative text-left z-10 text-xs sm:text-sm md:text-md text-black`}>
                Features  
            </h2>
          </div>
          <h1 className={`${syncopate.className} 
                tracking-widest relative text-center w-full max-w-2xl px-4 z-10 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-black`}>
                Our Digital Toolbox
          </h1>
          <h3 className={`${afacad.className} text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl justify-center font-regular flex text-center text-gray-500 max-w-xl mx-auto px-4 sm:px-6 md:px-8`}>
            Every project is unique, but they all start with a foundation of powerful, user-centric features. 
          </h3>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-4 lg:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl overflow-hidden"
          >
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0.0}
              animateOpacity
              scale={0.5}
              threshold={0.2}
              delay={0}
              onComplete={() => {}}
            >
            <Grid size={20} />
            <h3 className={`${syncopate.className} text-xs sm:text-sm tracking-tight font-bold text-neutral-800 dark:text-white relative z-20`}>
              {feature.title}
            </h3>
            <h4 className={`${afacad.className} text-neutral-600 dark:text-neutral-400 mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base font-normal relative z-20`}>
              {feature.description}
            </h4>
            </AnimatedContent>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "1. AI-Powered Personalization Engine",
    description:
      "We integrate machine learning algorithms to analyze user behavior and preferences, delivering a unique experience for everyone. This can include custom content feeds, intelligent product recommendations, predictive search, and automated workflows tailored to individual user patterns.",
  },
  {
    title: "2. Real-Time Collaborative Environments",
    description:
      "Allow multiple users to work together seamlessly, as if they were in the same room. We build features like live co-editing documents, synchronized project dashboards, shared digital whiteboards, and live chat/commenting, all updated instantaneously using technologies like WebSockets.",
  },
  {
    title: "3. Advanced Data Visualization Dashboards",
    description:
      "Transform complex data into clear, actionable insights. We build interactive dashboards with dynamic charts, graphs, and maps that allow users to filter, drill down, and analyze their metrics in real-time. Perfect for admin panels, financial apps, and analytics platforms.",
  },
  {
    title: "4. Progressive Web App (PWA) Functionality",
    description:
      "We build applications that blur the line between website and native app. PWAs offer an app-like experience directly from a browser, including offline functionality, push notifications, and the ability to be installed on a user's device home screen without going through an app store.",
  },
  {
    title: "5. Biometric Authentication & Security",
    description:
      "Enhance security and simplify logins. We implement modern authentication methods like fingerprint scanning, facial recognition, and two-factor authentication (2FA) to ensure user accounts are protected without sacrificing convenience.",
  },
  {
    title: "6. Automated Workflow & Integration Hub",
    description:
      " We create systems that do the work for you. Build automated triggers and actions (e.g., When X happens, do Y) and seamlessly connect your app to other critical tools (like CRM, email, payment gateways) via APIs, creating a central hub that streamlines business operations.",
  },
  {
    title: "7. Microinteractions & Enhanced UX Feedback",
    description:
      "The devil is in the details. We craft subtle animations and visual cues—like a satisfying like animation, a smooth loading bar, or helpful hover tooltips—that guide users, provide immediate feedback, and make the application feel polished, responsive, and engaging.",
  },
  {
    title: "8. Voice-Enabled Navigation & Control",
    description:
      "Make your application more accessible and hands-free. We integrate voice recognition APIs to allow users to navigate, search, input data, and control key functions using simple voice commands, catering to the growing trend of voice-assisted technology.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, index: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${index}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
