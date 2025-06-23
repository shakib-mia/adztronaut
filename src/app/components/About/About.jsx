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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Shared animation transforms
  const imageY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [200, 0, 0, -300],
  );
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.6],
  );
  const textX = useTransform(
    scrollYProgress,
    [0, 0.5, 0.9],
    ["110vw", "0vw", "-150vw"],
  );
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [1, 1, 1]);

  return (
    <>
      <section
        className="relative lg:min-h-[250vh]"
        ref={sectionRef}
        id="aboutSection"
      >
        {/* Sticky container for desktop only */}
        <div className="sticky top-0 hidden h-screen w-full items-center justify-center sm:flex">
          {/* Image Layer */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
            style={{ y: imageY, opacity: imageOpacity }}
          >
            <Image
              src={image}
              alt="about"
              className="h-screen w-auto object-contain drop-shadow-[0_0px_41px_#000]"
            />
          </motion.div>

          {/* Text Layer */}
          <motion.div
            className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center text-text"
            style={{ x: textX, opacity: textOpacity }}
          >
            <h1 className="whitespace-nowrap text-h3 md:text-h1 lg:text-heading-lg">
              Adztronaut:{" "}
              <span className="font-gambetta italic">
                Simplifying advertisements
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Mobile fallback: no sticky, basic layout */}
        <div className="px-4 pt-16 text-center sm:hidden">
          <Image
            src={image}
            alt="about"
            className="mx-auto h-[300px] w-auto object-contain drop-shadow-[0_0px_41px_#000]"
          />
          <h1 className="font-satoshi mt-6 text-h4 text-text sm:text-h3">
            Adztronaut:{" "}
            <span className="font-gambetta italic">
              Simplifying advertisements
            </span>
          </h1>
        </div>

        {/* Background Scroll Push */}
        <div className="lg:h-[100vh]" />
      </section>

      {/* Static content section */}
      <div className="mb-20 mt-10 flex flex-col gap-4 px-4 sm:px-8 md:flex-row md:gap-10 xl:mb-40 xl:px-0">
        <div className="w-full text-text md:w-1/2">
          <h2 className="font-satoshi text-h5 font-light sm:text-h2 lg:text-h2">
            A website that leaves{" "}
            <span className="font-gambetta italic">a lasting impression!</span>
          </h2>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-sm text-text-muted sm:text-base lg:text-lg">
            Hi, {"I'm"} Arik Andersson — a freelancer specializing in premium
            web design, development, and SEO services. {"I'm"} passionate about
            creating unique and effective solutions for my clients, and I bring
            a personal touch to every project. {"Let's"} work together to bring
            your vision to life!
          </p>
          <div className="mt-4 flex gap-2 lg:mt-8">
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="1500"
            >
              <a
                href="#"
                className="inline-block h-12 w-12 items-center justify-center rounded-full border border-border bg-bg-muted transition duration-300 hover:bg-bg-secondary"
              >
                <div className="flex h-full w-full items-center justify-center">
                  <CiTwitter />
                </div>
              </a>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="1700"
            >
              <a
                href="#"
                className="inline-block h-12 w-12 items-center justify-center rounded-full border border-border bg-bg-muted transition duration-300 hover:bg-bg-secondary"
              >
                <div className="flex h-full w-full items-center justify-center">
                  <CiInstagram />
                </div>
              </a>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="1800"
            >
              <a
                href="#"
                className="inline-block h-12 w-12 items-center justify-center rounded-full border border-border bg-bg-muted transition duration-300 hover:bg-bg-secondary"
              >
                <div className="flex h-full w-full items-center justify-center">
                  <AiOutlineDribbble />
                </div>
              </a>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="2000"
            >
              <a
                href="#"
                className="inline-block h-12 w-12 items-center justify-center rounded-full border border-border bg-bg-muted transition duration-300 hover:bg-bg-secondary"
              >
                <div className="flex h-full w-full items-center justify-center">
                  <FaBehance className="font-light" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
