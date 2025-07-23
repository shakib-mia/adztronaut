import React from "react";
import logo from "@/assets/images/logo-yellow-adztronaut.png";
import Image from "next/image";
import {
  FaBehance,
  FaEnvelope,
  FaEnvelopeOpen,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineDribbble } from "react-icons/ai";
import Link from "next/link";
import Button from "../Button/Button";
import { GoArrowUp, GoArrowUpRight } from "react-icons/go";
import { smoothScrollTo } from "@/utils/smoothScroll";
import { FaLocationDot } from "react-icons/fa6";
import ScrollTo from "../ScrollTo/ScrollTo";

const Footer = () => {
  return (
    <footer className="relative bg-bg-muted">
      <div className="mx-auto grid grid-cols-1 gap-10 p-4 uppercase text-text-muted md:grid-cols-2 xl:grid-cols-4 xl:gap-4 2xl:max-w-[1300px]">
        <aside data-aos="fade-up" data-aos-duration="1000">
          <Image
            src={logo}
            alt="logo"
            className="w-[40%] rounded-none border-b border-brand pb-2"
          />
          <ul className="mt-6 flex flex-col gap-4 md:mt-8">
            <li>
              <a
                className="group flex items-center gap-2"
                href="https://www.instagram.com/adztronaut/"
                target="_blank"
                rel="noreferrer"
              >
                <aside className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-muted text-text-muted transition duration-500 group-hover:bg-bg-secondary">
                  <FaInstagram />
                </aside>
                <p className="text-meta text-text-muted transition duration-500 group-hover:text-text">
                  INSTAGRAM
                </p>
              </a>
            </li>

            <li>
              <a
                className="group flex items-center gap-2"
                href="https://www.facebook.com/adztronautofficial"
                target="_blank"
                rel="noreferrer"
              >
                <aside className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-muted text-text-muted transition duration-500 group-hover:bg-bg-secondary">
                  <FaFacebook />
                </aside>
                <p className="text-meta text-text-muted transition duration-500 group-hover:text-text">
                  Facebook
                </p>
              </a>
            </li>

            <li>
              <a
                className="group flex items-center gap-2"
                href="https://www.youtube.com/@adztronaut"
                target="_blank"
                rel="noreferrer"
              >
                <aside className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-muted text-text-muted transition duration-500 group-hover:bg-bg-secondary">
                  <FaYoutube />
                </aside>
                <p className="text-meta text-text-muted transition duration-500 group-hover:text-text">
                  YouTube
                </p>
              </a>
            </li>
          </ul>
        </aside>
        <aside data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <h5 className="text-h6 text-text xl:text-h5">Links</h5>
          <ul className="mb-4 mt-8 flex flex-col gap-4">
            <li>
              <Link
                className="transition duration-500 hover:text-text"
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-500 hover:text-text"
                href={"/services"}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-500 hover:text-text"
                href={"/about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-500 hover:text-text"
                href={"/contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </aside>
        <aside
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <h5 className="text-h6 text-text xl:text-h5">Contents</h5>
          <ul className="mt-8 flex flex-col gap-4">
            <li>
              <Link
                className="transition duration-500 hover:text-text"
                href={"/works"}
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-500 hover:text-text"
                href={"/blogs"}
              >
                Blogs
              </Link>
            </li>
            {/* <li>
              <Link
                className="transition duration-500 hover:text-text"
                href={"/about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-500 hover:text-text"
                href={"/contact"}
              >
                Contact
              </Link>
            </li> */}
          </ul>
        </aside>

        <aside
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1500"
        >
          <h5 className="text-h6 text-text xl:text-h5">Contact</h5>
          <ul className="mt-8 flex flex-col gap-4">
            <li>
              <a
                className="flex items-center gap-2 transition duration-500 hover:text-text"
                href={"tel:+917044732429"}
              >
                <FaPhone className="rotate-90" />
                +91 7044 732 429
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 lowercase transition duration-500 hover:text-text"
                href={"mailto:connect@adztronaut.com"}
              >
                <div className="aspect-square w-4">
                  <FaEnvelopeOpen />
                </div>
                connect@adztronaut.com
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 transition duration-500 hover:text-text"
                // href={"https://maps.app.goo.gl/2UzAdKXEh7w2b9e66"}
                target="_blank"
                rel="noreferrer"
              >
                <div className="aspect-square w-4">
                  <FaLocationDot />
                </div>
                Kolkata, West Bengal, India
              </a>
            </li>
          </ul>
        </aside>
      </div>

      <div className="mx-auto mt-4 flex flex-col items-center justify-center p-4 pb-16 md:mt-20 md:flex-row lg:justify-between 2xl:max-w-[1300px]">
        <p className="text-center text-xs text-text-muted lg:text-left">
          Copyright © 2024 Developed by{" "}
          <a
            href="https://adztronaut.com"
            className="font-semibold"
            rel="nofollow"
          >
            adztronaut.com
          </a>
          . Designed by{" "}
          <a href="https://templates.gola.io/" className="font-semibold">
            Gola
          </a>
          .
        </p>

        {/* <ScrollToTop text={"To Top"} position={0} icon={<GoArrowUp />} /> */}
        <ScrollTo position={0}>
          <div className="flex cursor-pointer items-center gap-4 text-meta text-text md:static">
            TO TOP
            <aside className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-muted">
              <GoArrowUp />
            </aside>
          </div>
        </ScrollTo>

        {/* <div
          className="absolute bottom-5 right-5 flex cursor-pointer items-center gap-4 text-meta text-text md:static"
          // onClick={() => smoothScrollTo(0, 2000)}
        >
          TO TOP
          <aside className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-muted">
            <GoArrowUp />
          </aside>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
