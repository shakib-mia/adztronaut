"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const TimelineItem = ({
  id,
  subHeading,
  heading,
  paragraph,
  tag,
  listItem,
}) => {
  const sectionRef = useRef(null);

  const [aosType, setAosType] = useState("");
  const [aosType2, setAosType2] = useState("");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 100%"], // Adjusted for smoother fade-in
  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 1280) {
      setAosType("fade-right");
      setAosType2("fade-left");
    } else {
      setAosType("fade-up");
      setAosType2("fade-up");
    }
  }, []);

  const isEven = id % 2 === 0;

  const left = useTransform(
    scrollYProgress,
    [0, 1],
    isEven ? ["10vw", "0vw"] : ["-10vw", "0vw"],
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className={`relative flex flex-col items-center xl:flex-row ${
        isEven ? "xl:flex-row-reverse" : ""
      } gap-10 xl:gap-20`}
      ref={sectionRef}
    >
      {/* Content Box */}
      <motion.div
        className="relative w-full xl:w-5/12"
        style={{ left, opacity }}
      >
        <div className="border border-border bg-bg p-6 transition-colors duration-300 hover:bg-bg-muted-2 xl:p-12">
          {/* Optional tag/subHeading */}
          {tag && (
            <div className="mb-2 inline-block border border-border bg-bg-muted px-2 py-1 text-xs uppercase text-text">
              {tag}
            </div>
          )}
          {subHeading && (
            <p className="mb-1 text-meta uppercase text-text-muted">
              {subHeading}
            </p>
          )}
          <h4 className="mb-4 text-h5 uppercase sm:text-h4">{heading}</h4>
          <p className="font-chillax mb-8 text-sm text-text-muted sm:text-base">
            {paragraph}
          </p>

          {/* Optional list items */}
          {listItem && (
            <ul className="flex flex-col gap-2 md:gap-4">
              {listItem.map((item, key) => (
                <li className="flex items-center gap-4" key={key}>
                  <div className="h-1 w-1 rounded-full bg-bg-primary"></div>
                  <p className="font-chillax text-xs text-text md:text">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>

      {/* Timeline Indicator */}
      <motion.div style={{ scale }} className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg text-sm font-medium">
          {id < 10 ? `0${id}` : id}
        </div>
      </motion.div>

      {/* Spacer to balance layout (only for xl) */}
      <div className="hidden w-5/12 xl:block"></div>
    </motion.div>
  );
};

export default TimelineItem;
