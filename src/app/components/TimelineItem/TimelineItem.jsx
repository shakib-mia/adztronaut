"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const TimelineItem = ({
  id,
  subHeading,
  heading,
  paragraph,
  tag,
  listItem,
}) => {
  const sectionRef = useRef(null);

  const isEven = id % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 100%"],
  });

  const left = useTransform(
    scrollYProgress,
    [0, 1],
    isEven ? ["10vw", "0vw"] : ["-10vw", "0vw"],
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      className={`relative flex flex-col items-center gap-10 py-4 md:gap-12 lg:py-0 xl:gap-20 ${
        isEven ? "xl:flex-row-reverse" : ""
      } xl:flex-row`}
      ref={sectionRef}
    >
      {/* Content */}
      <motion.div
        className="relative w-full max-w-[95%] sm:max-w-[85%] md:max-w-[80%] xl:w-5/12"
        style={{ left, opacity }}
      >
        <div className="rounded-xl border border-border bg-bg p-6 transition-colors duration-300 hover:bg-bg-muted-2 sm:p-8 xl:p-12">
          {tag && (
            <div className="mb-2 inline-block rounded border border-border bg-bg-muted px-2 py-1 text-xs uppercase text-text">
              {tag}
            </div>
          )}
          <h4 className="mb-2 text-h5 uppercase sm:text-h4">{heading}</h4>
          {subHeading && (
            <h5 className="mb-3 text-h6 italic text-text-muted sm:text-h5">
              {subHeading}
            </h5>
          )}
          <p className="font-chillax mb-6 text-sm text-text-muted sm:text-base">
            {paragraph}
          </p>

          {listItem?.length > 0 && (
            <ul className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              {listItem.map((item, key) => (
                <li className="flex items-start gap-3" key={key}>
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-bg-primary"></div>
                  <p className="font-chillax text-xs text-text sm:text-sm">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>

      {/* Timeline Circle */}
      <motion.div
        style={{ scale }}
        className="absolute -left-1/2 z-10 flex-col items-center"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg text-sm font-medium shadow-md">
          {id < 10 ? `0${id}` : id}
        </div>
      </motion.div>

      {/* Spacer */}
      <div className="hidden w-full xl:block xl:w-5/12"></div>
    </motion.div>
  );
};

export default TimelineItem;
