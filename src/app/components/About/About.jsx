"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import image from "@/assets/images/adzronaut.png";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { AiOutlineDribbble } from "react-icons/ai";
import { FaBehance } from "react-icons/fa";

const About = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress: xScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: opacityScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"],
  });

  // From right (100vw) to center (0vw) to left (-200vw)
  const x = useTransform(
    xScrollYProgress,
    [0, 0.5, 1],
    ["100vw", "0vw", "-200vw"],
  );

  const imageOpacity = useTransform(
    opacityScrollYProgress,
    [0, 0.3, 1],
    [0, 1, 1],
  );
  const top = useTransform(opacityScrollYProgress, [0, 0.3, 1], [500, 50, 0]);
  const leftText = useTransform(
    opacityScrollYProgress,
    [0, 0.3, 1],
    [500, 50, 0],
  );

  return (
    <>
      <section
        className="relative overflow-visible"
        id="aboutSection"
        ref={sectionRef}
      >
        <div className="sticky top-0 h-screen">
          <motion.div
            style={{ x }}
            className="absolute top-40 -z-10 !overflow-x-visible sm:top-52 xl:top-80"
          >
            <div className="!overflow-x-visible">
              <div className="flex w-full justify-around">
                <h1 className="text-nowrap text-h3 md:text-h1 lg:text-heading-lg">
                  Adztronaut:{" "}
                  <span className="font-gambetta italic">
                    Simplifying advertisements
                  </span>
                </h1>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            style={{ opacity: imageOpacity, top }}
          >
            <Image
              src={image}
              alt="about"
              className="mx-auto h-screen w-auto drop-shadow-[0_0px_41px_#000]"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </motion.div>
        </div>
        <div className="-z-50 h-[150vh]"></div>
      </section>

      <div className="mb-12 flex flex-col md:flex-row xl:mb-40">
        <motion.aside
          className="w-full text-text lg:w-1/2"
          style={{ top: leftText }}
        >
          <motion.h2
            className="font-satoshi text-h3 font-light lg:text-h2"
            style={{
              y: useTransform(opacityScrollYProgress, [0, 0.3, 1], [100, 0, 0]),
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            A website that leaves{" "}
            <div className="font-gambetta italic">a lasting impression!</div>
          </motion.h2>
        </motion.aside>

        <motion.aside
          className="w-full lg:w-1/2"
          style={{
            opacity: useTransform(
              opacityScrollYProgress,
              [0.2, 0.5, 1],
              [0, 0.6, 1],
            ),
            y: useTransform(
              opacityScrollYProgress,
              [0.2, 0.5, 1],
              [100, 20, 0],
            ),
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm text-text-muted md:text-md">
            Hi, {"I'm"} Arik Andersson - a freelancer specializing in premium
            web design, development, and SEO services. {"I'm"} passionate about
            creating unique and effective solutions for my clients, and I bring
            a personal touch to every project. {"Let's"} work together to bring
            your vision to life!
          </p>

          <div className="mt-4 flex gap-2 lg:mt-8">
            {/* social icons same as before */}
            {/* ... */}
          </div>
        </motion.aside>
      </div>
    </>
  );
};

export default About;
