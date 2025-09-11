"use client";

import { Hero } from "@/components/home/hero";
import { useEffect, useState } from "react";

import { ArrowUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutUs } from "@/components/home/about-us";
import { Vision } from "@/components/home/vision";
import { Partners } from "@/components/home/our-partners";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FirstText } from "@/components/home/section-text";
import { VideoSection } from "@/components/home/video-section";



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
            className="fixed bottom-4 right-4 z-50 p-4 bg-white rounded-full shadow-lg"
          >
            <ArrowUpIcon className="w-6 h-6" />
          </Button>
        )}
        <section>
          <Hero
            title="Bring Ideas to life with out creative magic"
            description="Join us in our pursuit of innovation and creativity"
          />
        </section>
        <section className="">
          <AboutUs />
        </section>
        <div className="w-full h-[40rem] flex items-center justify-center">
          <Partners />
        </div>
        <section className="mb-10">
          <Vision />
        </section>
        <section>
          <VideoSection />
        </section>
      </div>
    </main>
  );
}