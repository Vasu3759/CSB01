"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Leaf, Sprout, Trees, TreePine, Droplet, TreeDeciduous } from "lucide-react";

const milestones = [
  { year: "2008", title: "Company Founded", description: "Planted the seed as a small digital agency in Delhi", icon: Droplet, size: 40 },
  { year: "2012", title: "First 50 Clients", description: "Sprouting roots and reaching our first major milestone", icon: Sprout, size: 80 },
  { year: "2015", title: "International Expansion", description: "Branching out to the US, UK, Canada, and UAE", icon: Leaf, size: 120 },
  { year: "2018", title: "Smart Integration", description: "Growing stronger as India's first agency to use smart automation", icon: TreePine, size: 160 },
  { year: "2020", title: "1000+ Projects", description: "A solid trunk supporting over 1000 successful projects", icon: TreeDeciduous, size: 220 },
  { year: "2024", title: "Industry Leader", description: "A massive canopy recognized as the top marketing agency in India", icon: Trees, size: 300 },
];

const MilestoneCard = ({ milestone, index, setActiveIndex }) => {
  const ref = useRef(null);
  // Detect when this card is near the vertical center of the screen
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  return (
    <div ref={ref} className="min-h-[80vh] flex flex-col justify-center py-10 relative">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-10%" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className={`bg-zinc-800/40 backdrop-blur-xl border-l-4 ${isInView ? 'border-red-500 bg-zinc-800/80 shadow-[0_0_30px_rgba(239,68,68,0.2)] scale-[1.02]' : 'border-zinc-700 opacity-60 scale-100'} rounded-r-3xl p-8 md:p-12 transition-all duration-500`}
      >
        <div className="inline-block bg-zinc-900/80 border border-zinc-700 px-5 py-2 rounded-full text-red-500 font-black text-2xl mb-6 shadow-inner">
          {milestone.year}
        </div>
        <h4 className="text-white font-black text-3xl md:text-4xl mb-4 tracking-wide">{milestone.title}</h4>
        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">{milestone.description}</p>
      </motion.div>
    </div>
  );
};

export default function TreeJourneyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const ActiveIcon = milestones[activeIndex].icon;
  const activeSize = milestones[activeIndex].size;

  return (
    <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row py-10 px-4 lg:px-8">
      
      {/* Left Side: The Sticky Evolving Tree */}
      <div className="w-full md:w-[45%] lg:w-[40%] hidden md:block">
        <div className="sticky top-24 h-[calc(100vh-8rem)] flex flex-col items-center justify-center pl-4">
          
          <div className="w-full flex flex-col items-center">


            {/* Glowing Graphic Container */}
            <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-[3rem] border border-zinc-700 shadow-2xl overflow-hidden">
              
              {/* Pulsing ambient glow tied to growth */}
              <div 
                className="absolute inset-0 bg-red-500/20 blur-[80px] rounded-full transition-transform duration-1000 ease-in-out"
                style={{ transform: `scale(${0.5 + activeIndex * 0.2})` }}
              ></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.5, y: -50 }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                  className="relative z-10 flex flex-col items-center justify-center"
                >
                  <ActiveIcon 
                    className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)] transition-all duration-700"
                    style={{ width: activeSize, height: activeSize }} 
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* Right Side: The Scrolling Text Timeline */}
      <div className="w-full md:w-[55%] lg:w-[60%] relative z-10">
        {/* Subtle timeline track line */}
        <div className="absolute left-0 top-[10vh] bottom-[10vh] w-[2px] bg-gradient-to-b from-transparent via-zinc-700 to-transparent z-0 hidden md:block"></div>
        
        {milestones.map((milestone, index) => (
          <MilestoneCard 
            key={index} 
            milestone={milestone} 
            index={index} 
            setActiveIndex={setActiveIndex} 
          />
        ))}
        
        {/* Spacing block so the last card can scroll into the center */}
        <div className="h-[30vh]"></div>
      </div>

      {/* Mobile Evolving Tree */}
      <div className="md:hidden sticky top-20 z-30 w-full mb-10 pt-4 bg-zinc-900/80 backdrop-blur-md">
        <div className="w-full h-32 bg-zinc-800/90 border border-zinc-700 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden relative">
           <div className="absolute inset-0 bg-red-500/10 blur-xl"></div>
           <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.5 }}
                transition={{ duration: 0.4 }}
              >
                <ActiveIcon 
                  className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                  style={{ width: activeSize * 0.4 > 30 ? activeSize * 0.4 : 30, height: activeSize * 0.4 > 30 ? activeSize * 0.4 : 30 }} 
                />
              </motion.div>
            </AnimatePresence>
        </div>
      </div>

    </div>
  );
}
