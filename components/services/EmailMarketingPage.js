"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Mail, CheckCircle } from "lucide-react"

export default function EmailMarketingPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const router = useRouter()

  const features = [
    "Automated Email Campaigns",
    "Personalized Content",
    "A/B Testing",
    "Advanced Analytics",
    "List Segmentation",
    "Responsive Templates",
  ]

  const packages = [
    {
      name: "Starter",
      price: "₹15,000",
      period: "/month",
      features: ["Up to 5,000 subscribers", "10 email campaigns", "Basic templates", "Email support"],
    },
    {
      name: "Professional",
      price: "₹35,000",
      period: "/month",
      features: [
        "Up to 25,000 subscribers",
        "Unlimited campaigns",
        "Custom templates",
        "A/B testing",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹75,000",
      period: "/month",
      features: ["Unlimited subscribers", "Advanced automation", "Custom integrations", "Dedicated manager"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zinc-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Email Marketing Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Drive engagement and conversions with personalized email campaigns that deliver results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-zinc-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zinc-600 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-gray-50 border-b">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              "overview",
              "features",
              "pricing",
              "case-studies"
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab)
                  router.push(`/${tab}`)
                }}
                className={`py-4 px-2 border-b-2 font-medium capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? "border-zinc-600 text-zinc-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Email Marketing?</h2>
                <p className="text-gray-600 mb-6">
                  Our email marketing services help you build stronger relationships with your customers through
                  targeted, personalized campaigns that drive engagement and conversions.
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-zinc-50 to-purple-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-zinc-600 mb-2">95%</div>
                  <div className="text-gray-600 mb-4">Average Open Rate</div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">300%</div>
                  <div className="text-gray-600">ROI Increase</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "pricing" && (
            <div>
              <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`relative p-8 rounded-2xl ${
                      pkg.popular
                        ? "bg-gradient-to-br from-zinc-600 to-purple-600 text-white"
                        : "bg-white border-2 border-gray-200"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -tranzinc-x-1/2">
                        <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                      <span className="text-lg">{pkg.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                        pkg.popular
                          ? "bg-white text-zinc-600 hover:bg-gray-100"
                          : "bg-zinc-600 text-white hover:bg-zinc-700"
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
