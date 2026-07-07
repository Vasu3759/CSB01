"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const icons = [
  // Lightbulb (Creative)
  <svg key="creative" width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="none"/><path d="M32 10a14 14 0 0 0-7 26.2V40a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3.8A14 14 0 0 0 32 10Zm5 28.2V40a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-1.8A12 12 0 1 1 37 38.2Z" fill="#fff"/><rect x="27" y="44" width="10" height="4" rx="2" fill="#fff"/></svg>,
  // Code (Development)
  <svg key="dev" width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="none"/><polyline points="26 24 18 32 26 40" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/><polyline points="38 24 46 32 38 40" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>,
  // Bar chart (Conversion)
  <svg key="conversion" width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="none"/><rect x="18" y="34" width="6" height="12" rx="2" fill="#fff"/><rect x="28" y="26" width="6" height="20" rx="2" fill="#fff"/><rect x="38" y="18" width="6" height="28" rx="2" fill="#fff"/><polyline points="18 46 32 32 44 38" stroke="#fff" strokeWidth="3" fill="none"/></svg>,
  // Engagement (faces in grid)
  <svg key="engagement" width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="none"/><rect x="16" y="16" width="12" height="12" rx="3" fill="#fff"/><rect x="36" y="16" width="12" height="12" rx="3" fill="#fff"/><rect x="16" y="36" width="12" height="12" rx="3" fill="#fff"/><rect x="36" y="36" width="12" height="12" rx="3" fill="#fff"/><circle cx="22" cy="22" r="2" fill="#FF6600"/><circle cx="42" cy="22" r="2" fill="#FF6600"/><circle cx="22" cy="42" r="2" fill="#FF6600"/><circle cx="42" cy="42" r="2" fill="#FF6600"/></svg>,
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export default function ServicesSection() {
  const [lottieReady, setLottieReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.customElements?.get('dotlottie-player')) {
      const script = document.createElement('script');
      script.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.js";
      script.async = true;
      script.onload = () => setLottieReady(true);
      document.body.appendChild(script);
    } else if (typeof window !== 'undefined') {
      setLottieReady(true);
    }
  }, []);

  return (
    <>
      <section id="services" className="relative overflow-hidden pt-40 lg:pt-60 pb-64 lg:pb-72 bg-gradient-to-b from-red-500 to-red-700">
        {/* Curved SVG top edge */}
        <svg viewBox="0 0 1440 200" className="absolute top-0 left-0 w-full h-[140px] lg:h-[200px]" preserveAspectRatio="none">
          <path fill="#fff" d="M0,128L48,138.7C96,149,192,171,288,181.3C384,192,480,192,576,181.3C672,171,768,149,864,149.3C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
        
        <div className="container mx-auto px-4 lg:px-6 relative top-20 z-10">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16"
          >
            {[
              { label: "CREATIVE", desc: "Crafting beautiful brand identities and marketing materials that resonate." },
              { label: "DEVELOPMENT", desc: "Building robust, scalable digital products and web experiences." },
              { label: "CONVERSION", desc: "Data-driven strategies to turn visitors into loyal customers." },
              { label: "ENGAGEMENT", desc: "Creating content that captures attention and drives interactions." },
            ].map((item, i) => (
              <motion.div key={item.label} variants={cardVariants} className="h-full">
                <Tilt 
                  tiltMaxAngleX={15} 
                  tiltMaxAngleY={15} 
                  perspective={1000} 
                  scale={1.05} 
                  transitionSpeed={2000}
                  gyroscope={true}
                  className="h-full"
                >
                  <div className="h-full flex flex-col items-center text-white bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-white/15 transition-colors magnetic-target cursor-pointer group">
                    <div className="mb-6 flex items-center justify-center h-24 w-24 bg-white/10 rounded-full border border-white/30 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                      {item.label === "DEVELOPMENT" ? (
                        lottieReady && (
                          <dotlottie-player
                            src="https://lottie.host/a825eb7e-f0c8-48dd-970b-fa5d4db6c9af/uZSvNhpQss.json"
                            background="transparent"
                            speed="1"
                            loop
                            autoplay
                            style={{ width: '64px', height: '64px' }}
                          ></dotlottie-player>
                        )
                      ) : (
                        <div className="group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all">
                          {icons[i]}
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl lg:text-2xl font-black tracking-wide text-center mb-3">
                      {item.label}
                    </h3>
                    <p className="text-center text-white/80 text-sm font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Elevated card at the bottom for the title and subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
          className="absolute left-0 bottom-0 w-full flex justify-center tranzinc-y-8 md:tranzinc-y-0 z-20"
        >
          <div className="text-white rounded-t-3xl md:rounded-xl px-6 py-8 md:py-10 max-w-3xl w-full mx-auto text-center border-t border-x md:border border-white/20 bg-gradient-to-b from-red-500 to-red-700" style={{
            boxShadow: "0 -10px 40px 0 rgba(0,0,0,0.25), inset 0 2px 5px rgba(255,255,255,0.3)"
          }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 drop-shadow-md">
              Chalks<span className="text-yellow-300 font-black">n</span>board Delivered <span className="font-black">Brilliance</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white/90">
              Blending Innovation & Execution Seamlessly
            </p>
          </div>
        </motion.div>
      </section>
    </>
  )
}
