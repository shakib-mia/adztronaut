import React from "react";
import Marquee from "react-fast-marquee";
import image from "@/assets/images/hero-image-removebg.png";
import Image from "next/image";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { AiOutlineDribbble } from "react-icons/ai";
import { FaBehance } from "react-icons/fa";

const About = () => {
  return (
    <section className="h-screen">
      <div className="absolute left-0 h-full w-screen overflow-x-hidden">
        <div
          className="absolute top-40 -z-10 lg:top-52 xl:top-64 2xl:top-96"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <Marquee>
            <div className="flex w-full justify-around">
              <div className="text-h3 md:text-h1 lg:text-heading-lg">
                Arik <span className="font-gambetta italic">Andersson</span>
              </div>

              <div className="text-h3 md:text-h1 lg:text-heading-lg">
                Arik <span className="font-gambetta italic">Andersson</span>
              </div>
            </div>
          </Marquee>
        </div>
        <div className="left-0 z-50 flex w-screen items-center justify-center bg-black bg-opacity-5 lg:absolute">
          <Image
            src={image}
            className="w-full lg:w-8/12 xl:w-1/2"
            alt="arik andersson"
            data-aos="fade-up"
          />
        </div>

        <div className="container bottom-16 left-0 right-0 z-[9999] mx-auto flex flex-col gap-4 bg-black lg:absolute lg:flex-row lg:gap-16">
          <aside className="w-full text-text lg:w-1/2">
            <h2
              className="font-satoshi text-h3 font-light lg:text-h2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              A website that leaves{" "}
              <div className="font-gambetta italic">a lasting impression!</div>
            </h2>
          </aside>

          <aside className="w-full lg:w-1/2">
            <p
              className="text-sm text-text-muted md:text-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              Hi, {"I'm"} Arik Andersson - a freelancer specializing in premium
              web design, development, and SEO services. {"I'm"} passionate
              about creating unique and effective solutions for my clients, and
              I bring a personal touch to every project. {"Let's"} work together
              to bring your vision to life!
            </p>

            <div className="mt-4 flex gap-2 lg:mt-8">
              <div>
                <a
                  href="#"
                  className="inline-block h-12 w-12 items-center justify-center rounded-full border border-border bg-bg-muted"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-delay="1500"
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <CiTwitter />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-block h-12 w-12 items-center justify-center rounded-full border border-border bg-bg-muted"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-delay="1700"
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <CiInstagram />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-block h-12 w-12 items-center justify-center rounded-full border border-border bg-bg-muted"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-delay="1800"
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <AiOutlineDribbble />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-block h-12 w-12 items-center justify-center rounded-full border border-border bg-bg-muted"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-delay="2000"
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <FaBehance className="font-light" />
                  </div>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
