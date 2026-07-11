"use client"

import { useState } from "react"
import { BookOpen, Megaphone, Radio, Target, Search, Zap } from "lucide-react"

export default function ComprehensiveServicesSection() {
  const [activeService, setActiveService] = useState(null)

  const handleServiceClick = (service) => {
    setActiveService(activeService === service ? null : service)
  }

  const openServicePage = (service) => {
    // In a real app, this would navigate to service pages
    alert(`Opening ${service} service page...`)
  }

  return (
    <section className="bg-white dark:bg-background py-16 lg:py-20 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-foreground text-center mb-12 lg:mb-16 leading-tight">
          Shaping The <span className="font-black">Future</span> Of Your Brand,{" "}
          <span className="font-black">Today</span>
        </h2>

        {/* New Service Cards with Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
          {[
            { src: "/Rectangle1.png", text: "Admission Strategy", description: "We craft compelling brand films that highlight a school's unique strengths and create a lasting impact. Through engaging storytelling and visuals, we build an emotional connection with prospective students and parents. Our creative approach ensures your institution stands out, driving interest and admissions." },
            { src: "/Rectangle1.png", text: "Brand Films & Ads", description: "With a creative team beating the ordinary, we aspire to build stories and narrate them via positive state-of-art to leave a lasting impression. We have catered to exceptional brand films for schools that hook audiences and build a connection." },
            { src: "/Rectangle1.png", text: "Lead Generation", description: "We generate admission leads for schools through high-performing ads targeted at specific locations and audience ranges. Our admission service helps accelerate admission rates in schools assisted by better reach." },
            { src: "/Rectangle6.png", text: "Tele Calling & Counseling", description: "Our tele-calling services reach potential leads, involving engaging conversations, answering questions, and providing information to prospects to convert them into admissions. Our proactive approach helps reach out and connect with potential leads." },
            { src: "/Rectangle2.png", text: "Social Media Management", description: "We provide 360-degree social media management solutions for ed-techs, helping them build a strong digital presence. From content creation, engagement, and community building to analytics and growth, our strategies ensure seamless and impactful brand management across social platforms." },
            { src: "/Rectangle4.png", text: "Social Media Ads", description: "We offer 360-degree social media advertising solutions for ed-techs, ensuring maximum visibility and engagement. From audience targeting and ad creatives to optimization and scalability, our strategies drive conversions and amplify your brand’s digital impact." },
            { src: "/Rectangle4.png", text: "Review & Reputation Management", description: "We provide 360-degree review and reputation management solutions for ed-techs, ensuring a strong and credible digital presence. From monitoring feedback and responding to reviews to building trust and enhancing brand perception, our strategies help maintain a positive reputation across online platforms." },
            { src: "/Rectangle4.png", text: "Dynamic Website Design", description: "We create 360-degree dynamic website solutions for ed-techs, ensuring a seamless, engaging, and scalable online presence. From interactive design and responsive layouts to smooth functionality and user-friendly experiences, our websites are built to captivate and convert." },
          ].map((service, idx) => (
            <div key={service.text + idx} className="bg-white dark:bg-card rounded-xl shadow p-6 border border-gray-100 dark:border-border hover:shadow-lg transition flex flex-col items-center text-center">
              <h3 className="text-lg font-bold text-red-600 mb-2">{service.text}</h3>
              <p className="text-gray-700 dark:text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Paid Ads */}
          <div
            className={`space-y-4 p-4 rounded-lg cursor-pointer transition-all ${activeService === "paid" ? "bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-900/50" : "hover:bg-gray-50 dark:hover:bg-zinc-900/50"}`}
            onClick={() => handleServiceClick("paid")}
          >
            <div className="flex items-center space-x-2 text-red-500">
              <Target className="w-6 h-6" />
              <h3 className="text-lg font-bold">Paid Ads</h3>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-muted-foreground">
              <li>• PPC & Paid Ads</li>
              <li>• Google Ads</li>
            </ul>
            <p className="text-gray-600 dark:text-muted-foreground text-sm">
              Our print advertisement ensures seductive ad campaigns with enchanting creative graphic illustrations that
              tell the best possible story about your brand.
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation()
                openServicePage("Paid Advertising")
              }}
              className="text-red-500 font-bold text-sm hover:underline"
            >
              READ MORE
            </button>
          </div>

          {/* Organic Search */}
          <div
            className={`space-y-4 p-4 rounded-lg cursor-pointer transition-all ${activeService === "seo" ? "bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-900/50" : "hover:bg-gray-50 dark:hover:bg-zinc-900/50"}`}
            onClick={() => handleServiceClick("seo")}
          >
            <div className="flex items-center space-x-2 text-red-500">
              <Search className="w-6 h-6" />
              <h3 className="text-lg font-bold">Organic Search</h3>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-muted-foreground">
              <li>• SEO Services</li>
              <li>• SEO Audit</li>
              <li>• Speed Optimization</li>
            </ul>
            <button
              onClick={(e) => {
                e.stopPropagation()
                openServicePage("SEO Services")
              }}
              className="text-red-500 font-bold text-sm hover:underline"
            >
              READ MORE
            </button>
          </div>

          {/* Integrated Marketing */}
          <div
            className={`space-y-4 p-4 rounded-lg cursor-pointer transition-all ${activeService === "integrated" ? "bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-900/50" : "hover:bg-gray-50 dark:hover:bg-zinc-900/50"}`}
            onClick={() => handleServiceClick("integrated")}
          >
            <div className="flex items-center space-x-2 text-red-500">
              <Zap className="w-6 h-6" />
              <h3 className="text-lg font-bold">Integrated Marketing</h3>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-muted-foreground">
              <li>• Outdoor Marketing</li>
            </ul>
            {activeService === "integrated" && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  openServicePage("Integrated Marketing")
                }}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Learn More
              </button>
            )}
          </div>

          {/* Digital Strategy with Image */}
          <div className="space-y-4">
            <div className="bg-gray-900 dark:bg-card border dark:border-border rounded-lg p-6 text-white dark:text-foreground relative overflow-hidden cursor-pointer hover:bg-gray-800 dark:hover:bg-zinc-900/80 transition-colors">
              <div className="absolute right-4 top-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg opacity-20"></div>
              <h3 className="text-lg font-bold mb-4">Digital Strategy</h3>
              <p className="text-sm mb-4 text-gray-300 dark:text-muted-foreground">
                We combine data-driven insights with creative excellence to deliver strategies that meet your brand
                awareness needs and lead generation and brand building.
              </p>
              <button
                onClick={() => openServicePage("Digital Strategy")}
                className="text-red-500 font-semibold text-sm hover:underline"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
