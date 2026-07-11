"use client"

import { useState, useEffect } from "react"
import { Plus, Target, TrendingUp } from "lucide-react"

export default function MagazineStatsSection() {
  const [leadsGenerated, setLeadsGenerated] = useState(17497378)
  const [salesGenerated, setSalesGenerated] = useState(8934567)

  useEffect(() => {
    const interval = setInterval(() => {
      setLeadsGenerated((prev) => prev + Math.floor(Math.random() * 50))
      setSalesGenerated((prev) => prev + Math.floor(Math.random() * 30))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num) => {
    return num
      .toString()
      .split("")
      .map((digit, index) => (
        <span key={index} className="inline-block bg-zinc-500 text-white px-2 py-1 mx-0.5 rounded text-sm font-bold">
          {digit}
        </span>
      ))
  }

  const formatGreenNumber = (num) => {
    return num
      .toString()
      .split("")
      .map((digit, index) => (
        <span key={index} className="inline-block bg-green-500 text-white px-2 py-1 mx-0.5 rounded text-sm font-bold">
          {digit}
        </span>
      ))
  }

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Magazine Feature */}
          <div className="bg-red-600 rounded-2xl p-6 lg:p-8 text-white">
            <div className="bg-white rounded-lg p-4 lg:p-6 mb-6">
              <div className="bg-black rounded-lg p-4 text-white">
                <h3 className="text-red-500 text-xl lg:text-2xl font-bold mb-2">Lookout</h3>
                <div className="text-sm mb-4">
                  <p className="font-semibold">NIKHIL SHARMA</p>
                  <p className="text-gray-300">BUSINESS GROWTH MAESTRO</p>
                </div>
                <div className="text-yellow-400 text-sm lg:text-lg font-bold mb-2">
                  HELPING
                  <br />
                  STARTUPS/BUSINESSES
                  <br />
                  GROW FASTER
                </div>
                <div className="text-3xl lg:text-4xl font-bold">10X</div>
                <div className="text-xs mt-2">
                  <p>• VALUATION</p>
                  <p>• REVENUE</p>
                  <p>• GROWTH</p>
                  <p>• SALES</p>
                </div>
              </div>
            </div>
            <h4 className="text-lg lg:text-xl font-bold mb-2">
              Featured In The <span className="font-black">Outlook Magazine</span>
            </h4>
            <p className="text-sm">Annual Edition, 17th January 2022</p>
            <div className="mt-6 bg-black text-white p-4 rounded-lg">
              <p className="text-sm font-semibold">India's First Growth Agency</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="space-y-6 lg:space-y-8">
            <div className="bg-gray-50 rounded-lg p-4 lg:p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Plus className="w-6 h-6 text-gray-600" />
                <span className="text-lg font-semibold text-gray-700">Free Consultation</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 lg:p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Plus className="w-6 h-6 text-gray-600" />
                <span className="text-lg font-semibold text-gray-700">Experienced Team</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 lg:p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Plus className="w-6 h-6 text-gray-600" />
                <span className="text-lg font-semibold text-gray-700">Data-Driven Strategies</span>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Target className="w-8 h-8 text-red-500" />
                <h3 className="text-xl lg:text-2xl font-bold text-red-500">Leads Generated</h3>
              </div>
              <div className="mb-6 lg:mb-8">{formatNumber(leadsGenerated)}</div>

              <div className="flex items-center justify-center space-x-2 mb-4">
                <TrendingUp className="w-8 h-8 text-green-500" />
                <h3 className="text-xl lg:text-2xl font-bold text-green-500">Sales Generated</h3>
              </div>
              <div>{formatGreenNumber(salesGenerated)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
