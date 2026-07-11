import { Monitor, Radio, Target } from "lucide-react"

export default function BrandFutureSection() {
  return (
    <section className="bg-gray-100 dark:bg-background py-16 lg:py-20 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-6 text-center">
        <h2 className="text-3xl lg:text-4xl xl:text-6xl font-bold text-gray-900 dark:text-foreground mb-12 lg:mb-16 leading-tight">
          Shaping The <span className="font-black">Future</span> Of Your Brand,{" "}
          <span className="font-black">Today.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Monitor className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Radio className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
