import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Syncopate } from 'next/font/google'

gsap.registerPlugin(ScrollTrigger)

const syncopate = Syncopate({
  weight: ["400","700"],
  variable: "--font-syncopate",
  subsets: ["latin"],
})

export function FirstText() {
  const containerRef = useRef<HTMLDivElement>(null)
  const text1Ref = useRef<HTMLHeadingElement>(null)
  const text2Ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!containerRef.current || !text1Ref.current || !text2Ref.current) return

    // Set initial state
    gsap.set([text1Ref.current, text2Ref.current], {
      opacity: 0,
      y: 50,
    })

    // Create animation with immediate trigger for testing
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse',
        markers: false, // Set to true for debugging
      },
    })

    // Animate text elements
    tl.to(text1Ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
    .to(text2Ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.4')

    // Fallback: make text visible after a delay if scroll trigger doesn't work
    const fallbackTimer = setTimeout(() => {
      gsap.to([text1Ref.current, text2Ref.current], {
        opacity: 1,
        y: 0,
        duration: 0.5,
      })
    }, 1000)

    // Cleanup
    return () => {
      tl.kill()
      clearTimeout(fallbackTimer)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className='w-full h-[540px] p-8 flex flex-col items-center justify-center'>
        <h2 ref={text1Ref} className={`${syncopate.className} text-2xl w-3xl text-center font-bold text-black dark:text-white mb-4`}>
            &ldquo;Are you ready to change the world with us at your service?&rdquo;
        </h2>
        <h2 ref={text2Ref} className={`${syncopate.className} text-2xl w-3xl text-center font-bold text-black dark:text-white`}>
            &ldquo;Watch the showreel below to answer that question.&rdquo;
        </h2>
    </div>
  )
}

export function SecondText() {
  const containerRef = useRef<HTMLDivElement>(null)
  const text1Ref = useRef<HTMLHeadingElement>(null)
  const text2Ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!containerRef.current || !text1Ref.current || !text2Ref.current) return

    // Set initial state
    gsap.set([text1Ref.current, text2Ref.current], {
      opacity: 0,
      y: 50,
    })

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    })

    // Animate text elements
    tl.to(text1Ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
    .to(text2Ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.4')

    // Cleanup
    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className='w-full h-full'>
       <h2 ref={text1Ref} className='text-2xl font-bold text-black dark:text-white'>
            &ldquo;We blend creative designs with emerging technologies on all levels.&rdquo;
        </h2> 
       <h2 ref={text2Ref} className='text-2xl font-bold text-black dark:text-white'>
            &ldquo;Innovation at all costs is our motto.&rdquo;
        </h2>
    </div>
  )
}