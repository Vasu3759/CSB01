"use client"

import { useState } from "react"
import { Target } from "lucide-react"
import { useRouter } from "next/navigation"

export default function PPCPaidAdsPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const router = useRouter()

  const platforms = [
    { name: "Google Ads", icon: "🔍", description: "Search & Display campaigns" },
    { name: "Facebook Ads", icon: "📘", description: "Social media advertising" },
    { name: "Instagram Ads", icon: "📸", description: "Visual content promotion" },
    { name: "LinkedIn Ads", icon: "💼", description: "B2B professional targeting" },
    { name: "YouTube Ads", icon: "📺", description: "Video advertising" },
    { name: "Twitter Ads", icon: "🐦", description: "Real-time engagement" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-bold mb-6">PPC & Paid Advertising</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Maximize your ad spend with data-driven PPC campaigns that deliver measurable ROI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Audit
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Advertising Platforms We Master</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                <p className="text-gray-600">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">500%</div>
              <div className="text-gray-600">Average ROAS</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">85%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zinc-600 mb-2">2.5M+</div>
              <div className="text-gray-600">Ad Spend Managed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-600">Successful Campaigns</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
