"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  { id: "01", title: "Client's Brief", desc: "We start by deeply understanding your goals, audience, and challenges.", color: "bg-card border-border" },
  { id: "02", title: "Brainstorming & Analysis", desc: "Our team dives into data and creative ideation to find the perfect angle.", color: "bg-secondary border-border" },
  { id: "03", title: "Wireframing & Strategy", desc: "We map out the user journey and build a comprehensive execution plan.", color: "bg-card border-border" },
  { id: "04", title: "Implementation", desc: "Our experts bring the strategy to life with precision and creativity.", color: "bg-secondary border-border" },
  { id: "05", title: "Testing & Solution", desc: "Rigorous QA and testing ensure everything performs flawlessly.", color: "bg-card border-border" },
  { id: "06", title: "Project Delivery", desc: "We launch your project and monitor performance for maximum ROI.", color: "bg-primary border-primary text-primary-foreground" },
];

export default function WorkflowSection() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".workflow-card");
    
    // We want the cards to start stacked in the center.
    // By using a timeline with ScrollTrigger scrub, we animate them FROM the center of the viewport
    // TO their natural CSS grid positions.
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%", // How long the scroll scrubbing lasts
        pin: true,
        scrub: 1,
      }
    });

    // Set initial state: all cards stacked in the center, slightly rotated
    cards.forEach((card, index) => {
      // Calculate offset to center of window
      // We'll use a neat trick: we animate FROM a completely stacked absolute position
      tl.from(card, {
        x: () => window.innerWidth / 2 - card.getBoundingClientRect().left - (card.offsetWidth / 2),
        y: () => window.innerHeight / 2 - card.getBoundingClientRect().top - (card.offsetHeight / 2),
        rotation: (Math.random() - 0.5) * 40, // random rotation for messy deck
        scale: 0.5,
        opacity: 0,
        ease: "power2.out",
      }, index * 0.15); // stagger the dealing
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-background text-foreground min-h-screen flex flex-col justify-center py-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">The Process</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Unveiling Our <span className="text-primary">Workflow</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Scroll down to deal the cards and see how we execute projects from start to finish.
          </p>
        </div>

        {/* The Grid where cards will eventually land */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className={`workflow-card p-8 rounded-3xl border ${step.color} shadow-xl flex flex-col relative overflow-hidden`}
            >
              <div className="text-5xl font-black text-foreground/10 absolute top-4 right-6">
                {step.id}
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-8 relative z-10">{step.title}</h3>
              <p className={`relative z-10 ${step.id === "06" ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}