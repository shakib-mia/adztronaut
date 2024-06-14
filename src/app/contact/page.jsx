"use client";
import React from "react";
import Layout from "../components/Layout/Layout";
import image from "@/assets/images/contact-image.png";
import Image from "next/image";
import useLenis from "../hooks/useLenis";
import InputField from "../components/InputField/InputField";
import useAOS from "../hooks/useAos";
import Button from "../components/Button/Button";
import { GoArrowUpRight } from "react-icons/go";
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import SocialButton from "../components/SocialButton/SocialButton";

const Page = () => {
  useLenis();
  useAOS();

  const socialSites = [
    {
      icon: <FaInstagram />,
      text: "Instagram",
      link: "#",
    },
    {
      icon: <FaTwitter />,
      text: "Twitter",
      link: "#",
    },
    {
      icon: <FaFacebook />,
      text: "Facebook",
      link: "#",
    },
    {
      icon: <FaBehance />,
      text: "Behance",
      link: "#",
    },
    {
      icon: <FaDribbble />,
      text: "Dribbble",
      link: "#",
    },
    {
      icon: <FaPinterest />,
      text: "Pinterest",
      link: "#",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid h-full grid-cols-1 items-center gap-20 py-10 md:py-20 lg:grid-cols-2 lg:py-56">
      <Image src={image} alt="contact-image" data-aos="fade-right" />
      <aside className="text-text" data-aos="fade-left" data-aos-duration="200">
        <form
          className="border border-border bg-bg-muted p-5 font-satoshi md:p-8 xl:p-12"
          onSubmit={handleSubmit}
        >
          <p
            className="mb-2 text-meta uppercase text-text-muted"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Contact
          </p>
          <h2
            className="mb-8 text-h2 font-light"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            Let’s get in touch.
          </h2>

          <div className="flex flex-col gap-4">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <InputField placeholder="name" />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <InputField placeholder="email" />
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <div>
                <InputField placeholder="message" textarea />
              </div>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="1500"
              className="w-full"
            >
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </div>
          </div>
        </form>

        <div className="mt-4 grid grid-cols-2 gap-4">
          {socialSites.map((item, key) => (
            <SocialButton key={key} id={key + 1} {...item} />
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Page;
