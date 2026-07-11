"use client";

import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

export default function VantaNetBackground({ children }) {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [vantaLoaded, setVantaLoaded] = useState(false);

  useEffect(() => {
    // Dynamically import Vanta to avoid Next.js SSR issues with window
    const loadVanta = async () => {
      const VANTA = (await import("vanta/dist/vanta.net.min")).default;
      
      if (!vantaEffect.current && vantaRef.current) {
        vantaEffect.current = VANTA({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xef4444, // Subtle red
          backgroundColor: 0x18181b, // zinc-900
          points: 5.00, // Reduced from 12 for minimal look
          maxDistance: 15.00, // Reduced connections
          spacing: 25.00, // Increased spacing between nodes
          showDots: true // Keeps it clean
        });
        setVantaLoaded(true);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="relative w-full overflow-hidden transition-opacity duration-1000"
      style={{ opacity: vantaLoaded ? 1 : 0 }}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
