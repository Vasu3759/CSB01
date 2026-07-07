"use client";

import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

export default function VantaMinimalBackground({ children }) {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [vantaLoaded, setVantaLoaded] = useState(false);

  useEffect(() => {
    // Dynamically import Vanta
    const loadVanta = async () => {
      // Waves is incredibly sleek and minimal when styled darkly
      const VANTA = (await import("vanta/dist/vanta.waves.min")).default;
      
      if (!vantaEffect.current && vantaRef.current) {
        vantaEffect.current = VANTA({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x09090b, // Very dark base
          shininess: 15.00, // Subtle shine
          waveHeight: 12.50, // Gentle waves
          waveSpeed: 0.30, // Very slow moving
          zoom: 0.85 // Zoomed out for minimal look
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
