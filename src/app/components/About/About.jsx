"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import image from "@/assets/images/adzronaut.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";

const About = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress: imageScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 50%", "end 0%"],
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end end"],
  });

  // Shared animation transforms
  const imageY = useTransform(
    imageScrollYProgress,
    [0, 0.2, 0.5, 1],
    [200, 0, 0, -300],
  );

  const imageOpacity = useTransform(
    imageScrollYProgress,
    [0, 0.15, 0.5, 1],
    [0, 1, 1, 0.6],
  );
  const textX = useTransform(
    scrollYProgress,
    [0, 0.5, 0.9],
    ["200vw", "0vw", "-160vw"],
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
        <div className="sticky top-0 hidden h-screen w-full items-center justify-center lg:flex">
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

          <div
            className="absolute left-0 w-full overflow-x-hidden"
            style={{ height: "100%" }}
          >
            {/* Text Layer */}
            <motion.div
              className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center text-text"
              style={{ x: textX, opacity: textOpacity }}
            >
              <h1
                className="whitespace-nowrap text-h3 md:text-h1 lg:text-heading-lg"
                id="scrollingText"
              >
                Adztronaut:{" "}
                <span className="font-gambetta italic">
                  Simplifying advertisements
                </span>
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Mobile fallback: no sticky, basic layout */}
        <div className="px-4 pt-16 text-center lg:hidden">
          <Image
            src={image}
            alt="about"
            className="w-full object-contain drop-shadow-[0_0px_41px_#000]"
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
      <div className="container mb-20 mt-10 flex flex-col gap-3 px-4 sm:px-8 md:flex-row md:gap-10 xl:mb-40 xl:px-20">
        <div className="w-full text-text md:w-1/2">
          <h2 className="font-satoshi text-h3 font-light sm:text-h2 lg:text-h1">
            {/* A website that leaves{" "}
            <span className="font-gambetta italic">a lasting impression!</span> */}
            Credibility is <i className="font-gambetta">Currency</i>
          </h2>
        </div>
        <div className="w-full md:w-1/2">
          <p className="font-gambetta italic text-white lg:text-2xl">
            So here’s ours.
          </p>
          <p className="text-sm text-text-muted sm:text-base lg:text-lg">
            {/* <br /> */}
            We’ve launched 20+ projects across 6 industries, partnered with 6+
            brands, and we’re still counting—because good work travels faster
            than ad spends. From bold startups to established forces, brands
            trust us when they want strategy with a soul and execution that
            actually sells.
          </p>
          <div className="mt-4 flex gap-3 lg:mt-8">
            <a href="https://www.instagram.com/adztronaut/" target="_blank">
              <FaInstagramSquare className="hover:text-primary text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/adztronautofficial"
              target="_blank"
            >
              <FaFacebookSquare className="hover:text-primary text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/sayan-ghosh-78bba611b/"
              target="_blank"
            >
              <FaLinkedin className="hover:text-primary text-2xl" />
            </a>
            <a href="http://wa.me/7044732429" target="_blank">
              <FaWhatsappSquare className="hover:text-primary text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
