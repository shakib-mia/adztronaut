"use client";
import React from "react";
import Layout from "../components/Layout/Layout";
import useAOS from "../hooks/useAos";
import useLenis from "../hooks/useLenis";
import Package from "../components/Package/Package";
import FAQ from "../components/FAQ/FAQ";

const Page = () => {
  useAOS();
  useLenis();

  const packages = [
    {
      heading: "lite",
      price: "$3900.00",
      text: "Affordable web design package with a custom design, CMS integration, and responsive design for small businesses and startups.",
      offers: ["Concept", "Strategy", "Webdesign", "Prototype"],
    },

    {
      heading: "Premium",
      price: "$6900.00",
      text: "Comprehensive web design package with UX/UI design, interactive prototype, Framer development, and CMS integration for medium businesses.",
      offers: ["Concept", "Strategy", "Webdesign", "Development"],
      tag: true,
    },

    {
      heading: "Gold",
      price: "$9900.00",
      text: "Elite web design package with SEO optimization, research, and SEO support for businesses looking to dominate their market.",
      offers: ["Webdesign", "Development", "Content", "SEO "],
    },
  ];

  return (
    <>
      <div className="py-20 lg:pb-40 lg:pt-56">
        <div className="mx-auto text-center lg:w-2/3">
          <p
            className="text-meta-sm uppercase text-text-muted md:text-meta"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            pricing
          </p>
          <h1
            className="mb-4 font-satoshi text-h3 md:text-h1"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            Experience the Power of{" "}
            <i className="font-gambetta">Premium Webdesign</i>
          </h1>

          <p
            className="mx-auto font-chillax text-sm text-text-muted md:text-md lg:w-2/3 lg:text-lg"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            Choose a package that suits your needs and budget. Transparent
            pricing with no hidden fees.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8">
          {packages.map((item, key) => (
            <Package key={key} id={key} {...item} />
          ))}
        </div>
      </div>
      <FAQ />
    </>
  );
};

export default Page;
