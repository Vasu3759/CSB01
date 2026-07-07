"use client"

import React, { useEffect, useRef } from "react"
import Header from "../Header"
import { Target, Users, Award, Globe, TrendingUp, Heart, Lightbulb, Shield } from "lucide-react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import Tilt from "react-parallax-tilt"

function AnimatedCounter({ valueStr }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2500, bounce: 0 })
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const num = parseInt(valueStr.replace(/[^0-9]/g, "")) || 0
  const suffix = valueStr.replace(/[0-9]/g, "")

  useEffect(() => {
    if (isInView) {
      motionValue.set(num)
    }
  }, [isInView, num, motionValue])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix
      }
    })
  }, [springValue, suffix])

  return <span ref={ref}>0{suffix}</span>
}
import MagneticButton from "../ui/MagneticButton"
import VantaMinimalBackground from "../VantaMinimalBackground"
import RadialOfferings from "../RadialOfferings"
import TreeJourneyTimeline from "../TreeJourneyTimeline"

export default function AboutUsPage() {
  const milestones = [
    { year: "2020", title: "Company Founded", description: "Started as a small digital agency in Delhi" },
    { year: "2023", title: "First 50 Clients", description: "Reached our first major milestone" },
    { year: "2015", title: "International Expansion", description: "Expanded to US, UK, Canada, and UAE" },
    { year: "2018", title: "Smart Integration", description: "Became India's first marketing agency to use smart automation at scale" },
    { year: "2020", title: "1000+ Projects", description: "Successfully completed over 1000 projects" },
    { year: "2024", title: "Industry Leader", description: "Recognized as top marketing agency in India" },
  ]

  const values = [
    {
      icon: Shield,
      title: "Ethical Practices",
      description: "We believe in transparent and ethical business practices that build long-term relationships.",
      color: "from-zinc-500 to-zinc-600",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy we implement is focused on delivering measurable results and ROI.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of the curve by embracing new technologies and creative solutions.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our success. We function as your extended marketing team.",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const stats = [
    { number: "16+", label: "Years of Experience", icon: Award },
    { number: "1000+", label: "Projects Completed", icon: Target },
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "7", label: "Countries Served", icon: Globe },
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white overflow-clip">
      <Header />

      {/* Hero Section: Offerings Left, Contact Right */}
      <section className="relative min-h-screen pt-24 pb-16 z-10 flex items-center">
        <div className="absolute inset-0 z-0">
          <VantaMinimalBackground />
        </div>
        
        {/* Ambient Glowing Orbs */}
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none animate-[pulse_8s_ease-in-out_infinite] z-0 transform-gpu will-change-transform will-change-opacity"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-rose-500/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none animate-[pulse_12s_ease-in-out_infinite_reverse] z-0 transform-gpu will-change-transform will-change-opacity"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900 z-0 pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Contact Form (Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:col-span-5 lg:justify-end w-full order-2 lg:order-2"
            >
              <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={1000} className="w-full max-w-lg">
                <div className="backdrop-blur-xl bg-zinc-800/60 border border-zinc-700 shadow-2xl rounded-3xl p-6 lg:p-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 flex items-center">
                    <span className="w-2 h-6 lg:h-8 bg-red-500 rounded-full mr-3 lg:mr-4"></span>
                    Get in Touch
                  </h2>
                  <p className="text-zinc-400 mb-4 text-xs lg:text-sm">Fill out the form below and our team will get back to you immediately.</p>
                  
                  <form className="flex flex-col gap-3 lg:gap-4">
                    <div>
                      <label className="block text-[11px] lg:text-xs font-bold text-zinc-300 mb-1 uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        className="w-full bg-zinc-900/80 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-sm"
                        required
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] lg:text-xs font-bold text-zinc-300 mb-1 uppercase tracking-wider">Your Email</label>
                      <input
                        type="email"
                        className="w-full bg-zinc-900/80 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-sm"
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] lg:text-xs font-bold text-zinc-300 mb-1 uppercase tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full bg-zinc-900/80 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-sm"
                        placeholder="Enter your number"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] lg:text-xs font-bold text-zinc-300 mb-1 uppercase tracking-wider">Message</label>
                      <textarea
                        className="w-full bg-zinc-900/80 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none text-sm"
                        rows={2}
                        placeholder="How can we help you?"
                      />
                    </div>
                    <MagneticButton type="submit" className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-black uppercase tracking-wider py-3 px-4 rounded-xl transition-all mt-2 shadow-lg hover:shadow-red-500/30 text-sm">
                      Submit
                    </MagneticButton>
                  </form>
                </div>
              </Tilt>
            </motion.div>

            {/* Offerings (Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full flex justify-center lg:col-span-7 lg:justify-start order-1 lg:order-1"
            >
              <RadialOfferings />
            </motion.div>

          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-24 z-10 relative bg-zinc-900">
        
        {/* Our Story */}
        <motion.section id="our-story" className="mb-32" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} className="space-y-6">
              <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed">
                Founded in 2008, Chalksnboard began as a vision to revolutionize digital marketing in India. What started as a small team of passionate marketers has grown into the country's leading AI-powered marketing agency.
              </p>
              <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed">
                Over the years, we've helped thousands of businesses transform their digital presence, from startups to Fortune 500 companies. Our journey has been marked by innovation, dedication, and an unwavering commitment to our clients' success.
              </p>
              <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed font-semibold text-white">
                Today, we operate across 7 countries and have completed over 1000 successful projects, but our mission remains the same: to help businesses grow through strategic, data-driven marketing solutions.
              </p>
            </motion.div>
            
            <motion.div variants={fadeUp}>
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000}>
                <div className="bg-zinc-800/50 backdrop-blur-xl border border-zinc-700 rounded-3xl p-8 sm:p-12 shadow-2xl">
                  <div className="grid grid-cols-2 gap-8">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center group">
                        <div className="w-16 h-16 bg-zinc-900 border border-zinc-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:border-red-500 transition-all duration-300 shadow-inner">
                          <stat.icon className="w-8 h-8 text-red-500" />
                        </div>
                        <div className="text-4xl font-black text-white mb-2">
                          <AnimatedCounter valueStr={stat.number} />
                        </div>
                        <div className="text-zinc-400 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </div>
        </motion.section>


        {/* Timeline (Tree Growth Metaphor) */}
        <section className="mb-32 relative">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4 relative z-20"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Our Journey</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          </motion.div>

          <TreeJourneyTimeline />
        </section>

        {/* Values */}
        <motion.section className="mb-32" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Our Core Values</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeUp} className="h-full">
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} className="h-full">
                  <div className="bg-zinc-800/40 backdrop-blur-md border border-zinc-700 rounded-3xl p-8 text-center hover:bg-zinc-800/80 transition-all duration-300 h-full flex flex-col group">
                    <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`}>
                      <value.icon className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">{value.title}</h4>
                    <p className="text-zinc-400 text-base leading-relaxed flex-grow">{value.description}</p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center pb-20 mt-10">
          <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-3xl p-12 md:p-20 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -tranzinc-x-1/2 -tranzinc-y-1/2 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Grow Your Business?</h2>
              <p className="text-zinc-300 text-xl mb-12 max-w-2xl mx-auto">
                Join hundreds of successful businesses who trust Chalksnboard for their digital marketing needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <MagneticButton className="bg-gradient-to-r from-red-600 to-red-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-red-500/30 w-full sm:w-auto">
                  Start Your Project
                </MagneticButton>
                <MagneticButton className="bg-transparent border-2 border-zinc-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-800 hover:border-zinc-500 transition-colors w-full sm:w-auto">
                  Schedule Consultation
                </MagneticButton>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  )
}
