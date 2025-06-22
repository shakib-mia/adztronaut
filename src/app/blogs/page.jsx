"use client";
import React from "react";
// import useAOS from "../hooks/useAos";
// import useLenis from "../hooks/useLenis";
import Blogs from "../components/Blogs/Blogs";

const Page = () => {
  // useAOS();
  // useLenis();

  return (
    <div className="pb-6 pt-20 md:pb-16 md:pt-32 xl:pb-32 xl:pt-56">
      <div className="mx-auto text-center lg:w-7/12">
        <h1
          className="font-satoshi mb-4 text-h2 md:text-heading-md xl:text-heading-lg"
          data-aos="zoom-in"
        >
          Blog
        </h1>
        <p
          className="font-chillax text text-text-muted md:text-md lg:text-lg xl:text-xl"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor lorem.
        </p>
      </div>

      <Blogs />
    </div>
  );
};

export default Page;
