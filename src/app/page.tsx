"use client";

import { Hero } from "@/components/home/hero";
import { useEffect, useState } from "react";

import { ArrowUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutUs } from "@/components/home/about-us";
import { Vision } from "@/components/home/vision";
import { Partners } from "@/components/home/our-partners";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { VideoSection } from "@/components/home/video-section";
import { Services } from "@/components/home/services";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Syncopate } from "next/font/google";
import Image from "next/image";
import FeaturesSectionDemo2 from "@/components/features-section-demo-2";
import FeaturesSectionDemo3 from "@/components/features-section-demo-3";
import FeaturesSectionDemo1 from "@/components/features-section-demo-1";
import PortfolioSection from "@/components/home/portfolio-section";
import ExpandableCardDemo from "@/components/expandable-card-demo-grid";
import { ServicesSection } from "@/components/home/services-section";

const syncopate = Syncopate({
  weight: ["400","700"],
  variable: "--font-syncopate",
  subsets: ["latin"],
})

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen w-full">
      <div className="min-h-screen w-full">
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 z-50 p-4 bg-black rounded-full shadow-lg"
          >
            <ArrowUpIcon className="w-6 h-6" />
          </Button>
        )}
        <section>
          <Hero
            title="Bring Ideas to life with our creative magic"
            description="Join us in our pursuit of innovation and creativity"
          />
        </section>
        <section className="">
          <AboutUs />
        </section>
        <section className="w-full h-full flex items-center justify-center">
          <Partners />
        </section>
        <section className="mb-10">
          <Vision />
        </section>
        <section>
          <VideoSection />
        </section>
        <section>
          <ServicesSection />
        </section> 
        <section className="mb-10">
          <PortfolioSection />
        </section> 
        <section className="w-full h-full flex items-center justify-center">
          <Partners />
        </section>
        <section className="py-4 w-full h-full">
          <FeaturesSectionDemo1 />
        </section>
        <section className="mb-10">
          <FeaturesSectionDemo2 />
        </section>
      </div>
    </main>
  );
}