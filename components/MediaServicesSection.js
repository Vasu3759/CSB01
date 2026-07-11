"use client"

import { useState, useEffect } from "react"
import { FaMeta, FaYoutube } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"

function StatCounter({ endValue, label, suffix = "+", isHovered }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isHovered) {
      let animationFrame;
      const duration = 1200; // 1.2 seconds fast animation
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // cubic ease-out
        setCount(Math.floor(easeProgress * endValue));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    } else {
      setCount(0);
    }
  }, [isHovered, endValue]);

  return (
    <div className="mt-6 pt-6 border-t border-gray-100 dark:border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-1">Our Results</div>
      <div className="text-3xl font-black text-red-500 flex items-center justify-center">
        <span>{count.toLocaleString('en-IN')}</span>
        <span>{suffix}</span>
      </div>
      <div className="text-sm font-medium text-gray-600 dark:text-zinc-300 mt-1">{label}</div>
    </div>
  );
}

export default function MediaServicesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="bg-gray-100 dark:bg-background py-16 lg:py-20 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Meta (Facebook/Instagram) */}
          <div 
            className="group bg-white dark:bg-card rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent dark:border-border hover:-translate-y-2 cursor-pointer"
            onMouseEnter={() => setHoveredCard('meta')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="w-16 h-16 bg-blue-600 dark:bg-blue-700 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaMeta className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-4">META</h3>
            <p className="text-gray-600 dark:text-muted-foreground mb-4 text-sm lg:text-base">
              Reach your audience on Facebook and Instagram with targeted ads, creative campaigns, and lead generation solutions powered by Meta's advanced platform.
            </p>
            <StatCounter endValue={100000} label="Leads Generated" isHovered={hoveredCard === 'meta'} />
          </div>

          {/* Google */}
          <div 
            className="group bg-white dark:bg-card rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent dark:border-border hover:-translate-y-2 cursor-pointer"
            onMouseEnter={() => setHoveredCard('google')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="w-16 h-16 bg-white dark:bg-zinc-800 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100 dark:border-zinc-700 group-hover:scale-110 transition-transform duration-300">
              <FcGoogle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-4">GOOGLE</h3>
            <p className="text-gray-600 dark:text-muted-foreground mb-4 text-sm lg:text-base">
              Leverage Google Search, Display, and GMB to maximize your brand's visibility and drive high-intent traffic with data-driven ad strategies.
            </p>
            <StatCounter endValue={100000} label="High-Intent Clicks" isHovered={hoveredCard === 'google'} />
          </div>

          {/* YouTube */}
          <div 
            className="group bg-white dark:bg-card rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent dark:border-border hover:-translate-y-2 cursor-pointer"
            onMouseEnter={() => setHoveredCard('youtube')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="w-16 h-16 bg-red-600 dark:bg-red-700 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaYoutube className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-4">YOUTUBE</h3>
            <p className="text-gray-600 dark:text-muted-foreground mb-4 text-sm lg:text-base">
              Engage your audience with impactful video ads on YouTube, the world's largest video platform, and boost your brand's reach and awareness.
            </p>
            <StatCounter endValue={100000} label="Video Views" isHovered={hoveredCard === 'youtube'} />
          </div>

        </div>
      </div>
    </section>
  )
}
