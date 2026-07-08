"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Tilt from "react-parallax-tilt"
import {
  Briefcase,
  MapPin,
  Clock,
  Banknote,
  Users,
  TrendingUp,
  Heart,
  Coffee,
  CheckCircle,
  Upload,
  User,
  Mail,
  Phone,
  ChevronRight,
  Sparkles,
  Search,
  FileText
} from "lucide-react"

import Header from "../Header"
import MagneticButton from "../ui/MagneticButton"
import VantaMinimalBackground from "../VantaMinimalBackground"

const jobOpenings = [
  {
    id: 1,
    title: "Senior Digital Marketing Manager",
    department: "Marketing",
    location: "Delhi, India",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹8-12 LPA",
    description: "Lead digital marketing campaigns and drive ROI for our clients.",
    requirements: [
      "3+ years in digital marketing",
      "Experience with Google Ads, Facebook Ads",
      "Strong analytical skills",
      "Team leadership experience",
    ],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹6-10 LPA",
    description: "Create stunning user experiences for web and mobile applications.",
    requirements: [
      "Proficiency in Figma, Adobe Creative Suite",
      "Strong portfolio of UI/UX work",
      "Understanding of user-centered design",
      "Experience with prototyping tools",
    ],
  },
  {
    id: 3,
    title: "Content Marketing Specialist",
    department: "Content",
    location: "Jaipur, India",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹4-7 LPA",
    description: "Develop engaging content strategies that drive brand awareness.",
    requirements: [
      "Excellent writing and editing skills",
      "SEO knowledge",
      "Social media expertise",
      "Creative thinking abilities",
    ],
  },
  {
    id: 4,
    title: "Full Stack Developer",
    department: "Technology",
    location: "Remote",
    type: "Full-time",
    experience: "2-5 years",
    salary: "₹7-15 LPA",
    description: "Build scalable web applications using modern technologies.",
    requirements: [
      "React.js, Node.js experience",
      "Database management skills",
      "API development experience",
      "Version control (Git) proficiency",
    ],
  },
  {
    id: 5,
    title: "Business Development Executive",
    department: "Sales",
    location: "Delhi, India",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹3-6 LPA + Incentives",
    description: "Drive business growth through client acquisition and relationship management.",
    requirements: [
      "Strong communication skills",
      "Sales experience preferred",
      "Client relationship management",
      "Target-oriented mindset",
    ],
  },
  {
    id: 6,
    title: "SEO Specialist",
    department: "Marketing",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹5-9 LPA",
    description: "Optimize websites and content for search engine rankings.",
    requirements: [
      "SEO tools expertise (Ahrefs, SEMrush)",
      "Technical SEO knowledge",
      "Content optimization skills",
      "Analytics and reporting experience",
    ],
  },
]

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState(jobOpenings[0])
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: jobOpenings[0].title,
    experience: "",
    resume: null,
  })
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState({ department: "", location: "", experience: "" })
  const [formErrors, setFormErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const benefits = [
    { icon: Heart, title: "Health Insurance", description: "Comprehensive medical coverage", color: "text-red-500" },
    { icon: TrendingUp, title: "Career Growth", description: "Clear advancement opportunities", color: "text-green-500" },
    { icon: Coffee, title: "Flexible Hours", description: "Work-life balance priority", color: "text-orange-500" },
    { icon: Users, title: "Team Events", description: "Regular team building activities", color: "text-zinc-500" },
    { icon: Banknote, title: "Performance Bonus", description: "Quarterly performance incentives", color: "text-emerald-500" },
    { icon: Briefcase, title: "Learning Budget", description: "Annual skill development allowance", color: "text-purple-500" },
  ]

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.department.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
    const matchesDepartment = filter.department ? job.department === filter.department : true
    const matchesLocation = filter.location ? job.location === filter.location : true
    const matchesExperience = filter.experience ? job.experience === filter.experience : true
    return matchesSearch && matchesDepartment && matchesLocation && matchesExperience
  })

  const handleJobSelect = (job) => {
    setSelectedJob(job)
    setApplicationForm({ ...applicationForm, position: job.title })
    setTimeout(() => {
      document.getElementById("job-details").scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setApplicationForm({ ...applicationForm, [name]: value })
    setFormErrors({ ...formErrors, [name]: undefined })
  }

  const handleFileChange = (e) => {
    setApplicationForm({ ...applicationForm, resume: e.target.files[0] })
    setFormErrors({ ...formErrors, resume: undefined })
  }

  const validateForm = () => {
    const errors = {}
    if (!applicationForm.name) errors.name = "Name is required"
    if (!applicationForm.email) errors.email = "Email is required"
    if (!applicationForm.phone) errors.phone = "Phone is required"
    if (!applicationForm.experience) errors.experience = "Experience is required"
    if (!applicationForm.resume) errors.resume = "Resume is required"
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      toast.error("Please fill all required fields.", { theme: "dark" })
      return
    }
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      toast.success("Application submitted successfully! We'll get back to you soon.", { theme: "dark" })
      setApplicationForm({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        resume: null,
      })
      setSelectedJob(null)
    }, 1500)
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white font-sans overflow-hidden">
      <Header />
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />

      {/* Premium Hero Section */}
      <section className="relative min-h-screen pt-24 pb-16 z-10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <VantaMinimalBackground />
        </div>
        
        {/* Ambient Glowing Orbs - GPU Accelerated */}
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none animate-[pulse_8s_ease-in-out_infinite] z-0 transform-gpu will-change-transform will-change-opacity"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-rose-500/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none animate-[pulse_12s_ease-in-out_infinite_reverse] z-0 transform-gpu will-change-transform will-change-opacity"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900 z-0 pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, type: "spring" }}>
            <div className="w-24 h-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
              <Briefcase className="w-12 h-12 text-red-500" />
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-xl tracking-tight"
          >
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Mission</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Build your career with India's leading AI-powered digital agency. We're looking for visionary thinkers to engineer the future of marketing.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <MagneticButton 
              onClick={() => document.getElementById("openings").scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-red-500/30 transition-all text-lg w-full sm:w-auto"
            >
              View Open Roles
            </MagneticButton>
            <MagneticButton 
              onClick={() => document.getElementById("culture").scrollIntoView({ behavior: "smooth" })}
              className="bg-zinc-800/80 backdrop-blur-md border border-zinc-700 text-white font-bold px-10 py-4 rounded-full hover:bg-zinc-700 hover:border-zinc-500 transition-all text-lg w-full sm:w-auto"
            >
              Explore Culture
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Culture & Perks */}
      <section id="culture" className="py-24 relative bg-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Why Join Us?</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto">We invest heavily in our people. From health and wellness to continuous learning, we provide an environment where you can do your life's best work.</p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeUp} className="h-full">
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} className="h-full">
                  <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-3xl p-8 h-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-red-500/50 hover:bg-zinc-800 transition-all duration-500 group">
                    <div className="w-16 h-16 bg-zinc-900 border border-zinc-700 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:border-red-500/50 transition-colors">
                      <benefit.icon className={`w-8 h-8 ${benefit.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="py-24 bg-zinc-900/50 relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Open Positions</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Filters Glass Bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-zinc-800/80 backdrop-blur-xl border border-zinc-700 rounded-2xl p-4 sm:p-6 mb-12 shadow-2xl flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -tranzinc-y-1/2 text-zinc-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs, skills, or keywords..."
                className="w-full bg-zinc-900/80 border border-zinc-700 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <select
                className="flex-1 bg-zinc-900/80 border border-zinc-700 rounded-xl px-4 py-4 text-zinc-300 focus:outline-none focus:border-red-500 cursor-pointer appearance-none"
                value={filter.department}
                onChange={(e) => setFilter({ ...filter, department: e.target.value })}
              >
                <option value="">All Departments</option>
                <option value="Marketing">Marketing</option>
                <option value="Design">Design</option>
                <option value="Technology">Technology</option>
                <option value="Content">Content</option>
                <option value="Sales">Sales</option>
              </select>
              <select
                className="flex-1 bg-zinc-900/80 border border-zinc-700 rounded-xl px-4 py-4 text-zinc-300 focus:outline-none focus:border-red-500 cursor-pointer appearance-none"
                value={filter.location}
                onChange={(e) => setFilter({ ...filter, location: e.target.value })}
              >
                <option value="">All Locations</option>
                <option value="Delhi, India">Delhi</option>
                <option value="Mumbai, India">Mumbai</option>
                <option value="Jaipur, India">Jaipur</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
          </motion.div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
              <AnimatePresence>
                {filteredJobs.length === 0 ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 bg-zinc-800/30 rounded-3xl border border-zinc-800">
                    <Briefcase className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
                    <p className="text-zinc-400">No jobs found matching your criteria.</p>
                  </motion.div>
                ) : (
                  filteredJobs.map((job) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleJobSelect(job)}
                      className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${
                        selectedJob?.id === job.id
                          ? "bg-red-600/10 border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.15)]"
                          : "bg-zinc-800/50 border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800"
                      }`}
                    >
                      <h3 className="text-lg font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-col gap-2 text-sm">
                        <div className="flex items-center text-zinc-300">
                          <MapPin className="w-4 h-4 mr-2 text-red-400" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-zinc-400">
                          <Briefcase className="w-4 h-4 mr-2 text-zinc-500" />
                          {job.department}
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Job Details & Form Panel */}
            <div className="lg:col-span-2" id="job-details">
              {selectedJob ? (
                <motion.div 
                  initial={{ opacity: 0, x: 50 }} 
                  animate={{ opacity: 1, x: 0 }}
                  key={selectedJob.id}
                >
                  <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={1000}>
                    <div className="bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-xl border border-zinc-700 shadow-2xl rounded-3xl overflow-hidden">
                      {/* Header */}
                      <div className="bg-zinc-800/50 border-b border-zinc-700 p-8 sm:p-10">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider rounded-full">
                            {selectedJob.department}
                          </span>
                          <span className="px-3 py-1 bg-zinc-700 border border-zinc-600 text-zinc-300 text-xs font-bold uppercase tracking-wider rounded-full">
                            {selectedJob.type}
                          </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">{selectedJob.title}</h2>
                        
                        <div className="flex flex-wrap gap-6 text-sm text-zinc-300">
                          <div className="flex items-center bg-zinc-900/50 px-4 py-2 rounded-lg border border-zinc-700">
                            <MapPin className="w-5 h-5 mr-3 text-red-500" />
                            {selectedJob.location}
                          </div>
                          <div className="flex items-center bg-zinc-900/50 px-4 py-2 rounded-lg border border-zinc-700">
                            <Clock className="w-5 h-5 mr-3 text-red-500" />
                            {selectedJob.experience}
                          </div>
                          <div className="flex items-center bg-zinc-900/50 px-4 py-2 rounded-lg border border-zinc-700">
                            <Banknote className="w-5 h-5 mr-3 text-red-500" />
                            {selectedJob.salary}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 sm:p-10 border-b border-zinc-700">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                          <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center mr-3 border border-zinc-700">
                            <FileText className="w-4 h-4 text-red-500" />
                          </div>
                          Role Overview
                        </h3>
                        <p className="text-zinc-300 leading-relaxed mb-10">{selectedJob.description}</p>

                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                          <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center mr-3 border border-zinc-700">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          </div>
                          What You'll Need
                        </h3>
                        <ul className="space-y-4">
                          {selectedJob.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-red-500 mr-2 shrink-0 mt-0.5" />
                              <span className="text-zinc-300">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Premium Application Form */}
                      <div className="p-8 sm:p-10 bg-zinc-900/50">
                        <h3 className="text-2xl font-bold text-white mb-8">Apply for this Position</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-xs font-bold text-zinc-300 mb-2 uppercase tracking-wider">Full Name</label>
                              <div className="relative">
                                <User className="absolute left-4 top-1/2 -tranzinc-y-1/2 w-5 h-5 text-zinc-500" />
                                <input
                                  type="text"
                                  name="name"
                                  value={applicationForm.name}
                                  onChange={handleInputChange}
                                  className={`w-full bg-zinc-900/80 border ${formErrors.name ? 'border-red-500' : 'border-zinc-700'} rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors`}
                                  placeholder="Enter your name"
                                />
                              </div>
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-zinc-300 mb-2 uppercase tracking-wider">Email Address</label>
                              <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -tranzinc-y-1/2 w-5 h-5 text-zinc-500" />
                                <input
                                  type="email"
                                  name="email"
                                  value={applicationForm.email}
                                  onChange={handleInputChange}
                                  className={`w-full bg-zinc-900/80 border ${formErrors.email ? 'border-red-500' : 'border-zinc-700'} rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors`}
                                  placeholder="Enter your email"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-xs font-bold text-zinc-300 mb-2 uppercase tracking-wider">Phone Number</label>
                              <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -tranzinc-y-1/2 w-5 h-5 text-zinc-500" />
                                <input
                                  type="tel"
                                  name="phone"
                                  value={applicationForm.phone}
                                  onChange={handleInputChange}
                                  className={`w-full bg-zinc-900/80 border ${formErrors.phone ? 'border-red-500' : 'border-zinc-700'} rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors`}
                                  placeholder="Enter your number"
                                />
                              </div>
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-zinc-300 mb-2 uppercase tracking-wider">Total Experience</label>
                              <select
                                name="experience"
                                value={applicationForm.experience}
                                onChange={handleInputChange}
                                className={`w-full bg-zinc-900/80 border ${formErrors.experience ? 'border-red-500' : 'border-zinc-700'} rounded-xl px-4 py-4 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors cursor-pointer appearance-none`}
                              >
                                <option value="" disabled className="text-zinc-500">Select Experience</option>
                                <option value="Fresher">Fresher (0-1 year)</option>
                                <option value="1-3 years">1-3 years</option>
                                <option value="3-5 years">3-5 years</option>
                                <option value="5+ years">5+ years</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-zinc-300 mb-2 uppercase tracking-wider">Resume / CV</label>
                            <div className={`relative border-2 border-dashed ${formErrors.resume ? 'border-red-500 bg-red-500/5' : 'border-zinc-600 bg-zinc-900/50'} rounded-2xl p-8 text-center hover:bg-zinc-800 transition-colors cursor-pointer group`}>
                              <input
                                type="file"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                accept=".pdf,.doc,.docx"
                              />
                              <Upload className="w-10 h-10 text-zinc-400 mx-auto mb-4 group-hover:text-red-400 transition-colors" />
                              <p className="text-zinc-300 font-bold mb-1">
                                {applicationForm.resume ? applicationForm.resume.name : "Click to upload or drag and drop"}
                              </p>
                              <p className="text-zinc-500 text-sm">PDF, DOC, or DOCX (MAX. 5MB)</p>
                            </div>
                          </div>

                          <MagneticButton 
                            type="submit" 
                            disabled={submitting}
                            className={`w-full py-5 rounded-xl font-black uppercase tracking-wider text-white shadow-xl transition-all ${
                              submitting 
                              ? 'bg-zinc-700 cursor-not-allowed' 
                              : 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]'
                            }`}
                          >
                            {submitting ? "Sending Payload..." : "Submit Application"}
                          </MagneticButton>
                        </form>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              ) : (
                <div className="h-full flex items-center justify-center min-h-[400px] border border-zinc-800 border-dashed rounded-3xl bg-zinc-900/30">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Briefcase className="w-10 h-10 text-zinc-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Select a Position</h3>
                    <p className="text-zinc-400">Choose a job from the list to view details and apply.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
