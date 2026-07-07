export default function ResultsSection() {
  return (
    <section className="bg-zinc-900 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Mobile Results */}
          <div className="relative">
            <div className="bg-gradient-to-br from-zinc-600 to-zinc-800 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 text-4xl lg:text-6xl opacity-20">📱</div>
              <h3 className="text-xl lg:text-2xl font-bold mb-6">
                CHALKSNBOARD
                <br />
                RESULTS
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  <span className="text-sm lg:text-base">Mobile App Optimization in 14 days</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  <span className="text-sm lg:text-base">15K+ Visitors within a Month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  <span className="text-sm lg:text-base">3,000,000 Ad Impressions in Just One Month</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Social Results */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 text-4xl lg:text-6xl opacity-20">📊</div>
              <h3 className="text-xl lg:text-2xl font-bold mb-6">
                CHALKSNBOARD
                <br />
                RESULTS
              </h3>
              <ul className="space-y-3">
                <li className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <span className="text-sm lg:text-base">Over 2.95 Million Impressions in just 2 Months</span>
                </li>
                <li className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <span className="text-sm lg:text-base">40% Surge in Social Engagement</span>
                </li>
                <li className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <span className="text-sm lg:text-base">Complete Website Redesigning in just 7 Days</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
