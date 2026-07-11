"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { Search, Monitor, Smartphone, BookOpen, Mail, Target, Globe, Star, ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const AdmissionStrategyIcon = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 7.5L12 3L22 7.5L12 12L2 7.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M6 10.5V15.5C6 17.1569 8.68629 18.5 12 18.5C15.3137 18.5 18 17.1569 18 15.5V10.5" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 12V18.5" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const servicesData = [
  {
    title: "SEO (Search Engine Optimization)",
    description: "Improve your website's visibility on search engines and attract more organic traffic with our comprehensive SEO strategies, including keyword research, on-page optimization, and link building.",
    icon: <Search className="w-12 h-12" />,
    color: "from-green-500 to-emerald-700",
    features: ["Keyword Research & Analysis", "On-Page Optimization", "Technical SEO Audit", "Link Building", "Local SEO", "Content Optimization", "Site Speed Optimization", "Mobile SEO"],
  },
  {
    title: "UI/UX Design",
    description: "Enhance user satisfaction and engagement with intuitive, visually appealing, and user-centric UI/UX design tailored to your brand and audience.",
    icon: <Monitor className="w-12 h-12" />,
    color: "from-pink-500 to-rose-700",
    features: ["User Research & Analysis", "Wireframing & Prototyping", "Visual Design", "Interaction Design", "Usability Testing", "Design Systems"],
  },
  {
    title: "Mobile App Development",
    description: "Build robust, scalable, and user-friendly mobile applications for iOS and Android platforms to expand your digital reach and improve customer engagement.",
    icon: <Smartphone className="w-12 h-12" />,
    color: "from-indigo-500 to-violet-700",
    features: ["iOS & Android Apps", "Cross-Platform Solutions", "App Store Deployment", "UI/UX for Mobile", "Performance Optimization", "Maintenance & Support"],
  },
  {
    title: "Content Marketing",
    description: "Drive brand awareness and customer loyalty through high-quality, relevant, and engaging content that resonates with your target audience.",
    icon: <BookOpen className="w-12 h-12" />,
    color: "from-yellow-500 to-amber-700",
    features: ["Content Strategy", "Blog & Article Writing", "Infographics", "Video Content", "Social Media Content", "Content Distribution"],
  },
  {
    title: "Email Marketing",
    description: "Reach your audience directly with personalized email campaigns designed to nurture leads, increase conversions, and retain customers.",
    icon: <Mail className="w-12 h-12" />,
    color: "from-zinc-500 to-cyan-700",
    features: ["Campaign Strategy", "Personalized Emails", "Automation", "A/B Testing", "Analytics & Reporting", "List Management"],
  },
  {
    title: "Admission Strategy",
    description: "We craft compelling brand films that highlight a school's unique strengths and create a lasting impact. Through engaging storytelling and visuals, we build an emotional connection with prospective students and parents. Our creative approach ensures your institution stands out, driving interest and admissions.",
    icon: AdmissionStrategyIcon,
    color: "from-red-500 to-rose-700",
    features: ["Brand Films", "Storytelling", "Visual Impact", "Emotional Connection", "Student Recruitment", "Campus Highlights"],
  },
  {
    title: "Dynamic Website Development",
    description: "Get a fast, secure, and scalable website tailored to your business needs. Our dynamic websites are built for performance, easy content management, and seamless user experience across all devices.",
    icon: <Globe className="w-12 h-12" />,
    color: "from-cyan-500 to-teal-700",
    features: ["Responsive & Mobile-First Design", "Content Management System (CMS)", "SEO Optimization", "Custom Integrations", "Performance & Security", "Ongoing Support"],
  },
  {
    title: "Review & Reputation Management",
    description: "Build trust and credibility for your brand with proactive review and reputation management. We help you monitor, respond, and improve your online presence across platforms.",
    icon: <Star className="w-12 h-12" />,
    color: "from-yellow-400 to-orange-600",
    features: ["Online Review Monitoring", "Response Management", "Reputation Repair", "Platform Integration", "Sentiment Analysis", "Reporting & Insights"],
  },
];

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

export default function ServiceDetail() {
  const params = useParams();
  const router = useRouter();
  
  const serviceSlug = params.service;
  const service = servicesData.find(s => slugify(s.title) === serviceSlug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <MagneticButton onClick={() => router.push('/services')} className="bg-primary/90 text-foreground px-6 py-2 rounded-full mx-auto flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </MagneticButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        {/* Back Button */}
        <button 
          onClick={() => router.push('/services')}
          className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-12 group"
        >
          <div className="w-8 h-8 rounded-full bg-card flex items-center justify-center mr-3 group-hover:bg-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Back to all services
        </button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} mb-8 shadow-lg shadow-primary/20`}>
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              {service.description}
            </p>
            <MagneticButton onClick={() => window.location.href='/#contact'} className="bg-primary text-foreground px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-primary/30">
              Get Started
            </MagneticButton>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-800/20 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <div className="bg-card/50 backdrop-blur-xl border border-border p-8 md:p-12 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-4"></span>
                Key Features Included
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-start text-muted-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
