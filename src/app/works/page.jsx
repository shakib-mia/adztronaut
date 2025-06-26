// "use client";
import React from "react";
// import Layout from "../components/Layout/Layout";
import useLenis from "../hooks/useLenis";
import useAOS from "../hooks/useAos";
import Works from "../components/Works/Works";
import Head from "next/head";

const Page = () => {
  // useLenis();
  // useAOS();

  return (
    <div className="container">
      <Head>
        <title>Works - Adztronaut</title>
      </Head>

      <div className="mx-auto w-full pt-20 md:pt-32 xl:w-5/6 xl:pt-56">
        <h2
          className="font-satoshi text-center text-h3 xl:text-heading-lg"
          data-aos="fade-up"
        >
          Work
        </h2>

        <h3 className="mt-6 text-center xl:text-h3">
          Proof that we don’t just talk. We launch.
        </h3>

        <p
          className="font-chillax mt-2 text-center text-sm text-text-muted md:text-md xl:text-xl"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          From cult brands to category leaders, here’s a glimpse at some of our
          favorite missions. Each one is a story of strategy, design, data—and a
          sprinkle of stardust.
        </p>
      </div>

      <div className="pb-10 pt-4 md:pb-20 md:pt-14 xl:pb-40 xl:pt-24">
        <Works />
      </div>
    </div>
  );
};

export default Page;
