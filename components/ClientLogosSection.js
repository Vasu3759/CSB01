"use client";

import Image from "next/image";

const clients = [
  { id: 1, image: "/images/8.png", name: "Samarth Assisted Living" },
  { id: 2, image: "/images/9.png", name: "G.D. Goenka Public School" },
  { id: 3, image: "/images/10.png", name: "Swiss Cottage School" },
  { id: 4, image: "/images/11.png", name: "Jay Kay Public School" },
  { id: 5, image: "/images/13.png", name: "FirstCry Intellitots" },
  { id: 6, image: "/images/14.png", name: "Delhi Public School" },
  { id: 7, image: "/images/15.png", name: "Delhi Public World School" },
  { id: 8, image: "/images/16.png", name: "Academic Height" },
  { id: 9, image: "/images/17.png", name: "Manav Bharati Int." },
  { id: 10, image: "/images/18.png", name: "Seth Mr. Jaipuria School" },
  { id: 11, image: "/images/19.png", name: "Flower Valley Int." },
  { id: 12, image: "/images/20.png", name: "Birla Open Minds" },
  { id: 13, image: "/images/21.png", name: "Stanfort School" },
  { id: 14, image: "/images/22.png", name: "The Shri Ram Wonder Years" },
  { id: 15, image: "/images/23.png", name: "Seven Hills, Etawah" },
  { id: 16, image: "/images/24.png", name: "Kaushik Public School" },
];

export default function ClientLogosSection() {
  // Split clients into two rows
  const row1 = clients.slice(0, 8);
  const row2 = clients.slice(8, 16);

  // Duplicate items to ensure a seamless infinite scrolling loop
  const dupRow1 = [...row1, ...row1, ...row1];
  const dupRow2 = [...row2, ...row2, ...row2];

  return (
    <section className="bg-background py-16 md:py-24 relative overflow-hidden border-t border-border/10">
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10 mb-12">
        <div className="text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block animate-pulse">
            Our Partnerships
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
            Our <span className="text-red-600 italic">Esteemed</span> Clients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg">
            We collaborate with leading institutions and visionary brands to craft digital experiences that drive growth and engagement.
          </p>
        </div>
      </div>

      {/* Dual Infinite Marquee Container */}
      <div className="relative flex flex-col gap-6 overflow-hidden group">
        
        {/* Subtle Edge Gradients to blend into background */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scrolling Left */}
        <div className="py-2 animate-marquee whitespace-nowrap flex items-center w-max group-hover:[animation-play-state:paused]">
          {dupRow1.map((client, index) => (
            <div 
              key={`row1-${client.id}-${index}`}
              className="mx-3 md:mx-4 w-40 md:w-56 h-24 md:h-32 bg-card rounded-2xl border border-border/50 flex items-center justify-center p-4 cursor-pointer transform hover:-translate-y-2 hover:shadow-md transition-all duration-300 group/card"
              title={client.name}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-contain group-hover/card:scale-105 transition-transform duration-300"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="py-2 animate-marquee-reverse whitespace-nowrap flex items-center w-max group-hover:[animation-play-state:paused]">
          {dupRow2.map((client, index) => (
            <div 
              key={`row2-${client.id}-${index}`}
              className="mx-3 md:mx-4 w-40 md:w-56 h-24 md:h-32 bg-card rounded-2xl border border-border/50 flex items-center justify-center p-4 cursor-pointer transform hover:-translate-y-2 hover:shadow-md transition-all duration-300 group/card"
              title={client.name}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-contain group-hover/card:scale-105 transition-transform duration-300"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33333%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33333%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}} />
    </section>
  );
}
