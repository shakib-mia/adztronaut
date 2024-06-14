"use client";
import React from "react";
// import Layout from "../components/Layout/Layout";
import useLenis from "../hooks/useLenis";
import useAOS from "../hooks/useAos";
import Works from "../components/Works/Works";
import Head from "next/head";

const Page = () => {
  useLenis();
  useAOS();

  return (
    <>
      <Head>
        <title>Works - Arik Andersson</title>
      </Head>

      <div className="mx-auto w-full pt-20 md:pt-32 xl:w-1/2 xl:pt-56">
        <h2
          className="text-center font-satoshi text-h3 xl:text-heading-lg"
          data-aos="fade-up"
        >
          Work
        </h2>
        <p
          className="text-center font-chillax text-sm text-text-muted md:text-md xl:text-xl"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          My latest web design projects and see how we can help bring your ideas
          to life.
        </p>
      </div>

      <div className="pb-10 pt-4 md:pb-20 md:pt-14 xl:pb-40 xl:pt-24">
        <Works />
      </div>
    </>
  );
};

export default Page;
