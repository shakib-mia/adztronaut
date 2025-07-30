// "use client";
import React from "react";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import { PiArrowUpRight } from "react-icons/pi";
import Link from "next/link";

const Work = ({ image, heading, tag, id, link, slug }) => {
  return (
    <article
      className="group relative h-full w-full overflow-hidden"
      data-aos={id % 2 ? "fade-right" : "fade-left"}
      // data-aos-delay={id % 2 ? 250 : 2 * 250}
    >
      <div className="grayscale transition-[filter_transform] duration-1000 group-hover:scale-110 group-hover:grayscale-0">
        <div className="absolute left-0 top-0 z-0 h-full w-full bg-black bg-opacity-30"></div>
        <Link
          href={`/works/${slug}`}
          className="absolute left-0 top-0 flex h-full w-full items-center justify-center transition group-hover:scale-90"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border opacity-0 backdrop-blur duration-700 group-hover:opacity-100">
            <PiArrowUpRight className="text-xl" />
          </div>
        </Link>
        <Image
          src={image}
          width={1000}
          // fill={true}
          loading="lazy"
          height={1000}
          alt="work"
          className="aspect-video h-full w-full object-cover object-[0_65%]"
        />
      </div>

      <div className="absolute bottom-3 left-0 right-0 mx-auto w-11/12 transition-all group-hover:-bottom-24">
        <div className="pointer-events-none flex w-full items-baseline justify-between p-2 text-text backdrop-blur-xl lg:bottom-8 lg:px-4 lg:py-3">
          <h4 className="font-satoshi text-h6 md:text-h4">{heading}</h4>
          <p className="font-satoshi text-sm uppercase md:text-base">{tag}</p>
        </div>
      </div>
    </article>
  );
};

export default Work;
