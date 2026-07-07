"use client"

import { useRef } from "react";
import { TrendingUp, Target, Users } from "lucide-react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AdditionalServiceCardsSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const handleMouseMove = (e) => {
    cardsRef.current.forEach((card) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  };

  return (
    <section 
      ref={sectionRef} 
      onMouseMove={handleMouseMove}
      className="bg-background py-16 lg:py-24 border-t border-border/50 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 [perspective:1000px]">
          
          {/* Omnichannel Strategy */}
          <div 
            ref={el => cardsRef.current[0] = el}
            className="crazy-card-2 group relative bg-card rounded-3xl p-8 lg:p-10 text-center border border-border/50 overflow-hidden transition-all duration-500 hover:-tranzinc-y-4 hover:shadow-[0_20px_40px_rgba(239,68,68,0.2)]"
          >
            {/* Glowing Spotlight Effect */}
            <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100" 
                 style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(239,68,68,0.15), transparent 40%)' }} />
                 
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Omnichannel Strategy</h3>
              <p className="text-muted-foreground mb-8">Command attention everywhere. We craft unified marketing offensives that dominate every touchpoint.</p>
              <button className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center gap-2">
                Explore Strategy
                <svg className="w-4 h-4 group-hover:tranzinc-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          {/* Conversion Optimization */}
          <div 
            ref={el => cardsRef.current[1] = el}
            className="crazy-card-2 group relative bg-card rounded-3xl p-8 lg:p-10 text-center border border-border/50 overflow-hidden transition-all duration-500 hover:-tranzinc-y-4 hover:shadow-[0_20px_40px_rgba(239,68,68,0.2)]"
          >
            {/* Glowing Spotlight Effect */}
            <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100" 
                 style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(239,68,68,0.15), transparent 40%)' }} />
                 
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Conversion Optimization</h3>
              <p className="text-muted-foreground mb-8">Traffic means nothing without action. We ruthlessly optimize your funnels to convert clicks into clients.</p>
              <button className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center gap-2">
                Explore Strategy
                <svg className="w-4 h-4 group-hover:tranzinc-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          {/* Enrollment Scaling */}
          <div 
            ref={el => cardsRef.current[2] = el}
            className="crazy-card-2 group relative bg-card rounded-3xl p-8 lg:p-10 text-center border border-border/50 overflow-hidden transition-all duration-500 hover:-tranzinc-y-4 hover:shadow-[0_20px_40px_rgba(239,68,68,0.2)]"
          >
            {/* Glowing Spotlight Effect */}
            <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100" 
                 style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(239,68,68,0.15), transparent 40%)' }} />
                 
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Enrollment Scaling</h3>
              <p className="text-muted-foreground mb-8">Eliminate empty seats. We design end-to-end admission systems that consistently hit target capacities.</p>
              <button className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center gap-2">
                Explore Strategy
                <svg className="w-4 h-4 group-hover:tranzinc-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
