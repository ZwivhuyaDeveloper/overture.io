'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface PartnerLogo {
  id: number;
  src: string;
  alt: string;
}

const PartnerMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeContentRef = useRef<HTMLDivElement>(null);
  const marqueeTween = useRef<gsap.core.Tween | null>(null);

  // Sample partner logos - replace with your actual logos
  const partnerLogos: PartnerLogo[] = [
    { id: 1, src: '/partner1.svg', alt: 'Partner 1' },
    { id: 2, src: '/partner2.svg', alt: 'Partner 2' },
    { id: 3, src: '/partner3.svg', alt: 'Partner 3' },
    { id: 4, src: '/partner4.svg', alt: 'Partner 4' },
    { id: 5, src: '/partner5.svg', alt: 'Partner 5' },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  useGSAP(() => {
    if (!marqueeContentRef.current) return;

    const contentWidth = marqueeContentRef.current.scrollWidth / 2; // Since we duplicated the content
    const duration = 20; // Duration for one complete scroll (in seconds)

    // Set initial position
    gsap.set(marqueeContentRef.current, { x: 0 });

    // Create the animation
    marqueeTween.current = gsap.to(marqueeContentRef.current, {
      x: -contentWidth,
      duration: duration,
      ease: 'none',
      repeat: -1, // Infinite repeat
    });

    // Pause on hover
    const marquee = marqueeRef.current;
    if (marquee) {
      const pauseOnHover = () => marqueeTween.current?.pause();
      const resumeOnLeave = () => marqueeTween.current?.play();
      
      marquee.addEventListener('mouseenter', pauseOnHover);
      marquee.addEventListener('mouseleave', resumeOnLeave);

      return () => {
        marquee.removeEventListener('mouseenter', pauseOnHover);
        marquee.removeEventListener('mouseleave', resumeOnLeave);
      };
    }
  }, []);

  return (
    <div className="w-full bg-white py-8 overflow-hidden">
      <div 
        ref={marqueeRef}
        className="relative w-full overflow-hidden"
      >
        <div 
          ref={marqueeContentRef}
          className="flex items-center gap-12 w-max"
        >
          {duplicatedLogos.map((logo) => (
            <div 
              key={`${logo.id}-${Math.random()}`}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: '200px' }} // Adjust width as needed
            >
              <div className="relative w-full h-12">
                {/* Replace with your actual logo component */}
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerMarquee;
