"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Facebook, Instagram, Youtube, Twitter, Linkedin, ArrowRight } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

export default function HeroSection() {
  const containerRef = useRef(null);

  const scrollToContact = () => {
    window.location.href = "/contact";
  };

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.6 })
      .from(".hero-title", { y: 30, opacity: 0, duration: 0.8 }, "-=0.4")
      .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.6 }, "-=0.6")
      .from(".hero-text", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
      .from(".hero-buttons", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");
  }, { scope: containerRef });

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative bg-background text-foreground min-h-screen overflow-hidden flex items-center justify-center pt-36"
    >
      {/* Video Background (Optional - might want to remove if going pure minimalist, but keeping for now) */}
      <div className="absolute inset-0 w-full h-full z-0 min-h-screen">
        <video
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -tranzinc-x-1/2 -tranzinc-y-1/2 object-cover opacity-10 grayscale"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/Technology Background Video Loop For Website.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 z-10 bg-background/80 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 text-center relative z-20 max-w-5xl">
        <div className="space-y-6">
          <div className="inline-block mb-8 -mt-6 hero-badge">
            <span className="px-6 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-base md:text-lg font-bold tracking-widest uppercase shadow-lg shadow-primary/10 backdrop-blur-md">
              Welcome to Chalksnboard
            </span>
          </div>

          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-2xl">
            Boost School Admissions with <br className="hidden md:block" />
            <span className="text-primary">
              360° Marketing That Delivers
            </span>
          </h1>

          <h2 className="hero-subtitle text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-4 max-w-3xl mx-auto drop-shadow-lg">
            Let Our Agency Drive Your Admissions Success
          </h2>

          <p className="hero-text text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Since 2020, we have been delivering results that fill schools and drive measurable return on investment through comprehensive digital strategies.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <MagneticButton
              onClick={scrollToContact}
              className="group relative flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] w-full sm:w-auto overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 pointer-events-none">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:tranzinc-x-1 transition-transform" />
              </span>
            </MagneticButton>
            <MagneticButton
              onClick={() => {
                document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 w-full sm:w-auto"
            >
              Explore Services
            </MagneticButton>
          </div>

          <div className="hero-socials flex items-center justify-center mt-12">
            <div className="flex items-center justify-center gap-4 sm:gap-6 px-6 py-3">
              {[
                { icon: Facebook, href: "https://www.facebook.com/ChalksnBoard/" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/chalksnboard/" },
                { icon: Instagram, href: "https://www.instagram.com/chalksnboard_official/" },
                { icon: Youtube, href: "https://www.youtube.com/@chalksnboard" },
                { icon: Twitter, href: "https://x.com/chalksnboard" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-tranzinc-y-1 shadow-[0_0_10px_rgba(239,68,68,0.15)] hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Ambient Elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-700 pointer-events-none"></div>
      </div>

      {/* Bottom Gradient Fade to match next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
