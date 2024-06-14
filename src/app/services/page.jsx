"use client";
import React from "react";
import Layout from "../components/Layout/Layout";
import useLenis from "../hooks/useLenis";
import useAOS from "../hooks/useAos";
import ServicesContents from "../components/ServicesContents/ServicesContents";
import Head from "next/head";

const Page = () => {
  useLenis();
  useAOS();
  return (
    <>
      <Head>
        <title>Works - Arik Andersson</title>
      </Head>
      <ServicesContents />
    </>
  );
};

export default Page;
