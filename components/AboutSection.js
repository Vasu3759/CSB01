"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

const slides = [
  {
    title: "Objective Perspective",
    text: `At Chalksnboard, we provide an external, objective perspective that opens your eyes to opportunities you may have never considered. With our experience working with companies across various industries and locations, we have a clear understanding of what strategies drive success—and which ones might be holding you back.`,
    image: "/images/objective_perspective_pin.jpg",
  },
  {
    title: "Creative Approach",
    text: `What sets us apart is our creative approach. We believe that success lies in doing things strategically, not just differently. By simplifying complex challenges and delivering marketing solutions that are efficient, pleasant, and results-driven, we ensure that our clients achieve measurable growth.`,
    image: "/images/creative_approach_pin.jpg",
  },
  {
    title: "Let Us Lighten Your Load",
    text: `Let us lighten your load. Our team can step in to handle every aspect of your marketing, freeing you to focus on what you do best. While we take care of your marketing, you can concentrate on managing your business with peace of mind.`,
    image: "/images/lighten_your_load_pin.jpg",
  },
];

export default function AboutSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section id="about" className="relative pt-12 md:pt-16 pb-24 md:pb-32 bg-background overflow-hidden border-t border-border/50">
      
      {/* Premium Background Atmosphere */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 translate-x-1/4" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground drop-shadow-xl">
            Our <span className="text-primary italic">Approach</span>
          </h2>
        </div>

        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          
          {/* Left Side: Interactive Premium Tabs */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            {slides.map((slide, idx) => {
              const isActive = activeSlide === idx;
              return (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveSlide(idx)}
                  className={`relative cursor-pointer p-8 rounded-[2rem] border transition-all duration-500 overflow-hidden group ${
                    isActive 
                      ? 'bg-card/90 border-primary/50 shadow-[0_10px_50px_-12px_rgba(239,68,68,0.25)] scale-[1.02]' 
                      : 'bg-background/40 border-border/30 hover:border-border hover:bg-card/40 opacity-70 hover:opacity-100'
                  }`}
                >
                  {/* Large Watermark Number */}
                  <div className={`absolute -right-4 -top-8 text-[120px] font-black leading-none transition-all duration-700 pointer-events-none ${isActive ? 'text-primary/20 scale-100' : 'text-primary/5 scale-75 group-hover:text-primary/10'}`}>
                    0{idx + 1}
                  </div>

                  {/* Active Gradient Border Effect */}
                  {isActive && (
                    <motion.div 
                      layoutId="active-border"
                      className="absolute inset-0 border-[3px] border-primary/60 rounded-[2rem] pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      {/* Active Indicator Line */}
                      <div className={`h-1 rounded-full transition-all duration-500 ${isActive ? 'w-12 bg-primary' : 'w-0 bg-transparent'}`} />
                      <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${isActive ? 'text-foreground' : 'text-foreground/70 group-hover:text-foreground'}`}>
                        {slide.title}
                      </h3>
                    </div>
                    
                    <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-lg pt-2 pr-8">
                          {slide.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Dynamic 3D Image Viewer */}
          <div className="lg:col-span-6 relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] z-20">
            <Tilt 
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              transitionSpeed={1000}
              scale={1.02}
              className="w-full h-full rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl bg-card/20 relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={slides[activeSlide].image} 
                    alt={slides[activeSlide].title} 
                    fill 
                    className="object-cover"
                    priority
                  />
                  {/* Subtle Inner Gradients for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-primary/10 mix-blend-overlay pointer-events-none" />
                </motion.div>
              </AnimatePresence>
              
            </Tilt>
          </div>

        </div>
      </div>
    </section>
  );
}

