"use client";
import React from "react";
import Testimonials from "../components/Testimonials/Testimonials";
// import Layout from "../components/Layout/Layout";
import useAOS from "../hooks/useAos";
import useLenis from "../hooks/useLenis";

const Page = () => {
  useAOS();
  useLenis();
  return (
    <>
      <div className="py-20 lg:pb-40 lg:pt-56">
        <Testimonials />
      </div>
    </>
  );
};

export default Page;
