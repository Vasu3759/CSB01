"use client"

export default function CTASection() {
  const handleContactClick = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-background py-20 lg:py-32 border-t border-border/50 relative overflow-hidden">
      {/* Background glowing effect */}
      <div className="absolute top-1/2 left-1/2 -tranzinc-x-1/2 -tranzinc-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Take Action</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tight">
            Ready to <span className="text-primary">Scale</span> Without the Guesswork?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl">
            Stop relying on hope as a strategy. Partner with us to engineer a predictable, high-converting growth engine tailored for your exact audience.
          </p>
          <button 
            onClick={handleContactClick}
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-full overflow-hidden shadow-[0_0_40px_rgba(239,68,68,0.3)] hover:shadow-[0_0_60px_rgba(239,68,68,0.5)] transition-all duration-300 transform hover:-tranzinc-y-1"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Transformation
              <svg className="w-5 h-5 group-hover:tranzinc-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/20 tranzinc-y-full group-hover:tranzinc-y-0 transition-transform duration-300 ease-in-out" />
          </button>
        </div>
      </div>
    </section>
  )
}
