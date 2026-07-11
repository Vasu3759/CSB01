"use client"

import Header from "../Header"
import { Mail, Award, Users, Target, TrendingUp } from "lucide-react"
import { FaLinkedin, FaXTwitter } from "react-icons/fa6"

export default function OurTeamPage() {
  const leadership = [
    {
      name: "Nikhil Sharma",
      position: "Founder & CEO",
      bio: "Business Growth Maestro with 16+ years of experience in digital marketing. Featured in Outlook Magazine as India's leading growth expert.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["Business Strategy", "Growth Hacking", "Digital Transformation"],
      achievements: ["Featured in Outlook Magazine", "10X Business Growth Expert", "500+ Successful Projects"],
      social: {
        linkedin: "https://linkedin.com/in/nikhilsharma",
        twitter: "https://twitter.com/nikhilsharma",
        email: "nikhil@chalksnboard.in",
      },
    },
    {
      name: "Priya Agarwal",
      position: "Chief Marketing Officer",
      bio: "Digital marketing strategist with expertise in AI-powered campaigns and data-driven growth strategies.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["AI Marketing", "Performance Marketing", "Brand Strategy"],
      achievements: ["Google Ads Certified", "Facebook Marketing Expert", "200+ Campaigns Managed"],
      social: {
        linkedin: "https://linkedin.com/in/priyaagarwal",
        twitter: "https://twitter.com/priyaagarwal",
        email: "priya@chalksnboard.in",
      },
    },
    {
      name: "Rahul Gupta",
      position: "Chief Technology Officer",
      bio: "Tech innovator leading our AI and automation initiatives, ensuring cutting-edge solutions for our clients.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["AI & Machine Learning", "Marketing Automation", "Data Analytics"],
      achievements: ["AI Innovation Award", "Tech Leadership Excellence", "50+ Automation Solutions"],
      social: {
        linkedin: "https://linkedin.com/in/rahulgupta",
        twitter: "https://twitter.com/rahulgupta",
        email: "rahul@chalksnboard.in",
      },
    },
  ]

  const departments = [
    {
      name: "Creative Team",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      members: 15,
      description: "Designers, copywriters, and creative strategists who bring brands to life.",
      specialties: ["Brand Design", "Content Creation", "Video Production", "UI/UX Design"],
    },
    {
      name: "Development Team",
      icon: TrendingUp,
      color: "from-zinc-500 to-cyan-500",
      members: 12,
      description: "Full-stack developers and technical experts building digital solutions.",
      specialties: ["Web Development", "Mobile Apps", "E-commerce", "Technical SEO"],
    },
    {
      name: "Marketing Team",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      members: 20,
      description: "Digital marketing specialists driving growth and performance.",
      specialties: ["PPC Management", "Social Media", "SEO", "Email Marketing"],
    },
    {
      name: "Analytics Team",
      icon: Award,
      color: "from-orange-500 to-red-500",
      members: 8,
      description: "Data scientists and analysts providing insights and optimization.",
      specialties: ["Data Analysis", "Performance Tracking", "ROI Optimization", "Reporting"],
    },
  ]

  const stats = [
    { number: "55+", label: "Team Members" },
    { number: "16+", label: "Years Experience" },
    { number: "7", label: "Countries" },
    { number: "24/7", label: "Support" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-900">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-orange-500 py-20 mt-16">
        <div className="container mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">Meet Our Team</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            The passionate experts behind Chalksnboard's success - driving innovation and delivering results
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Team Stats */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-red-400 mb-2">{stat.number}</div>
                  <div className="text-white/60">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Leadership Team</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {leader.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                  <p className="text-red-400 font-semibold mb-4">{leader.position}</p>
                </div>

                <p className="text-white/80 text-sm mb-6 leading-relaxed">{leader.bio}</p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Achievements</h4>
                  <ul className="space-y-1">
                    {leader.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-white/70 text-xs flex items-center">
                        <Award className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={leader.social.linkedin}
                    className="w-10 h-10 bg-[#0A66C2] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity shadow-sm"
                  >
                    <FaLinkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={leader.social.twitter}
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:opacity-80 transition-opacity shadow-sm border border-white/10"
                  >
                    <FaXTwitter className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={`mailto:${leader.social.email}`}
                    className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Departments */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Our Departments</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${dept.color} rounded-full flex items-center justify-center mr-4`}
                  >
                    <dept.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{dept.name}</h3>
                    <p className="text-red-400 font-semibold">{dept.members} Members</p>
                  </div>
                </div>

                <p className="text-white/80 mb-6">{dept.description}</p>

                <div>
                  <h4 className="text-white font-semibold mb-3">Specialties</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {dept.specialties.map((specialty, specIndex) => (
                      <div key={specIndex} className="bg-white/5 rounded-lg p-2 text-center">
                        <span className="text-white/70 text-sm">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Amazing Team</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about digital marketing and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-colors">
                View Open Positions
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Send Your Resume
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
