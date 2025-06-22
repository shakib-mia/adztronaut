// app/components/AOSLenisWrapper.jsx
"use client";

import useAOS from "@/app/hooks/useAos";
import useLenis from "@/app/hooks/useLenis";

const AOSLenisWrapper = () => {
  useAOS(); // custom hook for AOS init
  useLenis(); // custom hook for smooth scroll
  return null;
};

export default AOSLenisWrapper;
