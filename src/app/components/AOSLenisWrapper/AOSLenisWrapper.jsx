// src/app/components/AOSLenisWrapper/AOSLenisWrapper.jsx
"use client";

import { useEffect } from "react";

export default function AOSLenisWrapper() {
  useEffect(() => {
    // Dynamically import AOS and Lenis only in the browser
    const loadAnimation = async () => {
      if (typeof window === "undefined") return;

      const AOS = (await import("aos")).default;
      await import("aos/dist/aos.css"); // ✅ Safe here after dynamic import

      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
      });

      const Lenis = (await import("@studio-freight/lenis")).default;

      const lenis = new Lenis();

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);
    };

    loadAnimation();
  }, []);

  return null;
}
