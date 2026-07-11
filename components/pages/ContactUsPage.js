"use client"

import Header from "../Header"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import MagneticButton from "../ui/MagneticButton"
import VantaMinimalBackground from "../VantaMinimalBackground"

export default function ContactUsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    optIn: false
  })
  const [submitted, setSubmitted] = useState(false)

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)

    // Send form data to leads API
    try {
      await fetch("/api/leads", {
        method: "POST",
        body: JSON.stringify({
          ...form,
          source: "Contact Us Page"
        }),
        headers: { "Content-Type": "application/json" },
      })
    } catch (err) {
      console.error("Error submitting form:", err)
    }

    // Reset form after 2 seconds
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: "", email: "", phone: "", subject: "", message: "", optIn: false })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 88608 78346",
      link: "tel:+918860878346",
      color: "from-zinc-500 to-zinc-600"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@chalksnboard.com",
      link: "mailto:info@chalksnboard.com",
      color: "from-red-500 to-red-600"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Gurugram, Haryana",
      link: "https://maps.app.goo.gl/P26jbVmujGLtdEn26",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: null,
      color: "from-purple-500 to-pink-600"
    }
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
    <div className="min-h-screen bg-zinc-900 text-white overflow-clip relative">
      <Header />
      
      {/* Vanta Animated Background - Constrained to top of page */}
      <div className="absolute top-0 left-0 right-0 h-screen z-0 overflow-hidden">
        <VantaMinimalBackground />
      </div>

      {/* Ambient Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none animate-[pulse_8s_ease-in-out_infinite] z-0"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-zinc-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none animate-[pulse_12s_ease-in-out_infinite_reverse] z-0"></div>

      {/* Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 via-zinc-900/60 to-zinc-900 z-0 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-16">
        
        {/* Hero Section */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Let's Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Future.</span></h1>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed">
            Get in touch with our digital experts. We're here to help transform your business and scale your marketing efforts.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
        >
          
          {/* Contact Form */}
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <div className="h-full bg-zinc-800/40 backdrop-blur-xl border border-zinc-700 shadow-2xl rounded-3xl p-8 sm:p-12 relative overflow-hidden">
              {/* Form Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                
                <h2 className="text-3xl font-black text-white mb-8 flex items-center">
                  <span className="w-2 h-8 bg-red-500 rounded-full mr-4"></span>
                  Send us a Message
                </h2>
                
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 flex flex-col items-center"
                  >
                    <div className="w-24 h-24 bg-green-500/20 border border-green-500/50 rounded-full flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(34,197,94,0.3)]">
                      <Send className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-4xl font-black text-white mb-4">Message Sent!</h3>
                    <p className="text-zinc-300 text-lg">Thank you for reaching out. A strategist will be in touch shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider ml-1">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleFormChange}
                          className="w-full bg-zinc-900/60 border border-zinc-700 text-white px-5 py-4 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-zinc-500 transition-all shadow-inner font-medium"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider ml-1">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleFormChange}
                          className="w-full bg-zinc-900/60 border border-zinc-700 text-white px-5 py-4 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-zinc-500 transition-all shadow-inner font-medium"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider ml-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleFormChange}
                          className="w-full bg-zinc-900/60 border border-zinc-700 text-white px-5 py-4 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-zinc-500 transition-all shadow-inner font-medium"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider ml-1">Subject *</label>
                        <input
                          type="text"
                          name="subject"
                          value={form.subject}
                          onChange={handleFormChange}
                          className="w-full bg-zinc-900/60 border border-zinc-700 text-white px-5 py-4 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-zinc-500 transition-all shadow-inner font-medium"
                          placeholder="What is this regarding?"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider ml-1">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleFormChange}
                        rows={5}
                        className="w-full bg-zinc-900/60 border border-zinc-700 text-white px-5 py-4 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-zinc-500 transition-all shadow-inner font-medium resize-none"
                        placeholder="Tell us about your goals and how we can help..."
                        required
                      />
                    </div>

                    <div className="pt-4 pb-6">
                      <div className="bg-zinc-900/40 border border-zinc-700 rounded-xl p-5 flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-0.5">
                          <input
                            type="checkbox"
                            id="optIn"
                            name="optIn"
                            checked={form.optIn}
                            onChange={(e) => setForm({ ...form, optIn: e.target.checked })}
                            className="w-5 h-5 rounded border-zinc-600 text-red-500 focus:ring-red-500 focus:ring-offset-zinc-900 bg-zinc-800 cursor-pointer transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="optIn" className="text-zinc-200 text-sm font-medium leading-relaxed block mb-2 cursor-pointer">
                            Yes, I agree to receive messages from Chalksnboard via RCS, SMS, and email regarding my inquiry.
                          </label>
                          <p className="text-zinc-400 text-xs leading-relaxed">
                            You can opt out at any time. View our{" "}
                            <a href="/privacy-policy" className="text-red-400 hover:text-red-300 hover:underline">
                              Privacy Policy
                            </a> for details.
                          </p>
                        </div>
                      </div>
                    </div>

                    <MagneticButton 
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white py-4 rounded-xl font-black text-lg tracking-wide uppercase shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all"
                    >
                      Submit Inquiry
                    </MagneticButton>
                  </form>
                )}
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div variants={fadeUp} className="lg:col-span-5 space-y-6">
            
            {/* 3D Interactive Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group bg-zinc-900/90 backdrop-blur-xl border border-zinc-700 rounded-2xl p-6 hover:bg-zinc-900 transition-all duration-300 flex items-center shadow-lg hover:shadow-2xl hover:border-zinc-600">
                  <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mr-6 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-zinc-400 font-bold text-sm uppercase tracking-wider mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-white font-semibold text-lg hover:text-red-400 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-white font-semibold text-lg">{info.content}</p>
                      )}
                    </div>
                  </div>
              ))}
            </div>

            {/* Glowing Map Wrapper */}
            <div className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-700 rounded-3xl p-6 shadow-2xl relative group">
              <div className="absolute inset-0 bg-zinc-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <h3 className="text-white font-black text-xl mb-4 flex items-center relative z-10">
                <MapPin className="w-5 h-5 text-red-500 mr-3" />
                Find Us
              </h3>
              
              <div className="w-full h-64 rounded-xl overflow-hidden border border-zinc-600 relative z-10 transition-all duration-700 shadow-inner">
                <iframe
                    src="https://maps.google.com/maps?q=28.436267318650167,77.05137942068167&hl=en&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Chalksnboard Location"
                  />
                </div>
                
                <div className="mt-5 text-center relative z-10">
                  <MagneticButton className="w-full bg-zinc-900/80 border border-zinc-700 text-white px-6 py-4 rounded-xl font-bold hover:bg-zinc-800 transition-colors inline-flex items-center justify-center space-x-2">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>Open in Google Maps</span>
                  </MagneticButton>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional CTA Banner */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="mt-24 text-center max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-3xl p-12 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -tranzinc-x-1/2 -tranzinc-y-1/2 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Prefer to talk right now?</h2>
              <p className="text-zinc-300 text-lg mb-10 max-w-2xl mx-auto">
                Skip the form and give us a direct call or drop a message on WhatsApp. Our experts are on standby.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <MagneticButton className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-xl font-black uppercase tracking-wider hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all">
                  <a href="tel:+918860878346" className="flex items-center justify-center space-x-2 w-full h-full">
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                </MagneticButton>
                <MagneticButton className="bg-transparent border-2 border-zinc-600 text-white px-8 py-4 rounded-xl font-black uppercase tracking-wider hover:bg-zinc-800 hover:border-zinc-500 transition-colors">
                  <a href="https://wa.me/918860878346" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 w-full h-full">
                    <span>WhatsApp Chat</span>
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  )
}
