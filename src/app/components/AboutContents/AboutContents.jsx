import React from "react";
import SocialButton from "../SocialButton/SocialButton";
import aboutImage from "@/assets/images/about-image.jpg";
import Image from "next/image";
import { PiArrowDown } from "react-icons/pi";
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { smoothScrollTo } from "@/utils/smoothScroll";
import { getElementTopPosition } from "@/utils/getElementTopPosition";

const AboutContents = () => {
  const social = [
    { icon: <FaFacebook />, text: "Facebook", link: "#" },
    { icon: <FaInstagram />, text: "Instagram", link: "#" },
    { icon: <FaTwitter />, text: "Twitter", link: "#" },
    { icon: <FaBehance />, text: "Behance", link: "#" },
    { icon: <FaDribbble />, text: "Dribbble", link: "#" },
    { icon: <FaPinterest />, text: "Pinterest", link: "#" },
  ];

  const awards = [
    { name: "Awwwards SOTD", year: 2023 },
    { name: "CSSDA SOTD", year: 2023 },
    { name: "Awwwards Website of the Month", year: 2022 },
    { name: "CSSDA SOTD", year: 2022 },
    { name: "Awwwards SOTD", year: 2021 },
    { name: "Awwwards Website of the Year", year: 2021 },
  ];

  return (
    <aside className="pt-8 md:pt-12 lg:pt-16">
      <h1
        className="pb-4 font-satoshi text-h1 lg:text-heading-md"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        Arik <i className="font-gambetta">Andersson</i>
      </h1>
      <p
        className="mb-8 font-chillax text-lg text-text-muted lg:mb-16"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        Delivering Premium Web Design and Development Services to Boost Your
        Online Presence.
      </p>
      <button
        className="flex items-center gap-4"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="1500"
        id="about"
        onClick={() =>
          smoothScrollTo(
            getElementTopPosition(document.getElementById("about")) + 20,
            500,
          )
        }
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-muted">
          <PiArrowDown className="text-md" />
        </div>
        ABOUT ME
      </button>
      <div
        className="mt-10 overflow-x-hidden border border-border bg-bg-muted p-4 text-text lg:mt-32 lg:p-12"
        data-aos="fade-in"
        data-aos-delay="2000"
        data-aos-duration="1000"
      >
        <p
          className="mb-4 text-meta text-text-muted"
          data-aos="fade-left"
          data-aos-duration="1000"
          // data-aos-delay="2500"
        >
          ARIK ANDERSSON
        </p>
        <h2
          className="mb-4 font-satoshi text-h5 text-text lg:text-h2"
          data-aos="fade-left"
          data-aos-duration="1000"
          // data-aos-delay="2500"
        >
          Your Partner in Bringing Your Web Design Vision to Life
        </h2>
        <p
          className="font-chillax text-xs text-text-muted lg:text"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          As a freelance web designer and developer, I bring a unique
          combination of creativity and technical expertise to every project.
          With a keen eye for design and a passion for delivering user-friendly
          web experiences, I work closely with clients to understand their needs
          and bring their vision to life.
        </p>

        <p
          className="mt-3 font-chillax text-xs text-text-muted lg:mt-6 lg:text"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          My approach is rooted in collaboration and communication, and I take
          pride in my ability to explain technical concepts in simple terms.
          Whether {"I'm"} developing a new website from scratch or optimizing an
          existing site for search engines, I always strive for excellence in
          both form and function. With a dedication to quality and a commitment
          to staying on top of the latest trends and technologies, I am
          confident in my ability to deliver exceptional results that exceed my{" "}
          {"clients'"} expectations.
        </p>

        <Image
          src={aboutImage}
          alt="about-image"
          className="mt-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="0"
        />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {social.map((item, key) => (
          <SocialButton key={key} id={key + 1} {...item} />
        ))}
      </div>

      <div className="mt-4 border border-border bg-bg-muted p-4 text-text lg:p-12">
        <p className="mb-2 font-satoshi text-meta uppercase text-text-muted lg:mb-8">
          Awards
        </p>

        <div className="flex flex-col divide-y divide-border font-satoshi">
          {awards.map(({ name, year }, key) => (
            <div
              className="flex items-center justify-between py-2 md:py-4 lg:py-6"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay={key * 100}
              key={key}
            >
              <h5 className="text text-text md:text-h6 lg:text-h5">{name}</h5>
              <p className="text-meta text-text">{year}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default AboutContents;
