"use client";
import React from "react";
import Image from "next/image";

const Work = ({ image, heading, subheading, id }) => {
  // console.log(window.innerWidth);
  return (
    <article
      className="relative w-full"
      data-aos="fade-up"
      data-aos-delay={id % 2 ? 250 : 2 * 250}
    >
      <Image src={image} alt="work" className="w-full" />

      <div className="relative mx-3 lg:mx-8">
        <div className="absolute bottom-3 flex w-full justify-between px-4 py-3 text-text backdrop-blur-xl lg:bottom-8">
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
