"use client"

import { useState } from "react"
import Header from "../Header"
import { Star, Quote, ChevronLeft, ChevronRight, Play, Award } from "lucide-react"

export default function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [activeFilter, setActiveFilter] = useState("all")

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "CEO",
      company: "TechStart Solutions",
      industry: "Technology",
      rating: 5,
      text: "Chalksnboard transformed our digital presence completely. Their AI-powered strategies helped us achieve 300% growth in leads within 6 months. The team's expertise and dedication are unmatched.",
      image: "/placeholder.svg?height=100&width=100",
      results: "300% increase in leads",
      project: "Complete Digital Transformation",
      videoTestimonial: true,
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      position: "Principal",
      company: "Sunrise International School",
      industry: "Education",
      rating: 5,
      text: "Working with Chalksnboard has been a game-changer for our school's admissions. Their targeted campaigns and counselling services helped us achieve 150% increase in admissions this year.",
      image: "/placeholder.svg?height=100&width=100",
      results: "150% increase in admissions",
      project: "Education Marketing Campaign",
      videoTestimonial: false,
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Founder",
      company: "GreenEarth Organics",
      industry: "E-commerce",
      rating: 5,
      text: "The ROI we've achieved with Chalksnboard is incredible. Their e-commerce strategies and social media campaigns have helped us scale from a local brand to a national presence.",
      image: "/placeholder.svg?height=100&width=100",
      results: "500% ROI improvement",
      project: "E-commerce Growth Strategy",
      videoTestimonial: true,
    },
    {
      id: 4,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "Global Healthcare Inc.",
      industry: "Healthcare",
      rating: 5,
      text: "Chalksnboard's expertise in healthcare marketing is exceptional. They understand compliance requirements while delivering creative campaigns that resonate with our audience.",
      image: "/placeholder.svg?height=100&width=100",
      results: "200% increase in patient inquiries",
      project: "Healthcare Digital Marketing",
      videoTestimonial: false,
    },
    {
      id: 5,
      name: "Mohammed Al-Rashid",
      position: "CEO",
      company: "Dubai Properties",
      industry: "Real Estate",
      rating: 5,
      text: "Their international expertise helped us successfully launch in the UAE market. The localized strategies and cultural understanding made all the difference.",
      image: "/placeholder.svg?height=100&width=100",
      results: "40% faster market penetration",
      project: "International Market Entry",
      videoTestimonial: true,
    },
    {
      id: 6,
      name: "Lisa Chen",
      position: "Brand Manager",
      company: "Fashion Forward",
      industry: "Fashion",
      rating: 5,
      text: "The creative campaigns by Chalksnboard have elevated our brand image significantly. Their understanding of fashion industry trends is remarkable.",
      image: "/placeholder.svg?height=100&width=100",
      results: "250% increase in brand engagement",
      project: "Fashion Brand Revamp",
      videoTestimonial: false,
    },
  ]

  const industries = [
    { id: "all", name: "All Industries", count: testimonials.length },
    { id: "Technology", name: "Technology", count: testimonials.filter((t) => t.industry === "Technology").length },
    { id: "Education", name: "Education", count: testimonials.filter((t) => t.industry === "Education").length },
    { id: "E-commerce", name: "E-commerce", count: testimonials.filter((t) => t.industry === "E-commerce").length },
    { id: "Healthcare", name: "Healthcare", count: testimonials.filter((t) => t.industry === "Healthcare").length },
    { id: "Real Estate", name: "Real Estate", count: testimonials.filter((t) => t.industry === "Real Estate").length },
    { id: "Fashion", name: "Fashion", count: testimonials.filter((t) => t.industry === "Fashion").length },
  ]

  const filteredTestimonials =
    activeFilter === "all" ? testimonials : testimonials.filter((t) => t.industry === activeFilter)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
  }

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Client Retention" },
    { number: "1000+", label: "Success Stories" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-900">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-orange-500 py-20 mt-16">
        <div className="container mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Quote className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">Client Success Stories</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve remarkable growth and success
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-red-400 mb-2">{stat.number}</div>
                  <div className="text-white/60">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Testimonial Carousel */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Featured Testimonials</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          {filteredTestimonials.length > 0 && (
            <div className="relative max-w-4xl mx-auto">
              <div
                key={currentTestimonial}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 transition-all duration-500 ease-in-out opacity-0 blur-sm animate-testimonial-fadein"
              >
                <div className="flex items-center justify-between mb-8">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>

                  <div className="text-center flex-1 mx-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center relative">
                      <span className="text-2xl font-bold text-white">
                        {filteredTestimonials[currentTestimonial]?.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                      {filteredTestimonials[currentTestimonial]?.videoTestimonial && (
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-zinc-500 rounded-full flex items-center justify-center">
                          <Play className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < filteredTestimonials[currentTestimonial]?.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>

                    <Quote className="w-8 h-8 text-red-400 mx-auto mb-6" />

                    <blockquote className="text-white text-lg md:text-xl leading-relaxed mb-6 italic">
                      "{filteredTestimonials[currentTestimonial]?.text}"
                    </blockquote>

                    <div className="text-center">
                      <h4 className="text-white font-bold text-xl">{filteredTestimonials[currentTestimonial]?.name}</h4>
                      <p className="text-red-400 font-semibold">{filteredTestimonials[currentTestimonial]?.position}</p>
                      <p className="text-white/60">{filteredTestimonials[currentTestimonial]?.company}</p>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-green-400 font-bold text-sm">Results Achieved</div>
                        <div className="text-white text-sm">{filteredTestimonials[currentTestimonial]?.results}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-zinc-400 font-bold text-sm">Project Type</div>
                        <div className="text-white text-sm">{filteredTestimonials[currentTestimonial]?.project}</div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>

                <div className="flex justify-center space-x-2">
                  {filteredTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-red-500" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          <style jsx>{`
            @keyframes testimonial-fadein {
              0% { opacity: 0; filter: blur(8px); }
              100% { opacity: 1; filter: blur(0); }
            }
            .animate-testimonial-fadein {
              animation: testimonial-fadein 0.6s cubic-bezier(0.4,0,0.2,1) forwards;
            }
          `}</style>
        </section>

        {/* Industry Filter */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Filter by Industry</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => {
                  setActiveFilter(industry.id)
                  setCurrentTestimonial(0)
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeFilter === industry.id
                    ? "bg-red-500 text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
              >
                {industry.name} ({industry.count})
              </button>
            ))}
          </div>
        </section>

        {/* All Testimonials Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">All Client Reviews</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-red-400 text-sm">{testimonial.position}</p>
                    <p className="text-white/60 text-xs">{testimonial.company}</p>
                  </div>
                  {testimonial.videoTestimonial && (
                    <div className="w-8 h-8 bg-zinc-500 rounded-full flex items-center justify-center">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                    />
                  ))}
                </div>

                <blockquote className="text-white/80 text-sm leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </blockquote>

                <div className="space-y-2">
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-green-400 font-bold text-xs">Results</div>
                    <div className="text-white text-xs">{testimonial.results}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-zinc-400 font-bold text-xs">Industry</div>
                    <div className="text-white text-xs">{testimonial.industry}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12">
            <Award className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's create your success story together. Join hundreds of satisfied clients who have transformed their
              business with Chalksnboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-colors">
                Start Your Success Story
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
