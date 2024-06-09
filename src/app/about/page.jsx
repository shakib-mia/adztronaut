"use client";
import React from "react";
import heroImage from "@/assets/images/hero-image.jpg";
import Layout from "../components/Layout/Layout";
import Image from "next/image";
import useLenis from "../hooks/useLenis";
import useAOS from "../hooks/useAos";
import AboutContents from "../components/AboutContents/AboutContents";

const Page = () => {
  useLenis();
  useAOS();

  return (
    <Layout>
      <div className="mt-20 grid grid-cols-1 pb-10 md:pb-20 lg:mt-56 lg:grid-cols-2 lg:pb-40">
        <aside className="top-0 lg:sticky lg:h-screen">
          <Image src={heroImage} alt="hero image" />
        </aside>
        <AboutContents />
      </div>
    </Layout>
  );
};

export default Page;
