"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "../Header"
import { ChevronDown, ChevronUp, HelpCircle, Search } from "lucide-react"

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("general")
  const router = useRouter()
  const [expandedFAQ, setExpandedFAQ] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { id: "general", name: "General", icon: "🏢" },
    { id: "services", name: "Services", icon: "🎯" },
    { id: "pricing", name: "Pricing", icon: "💰" },
    { id: "process", name: "Process", icon: "⚙️" },
    { id: "support", name: "Support", icon: "🤝" },
  ]

  const faqs = {
    general: [
      {
        question: "What is Chalksnboard and what do you do?",
        answer:
          "Chalksnboard is India's leading AI-powered digital marketing agency. We provide comprehensive marketing solutions including social media marketing, PPC advertising, SEO, website development, and brand strategy. We've been helping businesses grow since 2008 with our data-driven approach and innovative strategies.",
      },
      {
        question: "How long has Chalksnboard been in business?",
        answer:
          "We've been in business since 2008, giving us over 16 years of experience in digital marketing. During this time, we've completed 1000+ projects and helped hundreds of businesses achieve their growth objectives.",
      },
      {
        question: "Which countries do you serve?",
        answer:
          "We serve clients across 7 countries including India (Delhi, Jaipur, Mumbai), USA, UK, Canada, and UAE. Our global presence allows us to understand different markets and provide localized strategies.",
      },
      {
        question: "What makes Chalksnboard different from other agencies?",
        answer:
          "We're India's first AI-powered marketing agency, combining cutting-edge technology with human creativity. Our ethical approach, transparent workflow, and proven track record of delivering 10X growth make us unique. We function as your extended team, not just a service provider.",
      },
    ],
    services: [
      {
        question: "What digital marketing services do you offer?",
        answer:
          "We offer a comprehensive range of services including Social Media Marketing, PPC & Paid Advertising, SEO, Content Marketing, Website Development, Email Marketing, Brand Strategy, Mobile App Development, and Marketing Automation.",
      },
      {
        question: "Do you work with small businesses or only large corporations?",
        answer:
          "We work with businesses of all sizes - from startups and small businesses to large corporations and Fortune 500 companies. Our packages are designed to accommodate different budgets and requirements.",
      },
      {
        question: "Can you help with both B2B and B2C marketing?",
        answer:
          "Yes, we have extensive experience in both B2B and B2C marketing. Our team understands the unique challenges and opportunities in each sector and creates tailored strategies accordingly.",
      },
      {
        question: "Do you provide industry-specific marketing solutions?",
        answer:
          "We have specialized experience in various industries including Education (Schools, Colleges), Healthcare, E-commerce, Real Estate, Technology, and more. We understand industry-specific challenges and regulations.",
      },
      {
        question: "Industry-Specific Knowledge",
        answer: "We specialize in the education sector, understanding the unique challenges and opportunities that schools faces.",
      },
      {
        question: "Data-Driven Results",
        answer: "We rely on analytics and performance metrics to guide every decision, ensuring campaigns are optimized for ROI and aligned with your school's growth goals.",
      },
      {
        question: "Transparent Reporting",
        answer: "We provide clear, regular reports that highlight campaign performance, insights, and next steps—keeping you in the loop every step of the way.",
      },
    ],
    pricing: [
      {
        question: "How much do your services cost?",
        answer:
          "Our pricing varies based on the services required, project scope, and duration. We offer flexible packages starting from ₹15,000/month for basic services to comprehensive solutions at ₹3,00,000+/month. Contact us for a customized quote.",
      },
      {
        question: "Do you offer monthly packages or only long-term contracts?",
        answer:
          "We offer both monthly packages and long-term contracts. While we recommend longer commitments for better results, we understand business needs vary and provide flexible options.",
      },
      {
        question: "Is there a setup fee for new projects?",
        answer:
          "Setup fees depend on the complexity of the project. For standard packages, setup is often included. For custom solutions requiring extensive initial work, there may be a one-time setup fee which will be discussed upfront.",
      },
      {
        question: "Do you offer any guarantees on results?",
        answer:
          "While we can't guarantee specific numbers due to market variables, we do guarantee our commitment to achieving your goals. We provide detailed reporting and work continuously to optimize performance. Many of our clients see significant improvements within 3-6 months.",
      },
    ],
    process: [
      {
        question: "What is your typical project workflow?",
        answer:
          "Our workflow includes: 1) Client Brief & Discovery, 2) Strategy Development & Planning, 3) Creative Development, 4) Implementation & Launch, 5) Monitoring & Optimization, 6) Reporting & Analysis. We maintain transparent communication throughout.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "Results timeline varies by service: PPC campaigns can show results within days, SEO typically takes 3-6 months, social media growth is usually visible within 2-3 months. We provide realistic timelines during our initial consultation.",
      },
      {
        question: "How do you measure and report success?",
        answer:
          "We use comprehensive analytics and KPIs relevant to your goals - website traffic, conversion rates, ROI, lead generation, brand awareness, etc. You'll receive detailed monthly reports and have access to real-time dashboards.",
      },
      {
        question: "Can I make changes to the strategy mid-project?",
        answer:
          "Yes, we believe in agile marketing. We regularly review performance and make adjustments as needed. Major strategy changes are discussed and approved, while minor optimizations happen continuously.",
      },
    ],
    support: [
      {
        question: "What kind of support do you provide?",
        answer:
          "We provide comprehensive support including dedicated account managers, 24/7 technical support, regular strategy consultations, performance reviews, and emergency assistance for critical issues.",
      },
      {
        question: "How can I contact your team?",
        answer:
          "You can reach us via phone (+91 88608 78346), email (info@chalksnboard.com), or through our website contact form. We also provide WhatsApp support for quick queries and have dedicated account managers for ongoing projects.",
      },
      {
        question: "Do you provide training for our internal team?",
        answer:
          "Yes, we offer training sessions for your internal team on various aspects of digital marketing, analytics tools, and best practices. This helps ensure smooth collaboration and knowledge transfer.",
      },
      {
        question: "What happens if I'm not satisfied with the results?",
        answer:
          "Client satisfaction is our priority. If you're not satisfied, we'll work with you to understand the issues and make necessary adjustments. We believe in building long-term relationships and will go the extra mile to ensure your success.",
      },
    ],
  }

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  const filteredFAQs = faqs[activeCategory].filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-900">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-orange-500 py-20 mt-16">
        <div className="container mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and pricing
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -tranzinc-y-1/2 text-white/40 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 px-12 py-4 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id)
                  router.push(`/${category.id}`)
                }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-red-500 text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-white font-semibold text-lg pr-4">{faq.question}</h3>
                    {expandedFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-white/60 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white/60 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white/40" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No FAQs Found</h3>
              <p className="text-white/60">Try adjusting your search terms or browse different categories.</p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-white/80 mb-6">
              Can't find what you're looking for? Our team is here to help with any questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
