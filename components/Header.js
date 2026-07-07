"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Phone, Menu, X } from "lucide-react"
import MagneticButton from "./ui/MagneticButton"

export default function Header({ onServiceClick, onPageClick, hideOnTop }) {
  const pathname = usePathname();
  const router = useRouter();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(hideOnTop);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    if (latest < 50) {
      // At the top of the page
      setHidden(hideOnTop);
    } else if (latest > previous && latest > 150) {
      // Scrolling down and past the threshold - hide
      setHidden(true);
      setMobileMenuOpen(false); // Close mobile menu if open
    } else {
      // Scrolling up - show
      setHidden(false);
    }
  });

  const scrollToSection = (sectionId) => {
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setMobileMenuOpen(false)
  }

  const handleServiceClick = (serviceName) => {
    if (onServiceClick) {
      onServiceClick(serviceName)
    } else {
      router.push('/services')
    }
    setMobileMenuOpen(false)
  }

  const handlePageClick = (pageName) => {
    if (pageName === "Contact Us") {
      router.push("/contact")
    } else if (onPageClick) {
      onPageClick(pageName)
    }
    setMobileMenuOpen(false)
  }

  const navLinks = [
    { name: "Home", path: "/", action: () => router.push("/") },
    { name: "Services", path: "/services", action: () => router.push('/services') },
    { name: "About", path: "/about", action: () => router.push('/about') },
    { name: "Portfolio", path: "#portfolio", action: () => scrollToSection("portfolio") },
    { name: "Career", path: "/career", action: () => router.push('/career') },
    { name: "Privacy", path: "/privacy-policy", action: () => router.push("/privacy-policy") },
    { name: "Contact", path: "/contact", action: () => router.push("/contact") },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-150%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 w-full z-50 pt-4 px-4 flex justify-center pointer-events-none"
    >
      {/* Floating Island Navbar */}
      <nav className="relative w-full max-w-7xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/40 dark:border-zinc-700/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full px-4 lg:px-6 py-3 flex items-center justify-between pointer-events-auto transition-colors duration-300">
        
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer group magnetic-target" 
          onClick={() => router.push("/")}
        >
          <div className="text-zinc-900 dark:text-white font-black text-xl tracking-tighter">
            CHALKS<span className="text-red-500 drop-shadow-md">N</span>BOARD
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center items-center space-x-1 mx-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.path || pathname.startsWith(`${link.path}/`);
            return (
              <button
                key={link.name}
                onClick={link.action}
                className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 magnetic-target
                  ${isActive ? "text-red-500" : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-red-50 dark:bg-red-500/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.name}
              </button>
            )
          })}
        </div>

        {/* Contact & CTA */}
        <div className="flex items-center space-x-4">
          <div className="hidden xl:flex items-center space-x-2 text-zinc-600 dark:text-zinc-300 magnetic-target group cursor-pointer" onClick={() => window.location.href="tel:+918860878346"}>
            <div className="w-8 h-8 bg-red-50 dark:bg-red-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-4 h-4 text-red-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-red-500 transition-colors">
                +91 8860878346
              </span>
            </div>
          </div>

          <MagneticButton
            onClick={() => handleServiceClick("Free Consultation")}
            className="hidden md:flex bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg hover:shadow-red-500/30 overflow-hidden"
          >
            <span className="relative z-10">Plans & Packages</span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -tranzinc-x-[150%] hover:tranzinc-x-[150%] transition-transform duration-700 ease-in-out"></div>
          </MagneticButton>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-zinc-900 dark:text-white" /> : <Menu className="w-6 h-6 text-zinc-900 dark:text-white" />}
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[80px] left-4 right-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 shadow-2xl rounded-2xl overflow-hidden pointer-events-auto lg:hidden"
          >
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={link.action}
                  className="px-6 py-4 text-left font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-red-50 dark:hover:bg-zinc-800 hover:text-red-500 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="px-6 pt-4 pb-2 mt-2 border-t border-zinc-100 dark:border-zinc-800">
                <button
                  onClick={() => handleServiceClick("Free Consultation")}
                  className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-3 rounded-xl font-bold text-sm shadow-md"
                >
                  Get Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
