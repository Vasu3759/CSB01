"use client"

import { useState } from "react"
import YouTube from "react-youtube"
import { X, Play } from "lucide-react"

export default function PortfolioSection() {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const videos = [
    { id: 'CwseiSivOXA', title: 'Brand Film 1' },
    { id: 'WJ8XxjhcXGc', title: 'Brand Film 2' },
    { id: 'ObJ1SE5IRq0', title: 'Brand Film 3' },
    { id: 'Bfyi91uENYc', title: 'Brand Film 4' },
    { id: 'CBuYTOWjhrI', title: 'Brand Film 5' },
    { id: 'Z1nscIn6pfg', title: 'Brand Film 6' },
    { id: 'nY3MfER4g0E', title: 'Brand Film 7' },
    { id: '8xDvqKjfOfs', title: 'Brand Film 8' },
    
  ];

  const openCaseStudy = (project) => {
    alert(`Opening ${project} case study...`)
  }

  const openVideo = (videoId) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const youtubeOpts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      showinfo: 0,
      modestbranding: 1,
    },
  };

  return (
    <>
    <section id="portfolio" className="py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-gray-600">Showcasing our best work and client success stories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Apps */}
          <div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
          >
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div 
                  className="bg-green-100 rounded-lg p-4 aspect-[9/13] flex items-center justify-center hover:bg-green-200 transition-colors overflow-hidden cursor-pointer"
                  onClick={() => window.open("https://play.google.com/store/apps/details?id=com.iprepareapp", "_blank", "noopener,noreferrer")}
                >
                  <img src="/images/unnamed.webp" alt="World Elder Abuse Awareness Day" className="w-full h-full object-contain"/>
                </div>
                <div 
                  className="bg-orange-100 rounded-lg p-4 aspect-[9/13] flex items-center justify-center hover:bg-orange-200 transition-colors overflow-hidden cursor-pointer"
                  onClick={() => window.open("https://play.google.com/store/apps/details?id=com.chalksnboard", "_blank", "noopener,noreferrer")}
                >
                  <img src="/images/unnamed (1).webp" alt="Gujarati Content" className="w-full h-full object-contain"/>
                </div>
                <div 
                  className="bg-zinc-100 rounded-lg p-4 aspect-[9/13] flex items-center justify-center hover:bg-zinc-200 transition-colors overflow-hidden cursor-pointer"
                  onClick={() => window.open("https://play.google.com/store/apps/details?id=com.findMySchool.chalksnboard&pcampaignid=web_share", "_blank", "noopener,noreferrer")}
                >
                  <img src="/images/unnamed (2).webp" alt="Celebrating" className="w-full h-full object-contain"/>
              </div>
                <div 
                  className="bg-gray-100 rounded-lg p-4 aspect-[9/13] flex items-center justify-center hover:bg-gray-200 transition-colors overflow-hidden cursor-pointer"
                  onClick={() => window.open("https://play.google.com/store/apps/details?id=com.dev_samaj&pcampaignid=web_share", "_blank", "noopener,noreferrer")}
                >
                  <img src="/images/unnamed (3).webp" alt="Pravna Jane" className="w-full h-full object-contain"/>
              </div>
              </div>
              <div className="mt-auto">
                <p className="text-lg text-left">
                  <span className="font-bold text-red-600">Apps:</span>
                  <span className="font-semibold text-gray-700"> Strategic Ad Campaigns.</span>
                  <span className="text-gray-600"> Driving Brand Traffic and Engagement.</span>
                </p>
              </div>
          </div>

            {/* Social Media */}
          <div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
          >
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div 
                  className="bg-white rounded-lg aspect-square flex flex-col p-2 sm:p-3 text-gray-800 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => window.open("https://www.instagram.com/ahws.official?igsh=MTg3dGd3Ymh3a2RpZw==", "_blank", "noopener,noreferrer")}
                >
                  <div className="flex items-center w-full mb-2">
                      <img src="/images/placeholder-user.jpg" alt="ahws.official" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-pink-500"/>
                      <span className="font-bold text-xs sm:text-sm ml-2 truncate">ahws.official</span>
                  </div>
                  <div className="flex justify-around w-full text-xs sm:text-sm text-center mb-2">
                      <div><span className="font-bold">152</span><br/>posts</div>
                      <div><span className="font-bold">2.1k</span><br/>followers</div>
                      <div><span className="font-bold">120</span><br/>following</div>
                  </div>
                  <div className="w-full h-full bg-gray-100 rounded-sm flex items-center justify-center overflow-hidden">
                      <img src="/images/awhs.jpg" alt="Latest post from ahws.official" className="w-full h-full object-cover"/>
                  </div>
                </div>
                <div 
                  className="bg-white rounded-lg aspect-square flex flex-col p-2 sm:p-3 text-gray-800 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => window.open("https://www.instagram.com/dpskurukshetra?igsh=MTM5bXFkbHF3aW0xag==", "_blank", "noopener,noreferrer")}
                >
                  <div className="flex items-center w-full mb-2">
                      <img src="/images/placeholder-user.jpg" alt="dpskurukshetra" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-purple-500"/>
                      <span className="font-bold text-xs sm:text-sm ml-2 truncate">dpskurukshetra</span>
                  </div>
                  <div className="flex justify-around w-full text-xs sm:text-sm text-center mb-2">
                      <div><span className="font-bold">210</span><br/>posts</div>
                      <div><span className="font-bold">3.5k</span><br/>followers</div>
                      <div><span className="font-bold">98</span><br/>following</div>
                  </div>
                  <div className="w-full h-full bg-gray-100 rounded-sm flex items-center justify-center overflow-hidden">
                      <img src="/images/dps.jpg" alt="Latest post from dpskurukshetra" className="w-full h-full object-cover"/>
                  </div>
                </div>
                <div 
                  className="bg-white rounded-lg aspect-square flex flex-col p-2 sm:p-3 text-gray-800 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => window.open("https://www.instagram.com/mbispatna/?hl=en", "_blank", "noopener,noreferrer")}
                >
                  <div className="flex items-center w-full mb-2">
                      <img src="/images/placeholder-user.jpg" alt="mbispatna" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-zinc-500"/>
                      <span className="font-bold text-xs sm:text-sm ml-2 truncate">mbispatna</span>
                  </div>
                  <div className="flex justify-around w-full text-xs sm:text-sm text-center mb-2">
                      <div><span className="font-bold">180</span><br/>posts</div>
                      <div><span className="font-bold">2.8k</span><br/>followers</div>
                      <div><span className="font-bold">150</span><br/>following</div>
                  </div>
                  <div className="w-full h-full bg-gray-100 rounded-sm flex items-center justify-center overflow-hidden">
                      <img src="/images/mbis.jpg" alt="Latest post from mbispatna" className="w-full h-full object-cover"/>
                  </div>
                </div>
                <div 
                  className="bg-white rounded-lg aspect-square flex flex-col p-2 sm:p-3 text-gray-800 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => window.open("https://www.instagram.com/sanfortschools/?hl=en", "_blank", "noopener,noreferrer")}
                >
                  <div className="flex items-center w-full mb-2">
                      <img src="/images/placeholder-user.jpg" alt="sanfortschools" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-yellow-500"/>
                      <span className="font-bold text-xs sm:text-sm ml-2 truncate">sanfortschools</span>
                  </div>
                  <div className="flex justify-around w-full text-xs sm:text-sm text-center mb-2">
                      <div><span className="font-bold">320</span><br/>posts</div>
                      <div><span className="font-bold">4.2k</span><br/>followers</div>
                      <div><span className="font-bold">210</span><br/>following</div>
                  </div>
                  <div className="w-full h-full bg-gray-100 rounded-sm flex items-center justify-center overflow-hidden">
                      <img src="/images/sanfort.jpg" alt="Latest post from sanfortschools" className="w-full h-full object-cover"/>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <p className="text-lg text-left">
                  <span className="font-bold text-red-600">Social Media:</span>
                  <span className="font-semibold text-gray-700"> Innovative Creative Designs.</span>
                  <span className="text-gray-600"> Elevating Social media with Creative.</span>
                </p>
              </div>
            </div>

            {/* Brand Films */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="grid grid-cols-2 gap-6 mb-6">
                {videos.map((video) => (
                  <div 
                    key={video.id}
                    onClick={() => openVideo(video.id)} 
                    className="bg-gray-200 rounded-lg aspect-[4/3] transition-transform duration-300 cursor-pointer overflow-hidden relative group"
                  >
                    <img 
                       src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                       alt={video.title}
                       className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                <p className="text-lg text-left">
                  <span className="font-bold text-red-600">Brand Films:</span>
                  <span className="font-semibold text-gray-700"> Engaging Video Content.</span>
                  <span className="text-gray-600"> Bringing stories to life through film.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl aspect-video relative">
            <button 
              onClick={closeVideo} 
              className="absolute -top-4 -right-4 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            <YouTube videoId={selectedVideo} opts={youtubeOpts} className="w-full h-full rounded-lg" />
          </div>
        </div>
      )}
    </>
  )
}
