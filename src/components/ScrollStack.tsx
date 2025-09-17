import React, { ReactNode, useEffect, useRef, useState, useCallback } from 'react';
import Lenis from 'lenis';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
  index?: number;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ 
  children, 
  itemClassName = '', 
  index = 0
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!itemRef.current) return;
      
      const rect = itemRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when card enters and exits the stacking zone
      const stackStart = windowHeight * 0.3; // Start stacking at 30% from top
      const stackEnd = windowHeight * 0.7;   // End stacking at 70% from top
      
      if (rect.top <= stackEnd && rect.bottom >= stackStart) {
        setIsVisible(true);
        
        // Calculate progress within the stacking zone
        const progress = Math.max(0, Math.min(1, 
          (stackEnd - rect.top) / (stackEnd - stackStart)
        ));
        setScrollProgress(progress);
      } else {
        setIsVisible(false);
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate transform values based on scroll progress and index
  const calculateTransform = () => {
    if (!isVisible) return { translateY: 0, scale: 1, opacity: 1, zIndex: 10 };
    
    const maxTranslate = 100; // Maximum translateY in pixels
    const minScale = 0.8;     // Minimum scale
    const maxBlur = 2;        // Maximum blur effect
    
    // Cards stack behind each other based on index
    const stackOffset = index * 20; // Each card is 20px behind the previous
    const translateY = scrollProgress * (maxTranslate + stackOffset);
    const scale = minScale + (1 - minScale) * (1 - scrollProgress * 0.3);
    const opacity = 0.3 + 0.7 * (1 - scrollProgress * 0.5);
    const blur = scrollProgress * maxBlur;
    const zIndex = 10 - index; // Higher index cards appear on top
    
    return { translateY, scale, opacity, zIndex, blur };
  };

  const transform = calculateTransform();

  return (
    <div
      ref={itemRef}
      className="scroll-stack-card absolute left-0 right-0 mx-6 md:mx-12"
      style={{
        transform: `translateY(${transform.translateY}px) scale(${transform.scale})`,
        opacity: transform.opacity,
        filter: `blur(${transform.blur}px)`,
        zIndex: transform.zIndex,
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
        transformOrigin: 'top center',
        transition: 'transform 0.1s ease-out, opacity 0.1s ease-out, filter 0.1s ease-out'
      }}
    >
      <div className={`relative w-full h-96 p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] ${itemClassName}`.trim()}>
        {children}
      </div>
    </div>
  );
};

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = ''
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [childrenArray, setChildrenArray] = useState<ReactNode[]>([]);
  
  useEffect(() => {
    // Convert children to array
    const childrenArray = React.Children.toArray(children);
    setChildrenArray(childrenArray);
  }, [children]);
  
  const setupLenis = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075
      });

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      lenisRef.current = lenis;
    } catch (error) {
      console.warn('Lenis initialization failed:', error);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    setupLenis();
    
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, [setupLenis]);

  return (
    <div
      className={`relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim()}
      ref={scrollerRef}
      style={{
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        scrollBehavior: 'smooth',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        willChange: 'scroll-position'
      }}
    >
      <div className="scroll-stack-inner pt-[50vh] px-0 pb-[50rem] min-h-screen relative">
        <div className="max-w-6xl mx-auto relative">
          {childrenArray.map((child, index) => (
            <ScrollStackItem 
              key={index} 
              index={index}
            >
              {child}
            </ScrollStackItem>
          ))}
        </div>
        {/* Spacer so the last pin can release cleanly */}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;
