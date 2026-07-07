"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function WhyChalksnboardSection() {
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hot Air Balloon Image */}
          <div className="relative">
            <div className="w-full h-64 lg:h-96 bg-gradient-to-b from-orange-200 to-zinc-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Sky background with clouds */}
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-300 via-orange-200 to-zinc-400"></div>

              {/* Hot air balloon */}
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <div className="bg-red-600 text-white p-2 transform rotate-45">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white transform -rotate-45 flex items-center justify-center">
                      <span className="text-red-600 font-bold text-xs transform rotate-45">CB</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs lg:text-sm font-semibold">
                  CHALKS<span className="text-red-600">N</span>BOARD
                </div>

                {/* Balloon strings */}
                <div className="w-px h-8 lg:h-12 bg-gray-600 mx-auto mt-2"></div>
                <div className="w-6 h-4 lg:w-8 lg:h-6 bg-yellow-800 rounded-sm mx-auto"></div>
              </div>

              {/* City silhouette at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 lg:h-24 bg-gradient-to-t from-gray-600 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Chalksnboard?</h2>
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-6">Your Dedicated Marketing Partner</h3>
           

            <div className="bg-white rounded-lg p-4 mb-4 flex items-center space-x-4 shadow-sm">
              <div className="bg-red-600 text-white p-2 transform rotate-45 flex-shrink-0">
                <div className="w-6 h-6 bg-white transform -rotate-45"></div>
              </div>
              <p className="text-gray-700 text-sm lg:text-base">
                Because we are ethical, function as your extended team, and we have a proven track record of delivering
                results.
              </p>
            </div>

            <div className="space-y-4">
              <div
                className="bg-white rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors shadow-sm"
                onClick={() => toggleSection("workflow")}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Industry-Specific Knowledge</span>
                  {expandedSection === "workflow" ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
                {expandedSection === "workflow" && (
                  <div className="mt-4 text-gray-600 text-sm">
                   We specialize in the education sector, understanding the unique challenges and opportunities that schools faces.
                  </div>
                )}
              </div>

              <div
                className="bg-white rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors shadow-sm"
                onClick={() => toggleSection("expertise")}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Data-Driven Results</span>
                  {expandedSection === "expertise" ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
                {expandedSection === "expertise" && (
                  <div className="mt-4 text-gray-600 text-sm">
                 We rely on analytics and performance metrics to guide every decision, ensuring campaigns are optimized for ROI and aligned with your school's growth goals.
                  </div>
                )}
              </div>

              <div
                className="bg-white rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors shadow-sm"
                onClick={() => toggleSection("agency")}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Transparent Reporting</span>
                  {expandedSection === "agency" ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
                {expandedSection === "agency" && (
                  <div className="mt-4 text-gray-600 text-sm">
                    We provide clear, regular reports that highlight campaign performance, insights, and next steps—keeping you in the loop every step of the way.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}