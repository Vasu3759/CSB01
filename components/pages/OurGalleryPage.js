"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "../Header"
import { ImageIcon, Play, Award, Users, Calendar, Filter } from "lucide-react"

export default function OurGalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const router = useRouter()
  const [selectedMedia, setSelectedMedia] = useState(null)

  const filters = [
    { id: "all", name: "All", icon: "🎨" },
    { id: "projects", name: "Projects", icon: "💼" },
    { id: "events", name: "Events", icon: "🎉" },
    { id: "team", name: "Team", icon: "👥" },
    { id: "awards", name: "Awards", icon: "🏆" },
    { id: "office", name: "Office", icon: "🏢" },
  ]

  const galleryItems = [
    {
      id: 1,
      type: "image",
      category: "projects",
      title: "E-commerce Website Design",
      description: "Modern e-commerce platform with seamless user experience",
      image: "/placeholder.svg?height=400&width=600",
      date: "2024-01-15",
      client: "Fashion Retail Co.",
    },
    {
      id: 2,
      type: "video",
      category: "projects",
      title: "Brand Campaign Video",
      description: "Creative brand storytelling for education sector",
      image: "/placeholder.svg?height=400&width=600",
      date: "2024-02-20",
      client: "ABC School",
    },
    {
      id: 3,
      type: "image",
      category: "events",
      title: "Digital Marketing Summit 2024",
      description: "Our team presenting at the annual marketing summit",
      image: "/placeholder.svg?height=400&width=600",
      date: "2024-03-10",
      location: "Delhi",
    },
    {
      id: 4,
      type: "image",
      category: "awards",
      title: "Best Digital Agency Award",
      description: "Recognized as the top digital marketing agency in India",
      image: "/placeholder.svg?height=400&width=600",
      date: "2024-01-05",
      award: "Digital Excellence Awards 2024",
    },
    {
      id: 5,
      type: "image",
      category: "team",
      title: "Team Building Event",
      description: "Annual team outing and celebration",
      image: "/placeholder.svg?height=400&width=600",
      date: "2023-12-15",
      location: "Goa",
    },
    {
      id: 6,
      type: "image",
      category: "office",
      title: "New Office Launch",
      description: "Opening of our new Mumbai office",
      image: "/placeholder.svg?height=400&width=600",
      date: "2024-02-01",
      location: "Mumbai",
    },
    {
      id: 7,
      type: "image",
      category: "projects",
      title: "Mobile App Interface",
      description: "Intuitive mobile app design for healthcare startup",
      image: "/placeholder.svg?height=400&width=600",
      date: "2024-01-30",
      client: "HealthTech Solutions",
    },
    {
      id: 8,
      type: "video",
      category: "events",
      title: "Company Anniversary Celebration",
      description: "16 years of excellence celebration",
      image: "/placeholder.svg?height=400&width=600",
      date: "2024-03-15",
      location: "Delhi HQ",
    },
    {
      id: 9,
      type: "image",
      category: "projects",
      title: "Social Media Campaign",
      description: "Viral social media campaign for food brand",
      image: "/placeholder.svg?height=400&width=600",
      date: "2024-02-10",
      client: "Gourmet Foods",
    },
  ]

  const filteredItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  const openModal = (item) => {
    setSelectedMedia(item)
  }

  const closeModal = () => {
    setSelectedMedia(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-900">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-orange-500 py-20 mt-16">
        <div className="container mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ImageIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">Our Gallery</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Explore our creative work, memorable moments, and achievements through our visual portfolio
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Filter Tabs */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <Filter className="w-5 h-5 text-white/60 mr-2" />
            <span className="text-white/60 font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id)
                  router.push(`/${filter.id}`)
                }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-red-500 text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
              >
                <span className="text-lg">{filter.icon}</span>
                <span>{filter.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image || "/images/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-2">{item.description}</p>

                <div className="flex items-center justify-between text-xs text-white/50">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  {item.client && (
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{item.client}</span>
                    </div>
                  )}
                  {item.location && (
                    <div className="flex items-center space-x-1">
                      <span>📍</span>
                      <span>{item.location}</span>
                    </div>
                  )}
                  {item.award && (
                    <div className="flex items-center space-x-1">
                      <Award className="w-3 h-3" />
                      <span>Award</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ImageIcon className="w-8 h-8 text-white/40" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No Items Found</h3>
            <p className="text-white/60">Try selecting a different category to view more content.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Want to Be Featured?</h2>
            <p className="text-white/80 mb-6">
              Let's create something amazing together that deserves a place in our gallery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">{selectedMedia.title}</h2>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <span className="text-white text-xl">×</span>
                </button>
              </div>

              <div className="aspect-video mb-4 rounded-xl overflow-hidden">
                <img
                  src={selectedMedia.image || "/images/placeholder.svg"}
                  alt={selectedMedia.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-white/80 mb-4">{selectedMedia.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-white/50">Date:</span>
                  <p className="text-white">{new Date(selectedMedia.date).toLocaleDateString()}</p>
                </div>
                <div>
                  <span className="text-white/50">Category:</span>
                  <p className="text-white capitalize">{selectedMedia.category}</p>
                </div>
                {selectedMedia.client && (
                  <div>
                    <span className="text-white/50">Client:</span>
                    <p className="text-white">{selectedMedia.client}</p>
                  </div>
                )}
                {selectedMedia.location && (
                  <div>
                    <span className="text-white/50">Location:</span>
                    <p className="text-white">{selectedMedia.location}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
