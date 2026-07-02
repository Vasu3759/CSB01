"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Phone, Facebook, Instagram, Youtube, Twitter } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import AIBot from "./AIBot"

export default function Footer() {
  const router = useRouter()
  const pathname = usePathname()

  const scrollToSection = (sectionId) => {
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const openSocialMedia = (platform) => {
    const urls = {
      facebook: "https://facebook.com/chalksnboard",
      instagram: "https://www.instagram.com/chalksnboard_official/",
      youtube: "https://www.youtube.com/@chalksnboard",
      twitter: "https://twitter.com/chalksnboard",
    }
    window.open(urls[platform], "_blank")
  }

  const openPage = (page) => {
    if (page === "Privacy Policy") {
      router.push("/privacy-policy")
    } else if (page === "Terms of Service") {
      router.push("/terms-and-conditions")
    } else {
      alert(`Opening ${page} page...`)
    }
  }

  return (
    <>
      {/* AI Bot Component */}
      <AIBot />

      {/* Floating WhatsApp Chat Icon (global) */}
      <a
        href="https://wa.me/918860878346"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-colors duration-200"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
      <footer id="contact" className="bg-slate-900 text-white py-12 lg:py-16 border-t border-slate-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4 cursor-pointer" onClick={() => scrollToSection("hero")}>
                <div>
                  <div className="text-white font-bold text-xl tracking-tight">
                    CHALKS<span className="text-red-500">N</span>BOARD
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Digital Marketing Agency with a proven track record since 2020</p>
              <div className="flex space-x-4 mt-6">
                <Facebook
                  className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors hover:scale-110"
                  onClick={() => openSocialMedia("facebook")}
                />
                <Instagram
                  className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors hover:scale-110"
                  onClick={() => openSocialMedia("instagram")}
                />
                <Youtube
                  className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors hover:scale-110"
                  onClick={() => openSocialMedia("youtube")}
                />
                <Twitter
                  className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors hover:scale-110"
                  onClick={() => openSocialMedia("twitter")}
                />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-red-500">Services</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors flex items-center group">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors flex items-center group">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors flex items-center group">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    SEO Services
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors flex items-center group">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    PPC & Paid Ads
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors flex items-center group">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Website Design
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors flex items-center group">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Content Marketing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-red-500">Company</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors flex items-center group">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors flex items-center group">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="hover:text-white transition-colors flex items-center group">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Careers
                  </Link>
                </li>
                <li>
                  <button onClick={() => scrollToSection("portfolio")} className="hover:text-white transition-colors flex items-center group text-left">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Portfolio
                  </button>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors flex items-center group">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors flex items-center group">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-red-500">Contact</h4>
              <div className="space-y-3 text-gray-400 text-sm">
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-500 transition-colors">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <a href="tel:+918860878346" className="hover:text-white transition-colors">
                    +91 8860878346
                  </a>
                </div>
                <div className="flex items-center space-x-3 group mt-2">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-500 transition-colors">
                    <span className="text-white font-bold">@</span>
                  </div>
                  <a href="mailto:info@chalksnboard.com" className="hover:text-white transition-colors">
                    info@chalksnboard.com
                  </a>
                </div>
              </div>
              <button
                onClick={() => scrollToSection("hero")}
                className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2.5 rounded-full mt-6 font-semibold hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5"
              >
                Get Quote
              </button>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Chalksnboard. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
