"use client";
import React from "react";
import Layout from "../components/Layout/Layout";
import useLenis from "../hooks/useLenis";
import useAOS from "../hooks/useAos";
import Works from "../components/Works/Works";

const Page = () => {
  useLenis();
  useAOS();

  return (
    <Layout>
      <div className="mx-auto w-1/2 pt-56">
        <h2
          className="text-center font-satoshi text-heading-lg"
          data-aos="fade-up"
        >
          Work
        </h2>
        <p
          className="text-center font-chillax text-xl text-text-muted"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          My latest web design projects and see how we can help bring your ideas
          to life.
        </p>
      </div>

      <div className="pb-40 pt-24">
        <Works />
      </div>
    </Layout>
  );
};

export default Page;
