"use client";
import React from "react";
import laptop from "@/assets/images/services.png";
import Image from "next/image";
import CountUp from "react-countup";
import image1 from "@/assets/images/services/beauty-4993466_1920.jpg";
import image2 from "@/assets/images/services/premium_photo-1683583961441-511f9498e6ed.png";
import image3 from "@/assets/images/services/seo.jpg";
import image4 from "@/assets/images/services/alexander-dummer-aS4Duj2j7r4-unsplash.jpg";
import ServiceContentDetails from "../ServiceContentDetails/ServiceContentDetails";
import ScrollDownButton from "../ScrollDownButton/ScrollDownButton";

const ServicesContents = () => {
  const services = [
    {
      image: image1,
      header: "Building Brands That People Remember",
      tag: "Branding",
      id: "Branding",
      details: [
        {
          heading: "Brand Identity Design",
          paragraph:
            "Logos, fonts, color palettes, and systems built to scale with your brand.",
        },

        {
          heading: "Tone of Voice & Messaging",
          paragraph:
            "Crafting how your brand sounds — from taglines to brand manifestos.",
        },

        {
          heading: "Creative Campaigns",
          paragraph:
            "Strategy-to-shoot execution for brand launches, festivals, sales & product reveals.",
        },

        {
          heading: "Ad Creatives & Concept Decks",
          paragraph:
            "Fully developed pitch decks, storyboarded ads, carousels, and digital campaigns.",
        },

        {
          heading: "Launch Playbooks",
          paragraph:
            "Social roll-out strategies, timelines, and asset planning for a successful debut.",
        },
      ],
    },
    {
      image: image2,
      header: "Performance-Driven Paid Ads & Strategy",
      tag: "Performance Marketing",
      id: "performance-marketing",
      details: [
        {
          heading: "Paid Ads Management",
          paragraph: "Meta & Google, full funnel.",
        },

        {
          heading: "Media Buying Strategy",
          paragraph: "Optimized creatives + retargeting flow.",
        },

        {
          heading: "Analytics & Reports",
          paragraph: "Weekly breakdowns, ROAS tracking, recommendations.",
        },
      ],
    },
    {
      image: image3,
      header: "Boosting Your Website’s Organic Search Traffic",
      tag: "SEO & content",
      id: "seo_and_content",
      details: [
        {
          heading: "SEO Audits & On-page",
          paragraph: "Technical SEO, copy, meta, internal linking.",
        },

        {
          heading: "Content Marketing",
          paragraph: "Blogs, long-form content, YouTube optimization.",
        },

        {
          heading: "Social Media Management",
          paragraph:
            "Strategy, captions, carousels, Reels, and trend-tuned posting.",
        },
      ],
    },

    {
      image: image4,
      header: "Crafting Content That Clicks, Connects, Converts",
      tag: "Media Production",
      id: "seo_and_content",
      details: [
        {
          heading: "Creative Direction",
          paragraph:
            "Moodboards, storytelling, and shot-planning that align with your brand.",
        },

        {
          heading: "Reels & Short-form",
          paragraph:
            "Platform-native scripts, trending audio, face-cam storytelling, product highlights.",
        },

        {
          heading: "Product Shoots & Ads",
          paragraph:
            "High-conversion visual ads, lifestyle photography, flat-lays, and model shoots.",
        },

        {
          heading: "Post-Production",
          paragraph:
            "Color correction, editing, motion graphics, thumbnail optimization.",
        },

        {
          heading: "Content Calendars",
          paragraph:
            "Plug-and-play plans with visual mockups, posting dates, and formats",
        },
      ],
    },

    // {
    //   image: image3,
    //   header: "Building Brands People Remember. Campaigns They Talk About.",
    //   tag: "SEO & content",
    //   id: "seo_and_content",
    //   details: [
    //     {
    //       heading: "Brand Identity Design",
    //       paragraph:
    //         "Logos, fonts, color palettes, and systems built to scale with your brand.",
    //     },

    //     {
    //       heading: "Tone of Voice & Messaging",
    //       paragraph:
    //         "Crafting how your brand sounds — from taglines to brand manifestos.",
    //     },

    //     {
    //       heading: "Creative Campaigns",
    //       paragraph:
    //         "Strategy-to-shoot execution for brand launches, festivals, sales & product reveals.",
    //     },

    //     {
    //       heading: "Ad Creatives & Concept Decks",
    //       paragraph:
    //         "Fully developed pitch decks, storyboarded ads, carousels, and digital campaigns.",
    //     },

    //     {
    //       heading: "Launch Playbooks",
    //       paragraph:
    //         "Social roll-out strategies, timelines, and asset planning for a successful debut.",
    //     },
    //   ],
    // },
  ];

  return (
    <div className="container pb-6 pt-28 md:pb-16 md:pt-32 xl:pb-32 xl:pt-56">
      <h1
        className="font-satoshi mx-auto text-center text-h2 md:text-heading-md xl:w-11/12 xl:text-heading-lg"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Marketing That’s{" "}
        <div className="font-gambetta italic">Out of This World</div>
      </h1>

      <p
        className="font-chillax mx-auto mb-5 mt-4 text-center text-base text-text-muted md:mb-11 lg:text-lg xl:mb-16 xl:w-11/12 xl:text-xl"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        360° creative & performance marketing — from strategy to storytelling,
        we help your business grow, scale & dominate the digital space.
      </p>

      <div className="flex w-full justify-center">
        <ScrollDownButton text={"Explore Our Services"} />
      </div>
      <Image
        src={laptop}
        alt="laptop"
        className="mt-16 w-full"
        data-aos="fade-in"
        data-aos-delay="2000"
        data-aos-duration="1000"
      />

      <div className="font-satoshi mt-20 grid grid-cols-2 gap-4 gap-y-8 md:grid-cols-4 md:gap-10 lg:gap-16">
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <p className="text-xs uppercase text-text-muted lg:text-meta">
            Projects
          </p>
          <h1 className="text-5xl text-text lg:mt-1 lg:text-h1">
            <CountUp
              start={0}
              enableScrollSpy
              delay={3}
              duration={2}
              end={25}
            />
            +
          </h1>
        </div>

        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <p className="text-xs uppercase text-text-muted lg:text-meta">
            Client Retention
          </p>
          <h1 className="text-5xl text-text lg:mt-1 lg:text-h1">
            <CountUp
              start={0}
              enableScrollSpy
              delay={3}
              duration={2}
              end={92}
            />
            %
          </h1>
        </div>

        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <p className="text-xs uppercase text-text-muted lg:text-meta">
            Avg. ROAS
          </p>
          <h1 className="text-5xl text-text lg:mt-1 lg:text-h1">
            <CountUp start={0} enableScrollSpy delay={4} duration={2} end={4} />
            x+
          </h1>
        </div>

        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <p className="text-xs uppercase text-text-muted lg:text-meta">
            Campaign Reach
          </p>
          <h1 className="text-5xl text-text lg:mt-1 lg:text-h1">
            <CountUp start={0} enableScrollSpy delay={4} duration={2} end={1} />
            M+
          </h1>
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-4 lg:mt-40 lg:gap-8">
        {services.map((item, key) => (
          <ServiceContentDetails key={key} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ServicesContents;
