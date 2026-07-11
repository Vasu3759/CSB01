"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const reviews = [
  { image: "/images/8.png", name: "Samarth Assisted Living", text: "The brand film created by Chalksnboard captured the essence of our facility beautifully. It's now the face of our digital outreach—emotional, authentic, and professional." },
  { image: "/images/9.png", name: "G.D. Goenka Public School, Patna", text: "Chalksnboard's team handled our shoot with precision and creativity. The brand film is now a central piece in our marketing—it speaks volumes to both parents and students." },
  { image: "/images/10.png", name: "Swiss Cottage School", text: "Chalksnboard delivered on every front—brilliant video storytelling, lead generation that works, engaging social content, and dedicated tele-counsellors who followed up with care." },
  { image: "/images/11.png", name: "Jay Kay Public School", text: "Their lead generation campaigns brought us closer to our enrollment targets with minimal effort from our end. Truly a hands-off yet high-return experience!" },
  { image: "/images/13.png", name: "FirstCry Intellitots Preschool & Daycare", text: "Chalksnboard's lead generation boosted our preschool admissions significantly. The inquiries were high-quality and well-targeted. Their approach was smart, efficient, and results-driven." },
  { image: "/images/14.png", name: "Delhi Public School,Kurukshetra", text: "Every service Chalksnboard offers complemented the other perfectly—from a professional brand film to strong digital engagement and high-quality tele-counselling. We've renewed for another year!" },
  { image: "/images/15.png", name: "Delhi Public World School", text: "We saw consistent, high-quality leads from day one. Chalksnboard's campaign was data-driven, targeted, and delivered measurable results.!" },
  { image: "/images/16.png", name: "Academic Height World School", text: "The digital makeover we received from Chalksnboard changed how parents perceive us. Their social content and branding are both polished and impactful, and the leads just keep coming." },
];

const ReviewSection = () => {
  const controls = useAnimation();
  const carouselRef = useRef(null);

  useEffect(() => {
    const totalWidth = carouselRef.current.scrollWidth / 2;
    const animate = async () => {
      await controls.start({
        x: -totalWidth,
        transition: { duration: 80, ease: "linear" },
      });
      controls.set({ x: 0 });
      animate();
    };
    animate();
  }, [controls]);

  return (
    <section className="relative min-h-[80vh] bg-[#09090b] py-24 overflow-hidden">
      
      {/* Elegant Ambient Glows (Grayscale Effect) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-zinc-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gray-400/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-20 relative">
          <span className="text-zinc-400 font-medium tracking-widest uppercase text-sm mb-4 block">
            Impact & Growth
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">Visionaries</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            See how we've helped institutions and brands engineer predictable growth through elegant digital solutions.
          </p>
        </div>

        <div className="w-full max-w-[95vw] mx-auto overflow-hidden relative">
          
          {/* Smooth edge fades for the marquee */}
          <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-[#09090b] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-[#09090b] to-transparent z-20 pointer-events-none" />

          <motion.div className="flex items-center gap-8 py-4" ref={carouselRef} animate={controls}>
            {[...reviews, ...reviews, ...reviews].map((review, idx) => (
              <div
                key={idx}
                className="relative w-[400px] flex-shrink-0 bg-white/[0.02] backdrop-blur-2xl p-8 rounded-3xl border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 hover:-tranzinc-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)] group"
              >
                {/* Subtle top inner highlight */}
                <div className="absolute top-0 left-1/2 -tranzinc-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                <div className="flex items-center gap-5 mb-8">
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-full p-[2px] bg-gradient-to-b from-white/10 to-white/5 shadow-inner">
                    <Image
                      src={review.image}
                      alt={review.name || "Review"}
                      width={64}
                      height={64}
                      className="rounded-full w-full h-full object-cover bg-[#09090b] border border-zinc-800"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white tracking-wide mb-1 leading-snug">
                      {review.name}
                    </h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 text-zinc-400 fill-current opacity-80" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-zinc-400/90 text-[15px] leading-relaxed font-light relative">
                  <p className="line-clamp-4">"{review.text}"</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection; 