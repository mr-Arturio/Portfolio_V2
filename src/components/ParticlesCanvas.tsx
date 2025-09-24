"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    particlesJS?: {
      load: (id: string, path: string, cb?: () => void) => void;
    };
  }
}

export default function ParticlesCanvas() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
    script.async = true;

    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS.load("particles-js", "/particles.json", () => {
          console.log("Particles.js config loaded");
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div id="particles-js" className="fixed top-0 left-0 w-full h-full -z-10" />
  );
}
