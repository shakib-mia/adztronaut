"use client";
import React from "react";
import heroImage from "@/assets/images/hero-image.jpg";
import Layout from "../components/Layout/Layout";
import Image from "next/image";
// import useLenis from "../hooks/useLenis";
// import useAOS from "../hooks/useAos";
import AboutContents from "../components/AboutContents/AboutContents";
import Head from "next/head";
import sayang from "@/assets/images/Sayan ghosh.webp";
import arpitar from "@/assets/images/Arpita roy.webp";
import ScrollDownButton from "../components/ScrollDownButton/ScrollDownButton";

const Page = () => {
  // useLenis();
  // useAOS();

  const aboutData = [
    {
      about: {
        name: "Sayan Ghosh",
        designation: "CEO",
        image: sayang,
        description: [
          "As a freelance web designer and developer, I bring a unique combination of creativity and technical expertise to every project. With a keen eye for design and a passion for delivering user-friendly web experiences, I work closely with clients to understand their needs and bring their vision to life.",
          "My approach is rooted in collaboration and communication, and I take pride in my ability to explain technical concepts in simple terms. Whether I'm developing a new website from scratch or optimizing an existing site for search engines, I always strive for excellence in both form and function. With a dedication to quality and a commitment to staying on top of the latest trends and technologies, I am confident in my ability to deliver exceptional results that exceed my clients' expectations.",
        ],
      },
      socials: [
        { icon: "FaFacebook", text: "Facebook", link: "#" },
        { icon: "FaInstagram", text: "Instagram", link: "#" },
        { icon: "FaTwitter", text: "Twitter", link: "#" },
      ],
      awards: [
        { name: "Awwwards SOTD", year: 2023 },
        { name: "CSSDA SOTD", year: 2023 },
        { name: "Awwwards Website of the Month", year: 2022 },
        { name: "CSSDA SOTD", year: 2022 },
        { name: "Awwwards SOTD", year: 2021 },
        { name: "Awwwards Website of the Year", year: 2021 },
      ],
    },
    {
      about: {
        name: "Arpita Roy",
        designation: "CEO",
        image: arpitar,
        description: [
          "As a freelance web designer and developer, I bring a unique combination of creativity and technical expertise to every project. With a keen eye for design and a passion for delivering user-friendly web experiences, I work closely with clients to understand their needs and bring their vision to life.",
          "My approach is rooted in collaboration and communication, and I take pride in my ability to explain technical concepts in simple terms. Whether I'm developing a new website from scratch or optimizing an existing site for search engines, I always strive for excellence in both form and function. With a dedication to quality and a commitment to staying on top of the latest trends and technologies, I am confident in my ability to deliver exceptional results that exceed my clients' expectations.",
        ],
      },
      socials: [
        { icon: "FaFacebook", text: "Facebook", link: "#" },
        { icon: "FaInstagram", text: "Instagram", link: "#" },
        { icon: "FaTwitter", text: "Twitter", link: "#" },
      ],
      awards: [
        { name: "Awwwards SOTD", year: 2023 },
        { name: "CSSDA SOTD", year: 2023 },
        { name: "Awwwards Website of the Month", year: 2022 },
        { name: "CSSDA SOTD", year: 2022 },
        { name: "Awwwards SOTD", year: 2021 },
        { name: "Awwwards Website of the Year", year: 2021 },
      ],
    },
  ];

  return (
    <div className="container">
      <Head>
        <title>About - Arik Andersson</title>
      </Head>
      <div className="mt-28 lg:mt-56">
        <h1
          className="font-satoshi pb-4 text-center text-h1 lg:text-heading-md"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          About <i className="font-gambetta">Us</i>
        </h1>
        <p
          className="font-chillax mx-auto mb-4 text-center text-lg text-text-muted lg:w-6/12"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          Delivering Premium Web Design and Development Services to Boost Your
          Online Presence.
        </p>
        <p className="font-chillax mx-auto mb-8 text-center text-text-muted lg:mb-16 lg:w-8/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          consectetur blanditiis incidunt corrupti nostrum iusto nisi possimus
          enim aliquam? Voluptatem illo reiciendis officiis blanditiis officia
          beatae ipsa molestiae cupiditate fugiat.
        </p>
        {/* <ScrollDownButton text={"About Us"} /> */}
        <div className="grid grid-cols-1 gap-4 pb-10 md:pb-20 lg:grid-cols-2 lg:pb-40">
          {/* <aside className="top-0 lg:sticky lg:h-screen">
          <Image src={heroImage} alt="hero image" data-aos="fade-right" />
        </aside> */}
          {aboutData.map((data, index) => (
            <AboutContents key={index} id={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
