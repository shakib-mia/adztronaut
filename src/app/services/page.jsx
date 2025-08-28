import React from "react";
// import Layout from "../components/Layout/Layout";
// import useLenis from "../hooks/useLenis";
// import useAOS from "../hooks/useAos";
import ServicesContents from "../components/ServicesContents/ServicesContents";
import Head from "../head";

const Page = () => {
  // useLenis();
  // useAOS();
  return (
    <>
      <Head title={"Services"} />
      <ServicesContents />
    </>
  );
};

export default Page;
