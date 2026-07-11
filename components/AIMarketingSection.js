"use client"

import { useState, useRef } from 'react';
import YouTube from 'react-youtube';
import { Play } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function AIMarketingSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const sectionRef = useRef(null);

  const videoId = '0betlkZZPV0';

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

    tl.from(".video-heading", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(".video-container", {
      scale: 0.95,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.4");
  }, { scope: sectionRef });

  const onReady = (event) => {
    playerRef.current = event.target;
    playerRef.current.mute();
    setIsPlaying(false);
    playerRef.current.pauseVideo();
  };

  const onEnd = (event) => {
    event.target.playVideo(); // Loop the video
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };
  
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      controls: 0,
      rel: 0,
      showinfo: 0,
      modestbranding: 1,
      loop: 1,
      playlist: videoId,
      mute: 1,
    },
  };

  return (
    <section ref={sectionRef} id="marketing" className="bg-background text-foreground py-20 lg:py-32 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
        <div className="video-heading text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Marketing That <span className="text-primary">Delivers</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Watch how our data-driven strategies transform school admissions and drive unprecedented growth.
          </p>
        </div>

        <div className="video-container relative h-[40vh] md:h-[60vh] lg:h-[70vh] bg-card rounded-3xl border border-border hover:border-primary/50 transition-colors duration-500 mb-12 flex items-center justify-center overflow-hidden shadow-2xl">
          <div className="absolute w-full h-full top-0 left-0 z-0">
            <YouTube
              videoId={videoId}
              opts={opts}
              onReady={onReady}
              onEnd={onEnd}
              className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:object-cover"
            />
          </div>

          <div
            className={`absolute inset-0 bg-background/40 z-10 flex items-center justify-center cursor-pointer transition-opacity duration-500 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
            onClick={handlePlayPause}
          >
            {!isPlaying && (
              <div className="bg-primary/20 backdrop-blur-md border border-primary/50 rounded-full p-6 hover:bg-primary/40 hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                <Play className="w-12 h-12 text-primary fill-primary" />
              </div>
            )}
            {isPlaying && (
              <div className="bg-background/80 backdrop-blur-md rounded-full px-6 py-3 border border-border">
                <span className="text-sm font-semibold tracking-widest uppercase">Click to Pause</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
