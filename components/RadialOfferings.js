"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, PhoneCall, Film, ClipboardCheck, 
  MousePointerClick, FileText, Magnet, 
  Mic, MapPin, Layout
} from "lucide-react";

const offerings = [
  { id: "01", title: "SEO", icon: Search, desc: "Data-driven search optimization to rank higher." },
  { id: "02", title: "Tele-calling", icon: PhoneCall, desc: "Targeted outbound calling for qualified leads." },
  { id: "03", title: "Brand Films", icon: Film, desc: "Cinematic videos that tell your brand's story." },
  { id: "04", title: "Master Plans", icon: ClipboardCheck, desc: "Comprehensive marketing and growth strategies." },
  { id: "05", title: "Digital Ads", icon: MousePointerClick, desc: "High-converting paid campaigns on all platforms." },
  { id: "06", title: "Content", icon: FileText, desc: "Engaging copy and visuals that resonate." },
  { id: "07", title: "Lead Gen", icon: Magnet, desc: "Automated systems to funnel prospects." },
  { id: "08", title: "PR's", icon: Mic, desc: "Strategic public relations and media coverage." },
  { id: "09", title: "Outdoor Ads", icon: MapPin, desc: "Impactful billboards and offline marketing." },
  { id: "10", title: "Web Design", icon: Layout, desc: "Beautiful, high-performance web experiences." },
];

const Hexagon = ({ item, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const clipPolygon = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-[100px] h-[115px] sm:w-[130px] sm:h-[150px] lg:w-[160px] lg:h-[184px] xl:w-[190px] xl:h-[220px] group cursor-pointer hover:z-20"
      style={{ perspective: 1000 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className="w-full h-full relative transition-transform duration-700 ease-out"
        style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)' }}
      >
        {/* Front Face */}
        <div 
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Outer container for glowing border effect */}
          <div 
            className="absolute inset-0 bg-zinc-700/50 transition-colors duration-300 group-hover:bg-red-500 shadow-xl"
            style={{ clipPath: clipPolygon }}
          >
            {/* Inner glassmorphism container */}
            <div 
              className="absolute inset-[1px] sm:inset-[2px] bg-zinc-900/95 backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-center p-2 sm:p-4 gap-1 sm:gap-3 group-hover:bg-zinc-800"
              style={{ clipPath: clipPolygon }}
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 xl:w-16 xl:h-16 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center group-hover:border-red-500/50 group-hover:scale-110 transition-all duration-300 shadow-inner group-hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 xl:w-7 xl:h-7 text-red-500 group-hover:text-red-400 transition-colors" />
              </div>
              <span className="text-center font-black text-[8px] sm:text-[10px] lg:text-xs xl:text-sm text-zinc-300 group-hover:text-white uppercase tracking-widest px-1">
                {item.title}
              </span>
            </div>
          </div>
        </div>

        {/* Back Face (Description) */}
        <div 
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div 
            className="absolute inset-0 bg-red-600 shadow-xl shadow-red-500/50"
            style={{ clipPath: clipPolygon }}
          >
            <div 
              className="absolute inset-[1px] sm:inset-[2px] bg-zinc-900/95 flex flex-col items-center justify-center p-3 sm:p-5 lg:p-6 text-center"
              style={{ clipPath: clipPolygon }}
            >
              <item.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-red-500 mb-1 lg:mb-2 opacity-50" />
              <p className="text-[8px] sm:text-[10px] lg:text-xs text-white font-medium leading-tight sm:leading-relaxed tracking-wide">
                {item.desc}
              </p>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default function RadialOfferings() {
  // To perfectly surround a center logo in a honeycomb with 10 tiles:
  // Row 1: 4 tiles
  // Row 2: 1 tile, LOGO, 1 tile
  // Row 3: 4 tiles
  
  const row1 = offerings.slice(0, 4);
  const row2_left = offerings.slice(4, 5);
  const row2_right = offerings.slice(5, 6);
  const row3 = offerings.slice(6, 10);

  return (
    <div className="w-full flex flex-col justify-center items-center overflow-visible py-8">
      
      {/* Honeycomb Grid - 4-3-4 Symmetric Layout */}
      <div className="flex flex-col items-center">
        
        {/* Row 1: 4 Hexagons */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-10 xl:gap-12">
          {row1.map((item, i) => (
            <Hexagon key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Row 2: 1 Hex, Center Logo, 1 Hex */}
        {/* Less negative top margin increases vertical gap between Row 1 and Row 2 */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-10 xl:gap-12 -mt-[12px] sm:-mt-[20px] lg:-mt-[28px] xl:-mt-[32px]">
          {row2_left.map((item, i) => (
            <Hexagon key={item.id} item={item} index={i + 4} />
          ))}
          
          {/* Center Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center relative mx-1 sm:mx-2"
          >
            <div className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] lg:w-[160px] lg:h-[160px] xl:w-[190px] xl:h-[190px] bg-gradient-to-br from-white to-zinc-200 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.15)] border-4 border-zinc-800 transition-transform duration-500 hover:scale-105">
              <span className="block text-[8px] sm:text-[10px] lg:text-xs xl:text-sm font-black tracking-widest text-zinc-900 text-center leading-tight z-10">
                CHALKS<span className="text-red-500">N</span><br/>BOARD
              </span>
              <div className="absolute inset-0 rounded-full bg-red-500/20 blur-2xl animate-pulse pointer-events-none"></div>
            </div>
          </motion.div>

          {row2_right.map((item, i) => (
            <Hexagon key={item.id} item={item} index={i + 5} />
          ))}
        </div>

        {/* Row 3: 4 Hexagons */}
        {/* Less negative top margin increases vertical gap between Row 2 and Row 3 */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-10 xl:gap-12 -mt-[12px] sm:-mt-[20px] lg:-mt-[28px] xl:-mt-[32px]">
          {row3.map((item, i) => (
            <Hexagon key={item.id} item={item} index={i + 6} />
          ))}
        </div>

      </div>
    </div>
  );
}
