"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TimelineLine = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="absolute left-0 top-0 h-full w-px -translate-x-1/2 bg-transparent lg:left-1/2"
    >
      <motion.div
        style={{ height }}
        className="w-px origin-top bg-border ease-linear"
      />
    </div>
  );
};

export default TimelineLine;
