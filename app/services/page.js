"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Monitor, Smartphone, BookOpen, Mail, Target, Globe, Star } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ThemeProvider } from "@/components/theme-provider";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import VantaMinimalBackground from "@/components/VantaMinimalBackground";

const AdmissionStrategyIcon = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 7.5L12 3L22 7.5L12 12L2 7.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M6 10.5V15.5C6 17.1569 8.68629 18.5 12 18.5C15.3137 18.5 18 17.1569 18 15.5V10.5" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 12V18.5" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const services = [
  {
    title: "SEO (Search Engine Optimization)",
    description: "Improve your website's visibility on search engines and attract more organic traffic with our comprehensive SEO strategies, including keyword research, on-page optimization, and link building.",
  },
  {
    title: "UI/UX Design",
    description: "Enhance user satisfaction and engagement with intuitive, visually appealing, and user-centric UI/UX design tailored to your brand and audience.",
  },
  {
    title: "Mobile App Development",
    description: "Build robust, scalable, and user-friendly mobile applications for iOS and Android platforms to expand your digital reach and improve customer engagement.",
  },
  {
    title: "Content Marketing",
    description: "Drive brand awareness and customer loyalty through high-quality, relevant, and engaging content that resonates with your target audience.",
  },
  {
    title: "Email Marketing",
    description: "Reach your audience directly with personalized email campaigns designed to nurture leads, increase conversions, and retain customers.",
  },
  {
    title: "Admission Strategy",
    description: "We craft compelling brand films that highlight a school's unique strengths and create a lasting impact. Through engaging storytelling and visuals, we build an emotional connection with prospective students and parents.",
  },
  {
    title: "Dynamic Website Development",
    description: "Get a fast, secure, and scalable website tailored to your business needs. Our dynamic websites are built for performance, easy content management, and seamless user experience.",
  },
  {
    title: "Review & Reputation Management",
    description: "Build trust and credibility for your brand with proactive review and reputation management. We help you monitor, respond, and improve your online presence.",
  },
];

const serviceIcons = {
  "SEO (Search Engine Optimization)": <Search className="w-10 h-10 text-emerald-500" />,
  "UI/UX Design": <Monitor className="w-10 h-10 text-pink-500" />,
  "Mobile App Development": <Smartphone className="w-10 h-10 text-indigo-500" />,
  "Content Marketing": <BookOpen className="w-10 h-10 text-amber-500" />,
  "Email Marketing": <Mail className="w-10 h-10 text-cyan-500" />,
  "PPC & Paid Ads": <Target className="w-10 h-10 text-primary" />,
  "Admission Strategy": <div className="text-rose-500">{AdmissionStrategyIcon}</div>,
  "Dynamic Website Development": <Globe className="w-10 h-10 text-teal-500" />,
  "Review & Reputation Management": <Star className="w-10 h-10 text-yellow-400" />,
};

const serviceFeatures = {
  "SEO (Search Engine Optimization)": ["Keyword Research", "On-Page Optimization", "Technical SEO Audit", "Link Building"],
  "UI/UX Design": ["User Research", "Wireframing & Prototyping", "Visual Design", "Interaction Design"],
  "Mobile App Development": ["iOS & Android Apps", "Cross-Platform Solutions", "App Store Deployment", "UI/UX for Mobile"],
  "Content Marketing": ["Content Strategy", "Blog & Article Writing", "Infographics", "Video Content"],
  "Email Marketing": ["Campaign Strategy", "Personalized Emails", "Automation", "A/B Testing"],
  "PPC & Paid Ads": ["Google Ads", "Facebook & Instagram Ads", "Campaign Setup", "Audience Targeting"],
  "Dynamic Website Development": ["Responsive Design", "CMS Integration", "SEO Optimization", "Custom Features"],
  "Review & Reputation Management": ["Review Monitoring", "Response Management", "Reputation Repair", "Platform Integration"],
};

const features = [
  { title: 'Students', description: 'Learn from favorite teachers, just like classrooms.' },
  { title: 'Teachers', description: 'Reach any student without a physical classroom.' },
  { title: 'Corporates', description: 'Hassle free inductions & library for trainings.' },
  { title: 'Institutes', description: 'Onboard students outside classes for guidance.' },
  { title: 'Live Classes', description: 'Raise hand in live class. Solved personalized.' },
  { title: 'Analytics', description: 'Know topics where ahead. Details of weaknesses.' },
  { title: 'Courses', description: 'Get proper feed on your hunger for knowledge.' },
  { title: 'Notified', description: 'Never miss any session or event happening.' },
];

function Tech() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [radius, setRadius] = React.useState(180);
  const [cardSize, setCardSize] = React.useState(70);
  const total = features.length;

  React.useEffect(() => {
      const interval = setInterval(() => {
          setActiveIndex((prev) => (prev + 1) % total);
      }, 4000);
      return () => clearInterval(interval);
  }, [total]);

  React.useEffect(() => {
      const updateSizes = () => {
          const width = window.innerWidth;
          if (width >= 1440) { setRadius(260); setCardSize(90); } 
          else if (width >= 1024) { setRadius(220); setCardSize(80); } 
          else if (width >= 768) { setRadius(180); setCardSize(75); } 
          else { setRadius(130); setCardSize(65); }
      };

      updateSizes();
      window.addEventListener('resize', updateSizes);
      return () => window.removeEventListener('resize', updateSizes);
  }, []);

  const fontSize = cardSize * 0.16;

  return (
      <section className="w-full flex justify-center items-center py-32 flex-col px-4 bg-muted dark:bg-background border-t border-zinc-200 dark:border-border transition-colors duration-500">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-24"
          >
            <h2 className="text-3xl sm:text-5xl font-black text-foreground dark:text-foreground tracking-tight">
                Next Gen Features
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </motion.div>

          <div className="relative w-full z-10 max-w-[700px] flex justify-center items-center h-[500px] sm:h-[600px]">
              {/* Dashed Circle Border */}
              <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                  className="absolute border-2 border-dashed border-primary/30 rounded-full"
                  style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
              />

              {/* Rotating Feature Cards */}
              {features.map((feature, i) => {
                  const angleDeg = (360 / total) * ((i - activeIndex + total) % total);
                  const angleRad = (angleDeg * Math.PI) / 180;
                  const x = radius * Math.cos(angleRad);
                  const y = radius * Math.sin(angleRad);
                  
                  const isActive = i === activeIndex;

                  return (
                      <motion.div
                          key={i}
                          className={`absolute rounded-2xl shadow-xl flex items-center justify-center text-center transition-all duration-700 backdrop-blur-md border ${isActive ? 'bg-primary text-foreground border-primary scale-110 z-20 shadow-primary/40' : 'bg-white/80 dark:bg-card/80 text-foreground dark:text-zinc-200 border-zinc-200 dark:border-border scale-90 z-10'}`}
                          style={{
                              width: `${cardSize}px`,
                              height: `${cardSize}px`,
                              transform: `translate(${x}px, ${y}px)`,
                              padding: '8px',
                          }}
                      >
                          <p className="font-bold leading-tight" style={{ fontSize: `${fontSize}px` }}>
                              {feature.title}
                          </p>
                      </motion.div>
                  );
              })}

              {/* Centered Virtual Phone */}
              <div
                  className="absolute z-10 flex items-center justify-center"
                  style={{ width: `${radius * 0.8}px`, height: `${radius * 1.6}px` }}
              >
                  <div className="w-full h-full bg-background rounded-[2rem] shadow-2xl border-[6px] border-border flex flex-col items-center justify-center overflow-hidden relative">
                      {/* Speaker notch */}
                      <div className="absolute top-3 left-1/2 -tranzinc-x-1/2 w-[30%] h-2 rounded-full bg-card z-20" />
                      
                      {/* Screen Content */}
                      <div className="w-full h-full bg-gradient-to-br from-muted to-background relative flex flex-col items-center justify-center p-4">
                        <div className="w-full h-full border border-border rounded-xl flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                          <motion.div 
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="text-center"
                          >
                            <span className="block font-black tracking-widest text-foreground text-xl sm:text-2xl drop-shadow-lg">
                              CHALKS<br /><span className="text-primary">N</span><br />BOARD
                            </span>
                          </motion.div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}

function DarkLightToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle Dark Mode"
        className="fixed bottom-6 left-6 z-50 bg-white/80 dark:bg-card/80 backdrop-blur-md rounded-full p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200 dark:border-border hover:scale-110 transition-transform magnetic-target"
      >
        <div className="w-5 h-5"></div>
      </button>
    );
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="fixed bottom-6 left-6 z-50 bg-white/80 dark:bg-card/80 backdrop-blur-md rounded-full p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200 dark:border-border hover:scale-110 transition-transform magnetic-target"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-foreground" />}
    </button>
  );
}

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

export default function ServicesPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <DarkLightToggle />
      <section className="relative min-h-screen transition-colors duration-500 overflow-hidden bg-background">
        
        <VantaMinimalBackground>
          <div className="relative z-20 max-w-5xl mx-auto py-32 px-4 flex flex-col gap-16 min-h-screen">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center pt-8"
            >
            <h1 className="text-4xl sm:text-6xl font-black mb-6 text-foreground tracking-tight drop-shadow-2xl">
              Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Digital Presence</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive digital solutions designed to grow your brand, increase conversions, and build lasting engagement.
            </p>
          </motion.div>

          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-80 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-zinc-700/50 to-transparent -tranzinc-x-1/2 hidden md:block z-0"></div>

          <div className="flex flex-col gap-8 sm:gap-10 mt-12 relative z-10">
            {services.map((service, idx) => (
              <motion.div
                className={`group relative flex w-full ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                key={service.title + idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              >
                {/* Timeline Dot & Connecting Line */}
                <div className="absolute top-1/2 left-1/2 -tranzinc-x-1/2 -tranzinc-y-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)] hidden md:block">
                  <div className={`absolute top-1/2 -tranzinc-y-1/2 h-0.5 bg-primary/30 w-[5vw] ${idx % 2 === 0 ? 'right-full' : 'left-full'}`}></div>
                </div>

                <div className="w-full md:w-[46%]">
                  <Tilt 
                    tiltMaxAngleX={5} 
                    tiltMaxAngleY={5} 
                    perspective={1000} 
                    scale={1.02} 
                    transitionSpeed={2000}
                    className="h-full"
                  >
                    <div className="backdrop-blur-xl bg-card/40 border border-border/50 shadow-2xl rounded-3xl p-8 hover:bg-card/60 transition-colors h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-background/50 border border-border shadow-inner group-hover:scale-110 transition-transform duration-500 shrink-0">
                          {serviceIcons[service.title]}
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                          {service.title}
                        </h2>
                      </div>
                      
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                        {service.description}
                      </p>
                      
                      <ul className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {serviceFeatures[service.title]?.map((feature, i) => (
                          <li key={i} className="flex items-center text-muted-foreground text-sm font-medium">
                            <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-auto pt-4 border-t border-border/50">
                        <Link href={`/services/${slugify(service.title)}`}>
                          <MagneticButton className="w-full bg-background/50 border border-border text-foreground font-bold py-3 px-6 rounded-xl hover:bg-primary/90 hover:border-primary transition-colors shadow-lg group-hover:shadow-primary/20">
                            Explore Service
                          </MagneticButton>
                        </Link>
                      </div>
                    </div>
                  </Tilt>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        </VantaMinimalBackground>
        
        <Tech />
      </section>
    </ThemeProvider>
  );
}
