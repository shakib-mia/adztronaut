import React from "react";
// import Layout from "../components/Layout/Layout";
// import useLenis from "../hooks/useLenis";
// import useAOS from "../hooks/useAos";
import ServicesContents from "../components/ServicesContents/ServicesContents";
import Head from "next/head";

export const metadata = {
  title: "Services - Adztronaut",
  description: "Web Designer & Developer",
};

const Page = () => {
  // useLenis();
  // useAOS();
  return (
    <>
      <ServicesContents />
    </>
  );
};

export default Page;
