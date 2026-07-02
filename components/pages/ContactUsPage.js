"use client"

import Header from "../Header"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { useState } from "react"

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
      color: "from-blue-500 to-blue-600"
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
      color: "from-purple-500 to-purple-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
      <Header />

      {/* Hero Section */}
      <section className="mt-2 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get in touch with our digital marketing experts. We're here to help transform your business.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
            
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/80">Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleFormChange}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-white/50"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleFormChange}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-white/50"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleFormChange}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-white/50"
                      placeholder="Enter your phone"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleFormChange}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-white/50"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleFormChange}
                    rows={6}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-white/50"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  />
                </div>

                <div className="mt-6 mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">Stay in the loop!</h3>
                  <p className="text-white/80 mb-4 text-sm">
                    Check the box below if you'd like to receive updates, offers, and helpful information from us.
                  </p>
                  
                  <div className="bg-white/5 border border-white/20 rounded-lg p-5 flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <input
                        type="checkbox"
                        id="optIn"
                        name="optIn"
                        checked={form.optIn}
                        onChange={(e) => setForm({ ...form, optIn: e.target.checked })}
                        className="w-5 h-5 rounded border-white/30 text-red-500 focus:ring-red-500 focus:ring-offset-slate-900 bg-white/10 cursor-pointer"
                      />
                    </div>
                    <div>
                      <label htmlFor="optIn" className="text-white/90 text-sm font-medium leading-relaxed block mb-2 cursor-pointer">
                        Yes, I agree to receive messages from Chalksnboard via RCS messages, SMS, and other electronic communications.
                      </label>
                      <p className="text-white/60 text-xs leading-relaxed">
                        Message and data rates may apply. You can opt out at any time by replying STOP.{" "}
                        <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 hover:underline">
                          Privacy Policy
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:from-red-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-2xl"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center mb-4`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-white/80">{info.content}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Google Map */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-white font-bold text-2xl mb-4">Find Us</h3>
                                            <div className="w-full h-96 rounded-lg overflow-hidden">
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
               <div className="mt-4 text-center">
                 <a
                   href="https://maps.app.goo.gl/P26jbVmujGLtdEn26"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                 >
                   <MapPin className="w-5 h-5" />
                   <span>Open in Google Maps</span>
                 </a>
               </div>
            </div>
          </div>
        </div>

        {/* Additional CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how Chalksnboard can help transform your digital presence and drive real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918860878346"
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/918860878346"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
