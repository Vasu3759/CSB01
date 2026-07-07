"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User, Sparkles, Zap, Brain, ArrowUp } from "lucide-react"

export default function AIBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: "Hi there! I'm from the Chalksnboard support team. How can I help you today? What's your name?",
      timestamp: new Date()
    }
  ])
  const [conversationStep, setConversationStep] = useState(0)
  const [userInfo, setUserInfo] = useState({
    name: "",
    institutionType: "",
    institutionName: "",
    phone: ""
  })
  const [negotiationStep, setNegotiationStep] = useState(0)
  const [currentService, setCurrentService] = useState("")
  const [conversationHistory, setConversationHistory] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Comprehensive knowledge base
  const knowledgeBase = {
    company: {
      name: "Chalksnboard",
      founded: "2020",
      experience: "5+ years",
      projects: "100+",
      clients: "100+",
      countries: "India",
      description: "A marketing agency combining cutting-edge technology with human creativity. We specialize in digital marketing solutions for businesses of all sizes.",
      mission: "To help businesses grow through strategic, data-driven marketing solutions",
      values: ["Ethical Practices", "Results-Driven", "Innovation", "Client-Centric"],
      team: {
        ceo: "Vasudev Bansal - Founder & CEO, strategic marketing visionary",
        cmo: "Priya Agarwal - Chief Marketing Officer, digital marketing expert",
        cto: "Rahul Gupta - Chief Technology Officer, automation specialist"
      }
    },
    services: {
      "SEO (Search Engine Optimization)": {
        description: "Improve your website's visibility on search engines and attract more organic traffic. For schools, this means parents searching for 'best schools near me' or 'top 10 schools' will find your school first in Google search results.",
        features: ["Keyword Research & Analysis", "On-Page Optimization", "Technical SEO Audit", "Link Building", "Local SEO", "Content Optimization", "Site Speed Optimization", "Mobile SEO", "School-specific Keywords", "Admission-focused SEO"],
        pricing: "Starting from ₹25,000/month",
        schoolBenefits: "How SEO of your School can help in Admissions? Imagine parents searching schools nearby get your school's information in 1st Place in Search like Google, etc. Our SEO Services help you create a Strong Digital Search Engine Presence by using high search key words like 'Best School near me' or 'Top 10 Schools' etc. Our Paid Listing team use keywords to Rank your School and get strong SEO Presence."
      },
      "PPC & Paid Ads": {
        description: "Maximize ROI with targeted pay-per-click advertising campaigns",
        features: ["Google Ads", "Facebook & Instagram Ads", "Campaign Setup", "Audience Targeting", "Performance Tracking", "Conversion Optimization"],
        pricing: "Starting from ₹35,000/month"
      },
      "Content Marketing": {
        description: "Drive brand awareness and customer loyalty through high-quality, relevant content",
        features: ["Content Strategy", "Blog & Article Writing", "Infographics", "Video Content", "Social Media Content", "Content Distribution"],
        pricing: "Starting from ₹20,000/month"
      },
      "Email Marketing": {
        description: "Reach your audience directly with personalized email campaigns",
        features: ["Campaign Strategy", "Personalized Emails", "Automation", "A/B Testing", "Analytics & Reporting", "List Management"],
        pricing: "Starting from ₹15,000/month"
      },
      "Social Media Management": {
        description: "360-degree social media management solutions for building strong digital presence",
        features: ["Content Calendar", "Post Designing", "Captions & Hashtags", "Performance Tracking", "Community Management"],
        pricing: "Starting from ₹30,000/month"
      },
      "Website Development": {
        description: "Fast, secure, and scalable websites tailored to your business needs",
        features: ["Responsive Design", "SEO Ready", "Landing Pages", "Lead Forms", "Content Management System", "Custom Integrations"],
        pricing: "Starting from ₹50,000"
      },
      "Mobile App Development": {
        description: "Build robust, scalable, and user-friendly mobile applications",
        features: ["iOS & Android Apps", "Cross-Platform Solutions", "App Store Deployment", "UI/UX for Mobile", "Performance Optimization"],
        pricing: "Starting from ₹2,00,000"
      },
      "UI/UX Design": {
        description: "Enhance user satisfaction with intuitive, visually appealing design",
        features: ["User Research & Analysis", "Wireframing & Prototyping", "Visual Design", "Interaction Design", "Usability Testing"],
        pricing: "Starting from ₹40,000"
      },
      "Brand Films": {
        description: "Compelling brand films that highlight unique strengths and create lasting impact. Brand Films help narrate the story of Your School Better! We make Stunning Brand Films for Schools that help parents to finalize the admissions of their kids.",
        features: ["Video shoot", "Professional Voice Over", "Video Editing", "Content for SM ads", "School Storytelling", "Admission-focused Content"],
        pricing: "₹1,92,000 (3 videos: 2Min30Sec, 1Min30Sec, 50Sec)",
        sampleVideos: [
          {
            name: "GD Goenka",
            url: "https://youtu.be/ObJ1SE5IRq0?si=P2sX2OGDWkDyjmA9"
          },
          {
            name: "SRI SRI Academy",
            url: "https://www.youtube.com/watch?v=nEe02FDP1Cc"
          },
          {
            name: "DPS Kurukshetra",
            url: "https://www.youtube.com/watch?v=ZeduHhtyW-0"
          },
          {
            name: "Sri Ram Wonder Years",
            url: "https://youtu.be/Z1nscIn6pfg?si=YetQ5B0dM2i_qGCF"
          }
        ]
      },
      "Tele Calling & Counselling": {
        description: "Professional tele-calling and counselling services for lead management",
        features: ["Lead Follow-up", "Counselling Script", "CRM Update", "Admission Assistance"],
        pricing: "₹15,000/month"
      },
      "Google My Business": {
        description: "Complete Google My Business optimization and management",
        features: ["Profile Setup", "Review Management", "Weekly Posts", "Local SEO Optimization"],
        pricing: "₹20,000"
      }
    },
    packages: {
      "Master Plan for Admission": {
        cost: "₹2,50,000",
        features: ["Facebook + Instagram + GMB Daily 1 Post & Weekly 2 Reels", "Website SEO (On Page / Off Page)", "GMB SEO", "Meta + Google Lead Generation", "Lead Magnet Management"]
      },
      "Ultimate Admission Plan": {
        cost: "₹3,10,000",
        features: ["Dedicated Tele Counsellor", "Dedicated Admission Counsellor", "Physical Campaigning", "Pre-Primary Collaboration", "Referral Admission Drive", "Physical Counselling", "All features from Master Plan"]
      },
      "Plan A": {
        cost: "₹55,000",
        features: ["Meta Lead Generation", "50-100 leads", "Lead Management"]
      },
      "Plan B": {
        cost: "₹90,000",
        features: ["Google & Meta Leads", "100-150 leads", "Landing Page", "Lead Management"]
      },
      "Plan C": {
        cost: "₹1,30,000",
        features: ["Plan A + TeleCounselling", "150-200 leads", "2 Hook up Reels", "Tele Calling"]
      },
      "Plan D": {
        cost: "₹1,40,000",
        features: ["Plan B + Telecounselling", "150-200 leads", "4 Hook up Reels", "Landing Page", "Tele Calling"]
      },
      "Plan E": {
        cost: "₹1,80,000",
        features: ["Plan B + Telecounselling", "150-200 leads", "4 Hook up Reels & SM Management", "Landing Page", "Tele Calling"]
      }
    },
    contact: {
      phone: "+918860878346",
      email: "info@chalksnboard.com",
      whatsapp: "+919211580208",
      address: "Delhi, India"
    },
    industries: ["Education (Schools, Colleges)", "Healthcare", "E-commerce", "Real Estate", "Technology", "Startups", "Fortune 500 Companies"],
    results: {
      "Lead Generation": "300% increase in leads",
      "Admissions": "150% increase in admissions",
      "ROI": "500% ROI improvement",
      "Growth": "10X business growth"
    }
  }

  const analyzeConversationContext = (userInput, history) => {
    const input = userInput.toLowerCase()
    
    // Check if user is referring to previous topics
    const recentTopics = history.slice(-6).map(msg => msg.content.toLowerCase())
    const hasDiscussedSEO = recentTopics.some(msg => msg.includes('seo') || msg.includes('search engine'))
    const hasDiscussedBrandFilms = recentTopics.some(msg => msg.includes('brand film') || msg.includes('video'))
    const hasDiscussedPricing = recentTopics.some(msg => msg.includes('price') || msg.includes('cost') || msg.includes('budget'))
    const hasDiscussedServices = recentTopics.some(msg => msg.includes('service') || msg.includes('offer'))
    
    return {
      hasDiscussedSEO,
      hasDiscussedBrandFilms,
      hasDiscussedPricing,
      hasDiscussedServices,
      recentTopics
    }
  }

  const generateResponse = (userInput) => {
    const input = userInput.toLowerCase()
    const context = analyzeConversationContext(userInput, conversationHistory)
    
    // SEO for schools specific response (highest priority)
    if ((input.includes("seo") || input.includes("search engine")) && (input.includes("school") || input.includes("admission") || input.includes("education"))) {
      return `How SEO of your School can help in Admissions? 

Imagine parents searching schools nearby get your school's information in 1st Place in Search like Google, etc. 

Our SEO Services help you create a Strong Digital Search Engine Presence by using high search key words like "Best School near me" or "Top 10 Schools" etc. 

Our Paid Listing team use keywords to Rank your School and get strong SEO Presence.

This means when parents search for schools in your area, your school will appear first in Google search results, leading to more inquiries and admissions. Would you like to know more about our school-specific SEO packages?`
    }
    
    // SEO specific response (general) - higher priority than company info
    if (input.includes("seo") || input.includes("search engine optimization")) {
      const seoInfo = knowledgeBase.services["SEO (Search Engine Optimization)"]
      let response = ""
      
      // Check if we've discussed SEO before
      if (context.hasDiscussedSEO) {
        response = `Great! I see you're interested in SEO again. SEO (Search Engine Optimization): ${seoInfo.description}. Key features include: ${seoInfo.features.join(", ")}. Pricing starts from ${seoInfo.pricing}.`
      } else {
        response = `Excellent! Let me tell you about SEO (Search Engine Optimization): ${seoInfo.description}. Key features include: ${seoInfo.features.join(", ")}. Pricing starts from ${seoInfo.pricing}.`
      }
      
      // Add school-specific SEO information if asking about SEO for schools
      if (input.includes("school") || input.includes("admission") || input.includes("education")) {
        response += `\n\n${seoInfo.schoolBenefits}`
      }
      
      // Contextual follow-up based on conversation history
      if (context.hasDiscussedPricing) {
        response += `\n\nSince we discussed pricing earlier, would you like to get a specific quote for your SEO needs?`
      } else if (context.hasDiscussedServices) {
        response += `\n\nHow does SEO compare to the other services we discussed? What specific aspect interests you most?`
      } else {
        response += `\n\nWhat specific aspect of SEO would you like to know more about? Or would you like to discuss pricing for your specific needs?`
      }
      
      return response
    }
    
    // Brand Films specific response
    if (input.includes("brand film") || input.includes("brand films") || input.includes("video") && input.includes("school")) {
      const brandFilmsInfo = knowledgeBase.services["Brand Films"]
      let response = ""
      
      // Check if we've discussed Brand Films before
      if (context.hasDiscussedBrandFilms) {
        response = `Great! You're back to Brand Films. Let me remind you How Brand Films Help?\n\nBrand Films help narrate the story of Your School Better! We make Stunning Brand Films for Schools that help parents to finalize the admissions of their kids.\n\nKey features include: ${brandFilmsInfo.features.join(", ")}. Pricing: ₹192,000 (3 videos: 2Min30Sec, 1Min30Sec, 50Sec).\n\nExplore our Sample Brand Films:\n`
      } else {
        response = `Excellent choice! Let me tell you How Brand Films Help?\n\nBrand Films help narrate the story of Your School Better! We make Stunning Brand Films for Schools that help parents to finalize the admissions of their kids.\n\nKey features include: ${brandFilmsInfo.features.join(", ")}. Pricing: ₹192,000 (3 videos: 2Min30Sec, 1Min30Sec, 50Sec).\n\nExplore our Sample Brand Films:\n`
      }
      
      brandFilmsInfo.sampleVideos.forEach((video, index) => {
        response += `${index + 1}) ${video.name}\n${video.url}\n`
      })
      
      // Contextual follow-up based on conversation history
      if (context.hasDiscussedPricing) {
        response += `\n\nSince we discussed pricing earlier, would you like to get a customized quote for Brand Films?`
      } else if (context.hasDiscussedServices) {
        response += `\n\nHow do Brand Films compare to the other services we discussed? What do you think about these samples?`
      } else {
        response += `\n\nWhat do you think about these samples? Would you like to discuss pricing or learn more about the process?`
      }
      
      setCurrentService("Brand Films")
      return response
    }
    
    // Services
    if (input.includes("service") || input.includes("offer") || input.includes("provide")) {
      const serviceList = Object.keys(knowledgeBase.services)
      return `Absolutely! We offer comprehensive digital marketing services:

${serviceList.map((service, index) => `${index + 1}. ${service}`).join('\n')}

Each service is tailored to your specific needs and goals. Which service interests you most? I'd love to tell you more about any of them!`
    }
    
    // Company information (lower priority)
    if (input.includes("company") || input.includes("chalksnboard")) {
      return `Chalksnboard is a marketing agency, founded in 2020. We have 5+ years of experience, completed 100+ projects, served 100+ clients across India. Our mission is to help businesses grow through strategic, data-driven marketing solutions. We combine cutting-edge technology with human creativity to deliver exceptional results.`
    }
    
    // Specific service details for other services
    for (const [serviceName, serviceInfo] of Object.entries(knowledgeBase.services)) {
      if (serviceName !== "SEO (Search Engine Optimization)" && (input.includes(serviceName.toLowerCase()) || input.includes(serviceName.split(" ")[0].toLowerCase()))) {
        let response = `${serviceName}: ${serviceInfo.description}. Key features include: ${serviceInfo.features.join(", ")}. Pricing starts from ${serviceInfo.pricing}.`
        response += `\n\nWould you like to know more details or get a customized quote?`
        return response
      }
    }
    
    // Pricing
    if (input.includes("price") || input.includes("cost") || input.includes("package")) {
      if (currentService === "Brand Films") {
        return `Great question about pricing! For Brand Films, our standard pricing is ₹192,000 for 3 videos (2Min30Sec, 1Min30Sec, 50Sec). However, I can work with your budget to find the best solution. What's your budget for this project?`
      }
      
      // Contextual pricing response based on conversation history
      if (context.hasDiscussedSEO) {
        return `Perfect! Since we discussed SEO earlier, let me give you specific pricing for SEO services. Our SEO packages start from ₹25,000/month and can go up to ₹1,00,000/month depending on your needs. Would you like a detailed quote for your specific requirements?`
      } else if (context.hasDiscussedBrandFilms) {
        return `Great! Since we discussed Brand Films, let me give you specific pricing. Our Brand Films package is ₹192,000 for 3 videos, but I can work with your budget. What's your budget range?`
      } else if (context.hasDiscussedServices) {
        return `Excellent! Since we discussed our services earlier, let me give you specific pricing. Our packages start from ₹15,000/month for basic services to ₹3,00,000+/month for comprehensive solutions. Which service interests you most for a detailed quote?`
      }
      
      return `I'd be happy to discuss pricing with you! Our pricing varies based on your needs and project scope. We offer flexible packages starting from ₹15,000/month for basic services to comprehensive solutions at ₹3,00,000+/month. We also have specialized admission packages starting from ₹55,000. What type of service are you interested in? I can give you a more specific quote!`
    }
    
    // Contact information
    if (input.includes("contact") || input.includes("phone") || input.includes("email") || input.includes("reach")) {
      return `Perfect! I'd love to connect you with our team. You can reach us at: Phone: ${knowledgeBase.contact.phone}, Email: ${knowledgeBase.contact.email}, WhatsApp: ${knowledgeBase.contact.whatsapp}. We're available for immediate assistance and free consultations. What's the best way to reach you?`
    }
    
    // Results and success stories
    if (input.includes("result") || input.includes("success") || input.includes("case study")) {
      return `Our clients have achieved remarkable results: 300% increase in leads, 150% increase in admissions, 500% ROI improvement, and 10X business growth. We have case studies across education, healthcare, e-commerce, and technology sectors. Would you like to see specific examples?`
    }
    
    // Team information
    if (input.includes("team") || input.includes("founder") || input.includes("ceo")) {
      return `Our leadership team includes: ${knowledgeBase.team.ceo}, ${knowledgeBase.team.cmo}, and ${knowledgeBase.team.cto}. We have 55+ team members across creative, development, marketing, and analytics departments.`
    }
    
    // Industries served
    if (input.includes("industry") || input.includes("sector") || input.includes("business")) {
      return `We work with businesses of all sizes across various industries: ${knowledgeBase.industries.join(", ")}. We have specialized experience in the education sector and understand industry-specific challenges and regulations.`
    }
    
    // Consultation
    if (input.includes("consultation") || input.includes("meet") || input.includes("discuss")) {
      return `We offer free consultations to understand your needs and provide customized solutions. You can schedule a consultation by calling ${knowledgeBase.contact.phone}, emailing ${knowledgeBase.contact.email}, or messaging us on WhatsApp at ${knowledgeBase.contact.whatsapp}.`
    }
    
    // Contextual default responses based on conversation history
    if (context.hasDiscussedSEO && context.hasDiscussedBrandFilms) {
      return "Great! I see we've discussed both SEO and Brand Films. Which of these services interests you more, or would you like to explore other options? I'm here to help you make the best choice for your needs!"
    } else if (context.hasDiscussedPricing) {
      return "Since we discussed pricing earlier, would you like to get a specific quote for any of our services? I can help you find the best package for your budget!"
    } else if (context.hasDiscussedServices) {
      return "Perfect! We've covered our services. What specific aspect would you like to dive deeper into? I can provide more details about any service that interests you!"
    } else if (context.hasDiscussedSEO) {
      return "Great! Since we discussed SEO, would you like to know about our other services or get more specific information about SEO packages?"
    } else if (context.hasDiscussedBrandFilms) {
      return "Excellent! Since we discussed Brand Films, would you like to explore our other services or get more details about the video production process?"
    }
    
    // Default responses with conversation continuation
    const defaultResponses = [
      "That's interesting! I'd love to help you with that. What specific aspect would you like to explore further?",
      "Great question! Let me know what other information you need about our services or if you have any other questions.",
      "I'm here to help! What else would you like to know about our digital marketing solutions?",
      "Thanks for asking! Is there anything specific about our services, pricing, or process you'd like to discuss?",
      "Perfect! What other questions do you have? I'm here to provide all the information you need.",
      "Excellent! What's your next question? I'm ready to help you with any aspect of our services.",
      "That's helpful to know! What other information can I provide you with today?",
      "I appreciate your interest! What else would you like to learn about our digital marketing solutions?"
    ]
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setConversationHistory(prev => [...prev, userMessage])
    const currentInput = inputValue
    setInputValue("")
    setIsTyping(true)

    // Handle conversation flow
    setTimeout(() => {
      let botResponse = ""
      
      if (conversationStep === 0) {
        // After initial greeting, user provides name
        setUserInfo(prev => ({ ...prev, name: currentInput }))
        setConversationStep(1)
        botResponse = `Hi ${currentInput}! It's a pleasure to meet you. May I know if you are from School, College, University or Institute?`
      } else if (conversationStep === 1) {
        // After institution type, ask for institution name
        setUserInfo(prev => ({ ...prev, institutionType: currentInput }))
        setConversationStep(2)
        botResponse = `Don't mind if I know the name of your ${currentInput} place?`
      } else if (conversationStep === 2) {
        // After institution name, confirm and ask about services
        setUserInfo(prev => ({ ...prev, institutionName: currentInput }))
        setConversationStep(3)
        botResponse = `Okay, so you are from ${currentInput}. Would you like to know about our services?`
      } else if (conversationStep === 3) {
        // After services question, show service list
        setConversationStep(4)
        const serviceList = Object.keys(knowledgeBase.services)
        botResponse = `Absolutely! We offer comprehensive digital marketing services:

${serviceList.map((service, index) => `${index + 1}. ${service}`).join('\n')}

Each service is tailored to your specific needs and goals. Which service interests you most? I'd love to tell you more about any of them!`
      } else {
        // Check for negotiation flow
        if (currentService === "Brand Films" && (currentInput.toLowerCase().includes("quote") || currentInput.toLowerCase().includes("price") || currentInput.toLowerCase().includes("budget"))) {
          if (negotiationStep === 0) {
            setNegotiationStep(1)
            botResponse = "Excellent! I'd be happy to help you with a customized quote for Brand Films. What's your budget for this project? I want to make sure we can work within your range."
          } else if (negotiationStep === 1) {
            // User provided their budget, now negotiate
            setNegotiationStep(2)
            botResponse = `I understand your budget considerations perfectly! Let me offer you our best deal: ₹50,000 for the complete Brand Films package (3 videos: 2Min30Sec, 1Min30Sec, 50Sec). This includes video shoot, professional voice over, video editing, and content for social media ads. What do you think about this offer?`
          } else {
            // Normal conversation flow
            botResponse = generateResponse(currentInput)
          }
        } else {
          // Normal conversation flow
          botResponse = generateResponse(currentInput)
        }
      }
      
      const botMessage = {
        id: Date.now() + 1,
        type: "bot",
        content: botResponse,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      setConversationHistory(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // Random delay between 1-2 seconds
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickReplies = [
    { text: "Our Services", icon: "🚀" },
    { text: "Pricing", icon: "💰" },
    { text: "Contact Info", icon: "📞" },
    { text: "About Company", icon: "🏢" }
  ]

  const handleQuickReply = (reply) => {
    // Only show quick replies after the initial conversation flow is complete
    if (conversationStep < 4) {
      return
    }

    const responses = {
      "Our Services": `We offer comprehensive digital marketing services:

${Object.keys(knowledgeBase.services).map((service, index) => `${index + 1}. ${service}`).join('\n')}

Each service is tailored to your specific needs and goals. Which service interests you most?`,
      "Pricing": "Our pricing varies based on your specific needs and project scope. We offer flexible packages starting from ₹15,000/month for basic services to comprehensive solutions at ₹3,00,000+/month. We also have specialized admission packages starting from ₹55,000. Would you like to schedule a free consultation to discuss your requirements?",
      "Contact Info": `You can reach us at: Phone: ${knowledgeBase.contact.phone}, Email: ${knowledgeBase.contact.email}, WhatsApp: ${knowledgeBase.contact.whatsapp}. We're available for immediate assistance and free consultations.`,
      "About Company": `${knowledgeBase.company.description} Founded in ${knowledgeBase.company.founded}, we have ${knowledgeBase.company.experience} of experience, completed ${knowledgeBase.company.projects} projects, and served ${knowledgeBase.company.clients} clients across ${knowledgeBase.company.countries} countries. We're India's first AI-powered marketing agency.`
    }

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: reply,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        type: "bot",
        content: responses[reply],
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <>
       {/* Live Support Toggle Button */}
       <div className="fixed bottom-6 right-6 z-[60]">
         <button
           onClick={() => setIsOpen(!isOpen)}
           className="group relative bg-zinc-900 dark:bg-zinc-800 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 magnetic-target border border-zinc-700 hover:border-red-500 z-50 overflow-hidden"
           aria-label="Open Live Chat"
         >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
                     {/* Icon */}
           <div className="relative z-10">
             {isOpen ? (
               <X className="w-5 h-5 sm:w-6 sm:h-6" />
             ) : (
               <div className="relative">
                 <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                 <span className="absolute -top-1 -right-1 flex h-3 w-3 sm:h-4 sm:w-4 z-20">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-3 w-3 sm:h-4 sm:w-4 bg-red-500 border-2 border-zinc-900"></span>
                 </span>
               </div>
             )}
           </div>
        </button>
      </div>

             {/* AI Bot Chat Window */}
       {isOpen && (
         <div className={`fixed bottom-14 right-2 sm:right-6 z-[60] transition-all duration-500 ease-in-out ${
           isMinimized ? 'w-72 sm:w-80 h-16' : 'w-[calc(100vw-1rem)] sm:w-96 h-[400px] sm:h-[500px] max-w-sm'
         }`}>
          <div className="relative w-full h-full">
                         {/* Glassmorphism background */}
             <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl"></div>
             
             {/* Gradient overlay */}
             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-zinc-500/10 to-cyan-500/10 rounded-2xl sm:rounded-3xl"></div>
            
            {/* Main content */}
            <div className="relative w-full h-full flex flex-col">
              {/* Header */}
              <div className="p-3 sm:p-4 bg-zinc-900 border-b border-zinc-700/50 flex justify-between items-center rounded-t-2xl sm:rounded-t-3xl relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent"></div>
                <div className="flex items-center gap-2 sm:gap-3 relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-500/20 p-1.5 sm:p-2 border border-red-400/30">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-lg">Live Support</h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-green-400 text-[10px] sm:text-xs font-medium">Online now</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 sm:space-x-2 relative z-10">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-white/80 hover:text-white transition-colors p-1 text-xs font-medium"
                  >
                    {isMinimized ? "+" : "-"}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-white transition-colors p-1 text-xs font-medium"
                  >
                    x
                  </button>
                </div>
              </div>

              {!isMinimized && (
                <>
                                     {/* Messages */}
                   <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gradient-to-b from-gray-50/50 to-white/30 backdrop-blur-sm">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                                                 <div
                           className={`max-w-[85%] sm:max-w-xs lg:max-w-md px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl ${
                             message.type === "user"
                               ? "bg-gradient-to-r from-purple-600 to-zinc-600 text-white shadow-lg"
                               : "bg-white/80 backdrop-blur-sm text-gray-800 border border-white/20 shadow-lg"
                           }`}
                         >
                                                     <div className="flex items-start space-x-1.5 sm:space-x-2">
                             {message.type === "bot" && (
                               <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-400 to-zinc-400 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                                 <img src="/images/download.png" alt="AI Assistant" className="w-2.5 h-2.5 sm:w-3 sm:h-3 object-contain" />
                               </div>
                             )}
                             <div className="flex-1">
                               <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-line">{message.content}</div>
                               <p className="text-xs opacity-70 mt-1 sm:mt-2">
                                 {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                               </p>
                             </div>
                             {message.type === "user" && (
                               <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-400 to-zinc-400 rounded-full flex items-center justify-center flex-shrink-0">
                                 <User className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                               </div>
                             )}
                           </div>
                        </div>
                      </div>
                    ))}
                    
                                         {isTyping && (
                       <div className="flex justify-start">
                         <div className="bg-white/80 backdrop-blur-sm text-gray-800 border border-white/20 rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg">
                           <div className="flex items-center space-x-2 sm:space-x-3">
                             <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-400 to-zinc-400 rounded-full flex items-center justify-center overflow-hidden">
                               <img src="/images/download.png" alt="AI Assistant" className="w-2.5 h-2.5 sm:w-3 sm:h-3 object-contain" />
                             </div>
                             <div className="flex space-x-1">
                               <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-bounce"></div>
                               <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                               <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                             </div>
                           </div>
                         </div>
                       </div>
                     )}
                    
                    <div ref={messagesEndRef} />
                  </div>

                                     {/* Quick Replies */}
                   {messages.length === 1 && conversationStep >= 4 && (
                     <div className="p-3 sm:p-4 bg-gradient-to-r from-purple-50/50 to-zinc-50/50 backdrop-blur-sm border-t border-white/20">
                       <p className="text-xs text-gray-600 mb-2 sm:mb-3 font-medium">Quick replies:</p>
                       <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                                                 {quickReplies.map((reply) => (
                           <button
                             key={reply.text}
                             onClick={() => handleQuickReply(reply.text)}
                             className="text-xs bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl px-2 py-1.5 sm:px-3 sm:py-2 hover:bg-white hover:shadow-lg transition-all duration-200 flex items-center space-x-1.5 sm:space-x-2 group"
                           >
                             <span className="text-sm sm:text-lg">{reply.icon}</span>
                             <span className="text-gray-700 group-hover:text-gray-900 text-xs">{reply.text}</span>
                           </button>
                         ))}
                      </div>
                    </div>
                  )}

                                     {/* Input */}
                   <div className="p-3 sm:p-4 bg-gradient-to-r from-gray-50/50 to-white/30 backdrop-blur-sm border-t border-white/20 rounded-b-2xl sm:rounded-b-3xl">
                     <div className="flex space-x-2 sm:space-x-3">
                                             <div className="flex-1 relative">
                         <input
                           ref={inputRef}
                           type="text"
                           value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}
                           onKeyPress={handleKeyPress}
                           placeholder="Ask about our services, pricing, or company..."
                           className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-xs sm:text-sm placeholder-gray-500 shadow-lg"
                           disabled={isTyping}
                         />
                         <div className="absolute right-2 sm:right-3 top-1/2 transform -tranzinc-y-1/2">
                           <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                         </div>
                       </div>
                                             <button
                         onClick={handleSendMessage}
                         disabled={!inputValue.trim() || isTyping}
                         className="bg-gradient-to-r from-purple-600 to-zinc-600 text-white p-2 sm:p-3 rounded-xl sm:rounded-2xl hover:from-purple-700 hover:to-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center"
                       >
                         <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                       </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
