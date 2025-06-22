import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TimelineLine() {
  const ref = useRef(null); // ✅ ref setup

  const { scrollYProgress } = useScroll({
    target: ref, // ✅ use ref instead of string
    offset: ["start 90%", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-transparent"
    >
      <motion.div
        style={{ height }}
        className="w-px origin-top bg-border ease-linear"
      />
    </div>
  );
}
