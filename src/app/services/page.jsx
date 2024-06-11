"use client";
import React from "react";
import Layout from "../components/Layout/Layout";
import useLenis from "../hooks/useLenis";
import useAOS from "../hooks/useAos";
import ServicesContents from "../components/ServicesContents/ServicesContents";

const Page = () => {
  useLenis();
  useAOS();
  return (
    <Layout>
      <ServicesContents />
    </Layout>
  );
};

export default Page;
