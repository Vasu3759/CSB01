"use client"

import { useState } from "react"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import dynamic from "next/dynamic"

const AIMarketingSection = dynamic(() => import("../components/AIMarketingSection"))
const BrandFutureSection = dynamic(() => import("../components/BrandFutureSection"))
const ServicesSection = dynamic(() => import("../components/ServicesSection"))
const ComprehensiveServicesSection = dynamic(() => import("../components/ComprehensiveServicesSection"))
const MediaServicesSection = dynamic(() => import("../components/MediaServicesSection"))
const WorkflowSection = dynamic(() => import("../components/WorkflowSection"))
const MagazineStatsSection = dynamic(() => import("../components/MagazineStatsSection"))

const ServiceCardsSection = dynamic(() => import("../components/ServiceCardsSection"))
const CTASection = dynamic(() => import("../components/CTASection"))
const AdditionalServiceCardsSection = dynamic(() => import("../components/AdditionalServiceCardsSection"))
const AboutSection = dynamic(() => import("../components/AboutSection"))
const ResultsSection = dynamic(() => import("../components/ResultsSection"))
const PortfolioSection = dynamic(() => import("../components/PortfolioSection"))
const ReviewSection = dynamic(() => import("../components/ReviewSection"))
const GlobalPartnersSection = dynamic(() => import("../components/GlobalPartnersSection"))
const ClientLogosSection = dynamic(() => import("../components/ClientLogosSection"))
const Footer = dynamic(() => import("../components/Footer"))
const PageRouter = dynamic(() => import("../components/pages/PageRouter"))
const ServiceRouter = dynamic(() => import("../components/services/ServiceRouter"))
const VantaCloudsBackground = dynamic(() => import("../components/VantaCloudsBackground"))

export default function ChalksnboardClone() {
  const [currentPage, setCurrentPage] = useState("home")
  const [currentService, setCurrentService] = useState(null)
  const [currentPageName, setCurrentPageName] = useState(null)

  const handleServiceNavigation = (serviceName) => {
    // Route "Free Consultation" to page router instead of service router
    if (serviceName === "Free Consultation") {
      window.location.href = "/plans-and-packages/";
    } else {
      setCurrentService(serviceName)
      setCurrentPage("service")
    }
  }

  const handlePageNavigation = (pageName) => {
    setCurrentPageName(pageName)
    setCurrentPage("page")
  }

  const handleBackToHome = () => {
    setCurrentPage("home")
    setCurrentService(null)
    setCurrentPageName(null)
  }

  if (currentPage === "service") {
    return <ServiceRouter serviceName={currentService} onBack={handleBackToHome} />
  }

  if (currentPage === "page") {
    return <PageRouter pageName={currentPageName} onBack={handleBackToHome} />
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header onServiceClick={handleServiceNavigation} onPageClick={handlePageNavigation} />
      <HeroSection />
      <AIMarketingSection />
      
      <ServicesSection />
      <ComprehensiveServicesSection />
      <MediaServicesSection />
      <WorkflowSection />
      
      
      <ServiceCardsSection />
      <CTASection />
      <AdditionalServiceCardsSection />
      <AboutSection />
      
      <VantaCloudsBackground>
        <PortfolioSection />
      </VantaCloudsBackground>
      <ReviewSection />
      
      <ClientLogosSection />
      
    </div>
  )
}
