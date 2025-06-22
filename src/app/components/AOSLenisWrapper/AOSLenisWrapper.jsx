// app/components/AOSLenisWrapper.jsx
"use client";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AOSLenisWrapper = () => {
  AOS.init({
    duration: 800, // Duration of animations
    easing: "ease-in-out", // Easing option
    once: true, // Only animate elements once
  });

  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return null;
};

export default AOSLenisWrapper;
