"use client";
import React from "react";
import Layout from "../components/Layout/Layout";
import useLenis from "../hooks/useLenis";
import useAOS from "../hooks/useAos";

const Page = () => {
  useLenis();
  useAOS();

  return <Layout>works</Layout>;
};

export default Page;
