"use client";
import React from "react";
// import Layout from "./components/Layout/Layout";
// import Button from "./components/Button/Button";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import Layout from "../Layout/Layout";
import Button from "../Button/Button";
import useAOS from "@/app/hooks/useAos";
import useLenis from "@/app/hooks/useLenis";
// import useAOS from "./hooks/useAos";
// import useLenis from "./hooks/useLenis";

const NotFound = () => {
  useAOS();
  useLenis();

  return (
    <>
      <div className="flex h-screen flex-col justify-center text-center font-satoshi">
        <h1
          className="text-heading-sm md:text-heading-md lg:text-heading-xl"
          data-aos="zoom-in"
        >
          404!
        </h1>
        <h2
          className="mb-8 mt-4 text-h5 font-light md:text-h3 lg:text-h1"
          data-aos="fade-in"
          data-aos-delay="500"
        >
          Sorry! This Page is Not Available.
        </h2>

        <div
          className="flex justify-center"
          data-aos="fade-up"
          data-aos-delay="750"
        >
          <Button>
            <Link className="flex items-center justify-center gap-2" href={"/"}>
              Back to Home
              <GoArrowUpRight />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
