"use client"

import { Search, CheckCircle } from "lucide-react"

export default function SEOPage() {
  const seoServices = [
    "Keyword Research & Analysis",
    "On-Page Optimization",
    "Technical SEO Audit",
    "Link Building",
    "Local SEO",
    "Content Optimization",
    "Site Speed Optimization",
    "Mobile SEO",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-zinc-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-bold mb-6">SEO Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Dominate search results with our comprehensive SEO strategies that drive organic traffic
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get SEO Audit
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our SEO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seoServices.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
