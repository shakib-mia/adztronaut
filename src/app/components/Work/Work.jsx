"use client";
import React from "react";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import { PiArrowUpRight } from "react-icons/pi";
import Link from "next/link";

const Work = ({ image, heading, subheading, id }) => {
  // console.log(window.innerWidth);
  return (
    <article
      className="group relative w-full"
      data-aos="fade-up"
      data-aos-delay={id % 2 ? 250 : 2 * 250}
    >
      <Link
        href={"/"}
        className="absolute left-0 top-0 hidden h-full w-full items-center justify-center group-hover:flex"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border backdrop-blur">
          <PiArrowUpRight className="text-xl" />
        </div>
      </Link>
      <Image src={image} alt="work" className="w-full" />

      <div className="relative mx-3 lg:mx-8">
        <div className="pointer-events-none absolute bottom-3 flex w-full justify-between p-2 text-text backdrop-blur-xl lg:bottom-8 lg:px-4 lg:py-3">
          <h4 className="font-satoshi text-h6 md:text-h4">{heading}</h4>
          <p className="font-satoshi text-sm uppercase md:text-base">
            {subheading}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Work;
