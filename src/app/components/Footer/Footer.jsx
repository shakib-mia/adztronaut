import React from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { FaBehance, FaInstagram, FaTwitter } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineDribbble } from "react-icons/ai";
import Link from "next/link";
import Button from "../Button/Button";
import { GoArrowUp, GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  function easeOutQuad(t) {
    return t * (2 - t);
  }

  function smoothScrollToTop(duration) {
    const start = window.scrollY;
    const startTime =
      "now" in window.performance ? performance.now() : new Date().getTime();

    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const destinationOffset = 0;
    const destinationOffsetToScroll = Math.round(
      documentHeight - windowHeight < destinationOffset
        ? documentHeight - windowHeight
        : destinationOffset,
    );

    if ("requestAnimationFrame" in window === false) {
      window.scroll(0, destinationOffsetToScroll);
      return;
    }

    function scroll() {
      const now =
        "now" in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, (now - startTime) / duration);
      const timeFunction = easeOutQuad(time);
      window.scroll(
        0,
        Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start),
      );

      if (window.scrollY !== destinationOffsetToScroll) {
        requestAnimationFrame(scroll);
      }
    }

    scroll();
  }

  return (
    <footer className="relative bg-bg-muted">
      <div className="mx-auto grid grid-cols-1 gap-10 p-4 uppercase text-text-muted md:grid-cols-2 xl:grid-cols-4 xl:gap-4 2xl:max-w-[1300px]">
        <aside data-aos="fade-up" data-aos-duration="1000">
          <Image src={logo} alt="logo" />
          <ul className="mt-6 flex flex-col gap-4 md:mt-8 xl:mt-11">
            <li>
              <a className="group flex items-center gap-2" href="#">
                <aside className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-muted text-text-muted transition duration-500 group-hover:bg-bg-secondary">
                  <FaInstagram />
                </aside>
                <p className="text-meta text-text-muted transition duration-500 group-hover:text-text">
                  INSTAGRAM
                </p>
              </a>
            </li>

            <li>
              <a className="group flex items-center gap-2" href="#">
                <aside className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-muted text-text-muted transition duration-500 group-hover:bg-bg-secondary">
                  <CiTwitter />
                </aside>
                <p className="text-meta text-text-muted transition duration-500 group-hover:text-text">
                  TWITTER
                </p>
              </a>
            </li>

            <li>
              <a className="group flex items-center gap-2" href="#">
                <aside className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-muted text-text-muted transition duration-500 group-hover:bg-bg-secondary">
                  <AiOutlineDribbble />
                </aside>
                <p className="text-meta text-text-muted transition duration-500 group-hover:text-text">
                  DRIBBBLE
                </p>
              </a>
            </li>

            <li>
              <a className="group flex items-center gap-2" href="#">
                <aside className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-muted text-text-muted transition duration-500 group-hover:bg-bg-secondary">
                  <FaBehance />
                </aside>
                <p className="text-meta text-text-muted transition duration-500 group-hover:text-text">
                  BEHANCE
                </p>
              </a>
            </li>
          </ul>
        </aside>
        <aside data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <h5 className="text-h6 text-text xl:text-h5">Pages</h5>
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

          <Button className="!p-0">
            <Link
              href={"/contact"}
              className="flex items-center gap-2 bg-bg-primary px-4 py-[0.625rem] uppercase text-black"
            >
              more templates
              <GoArrowUpRight />
            </Link>
          </Button>
        </aside>
        <aside
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <h5 className="text-h6 text-text xl:text-h5">CMS</h5>
          <ul className="mt-8 flex flex-col gap-4">
            <li>
              <Link
                className="transition duration-500 hover:text-text"
                href={"/Home"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-500 hover:text-text"
                href={"/Services"}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-500 hover:text-text"
                href={"/About"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-500 hover:text-text"
                href={"/Contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </aside>

        <aside
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1500"
        >
          <h5 className="text-h6 text-text xl:text-h5">Utility Pages</h5>
          <ul className="mt-8 flex flex-col gap-4">
            <li>
              <Link
                className="transition duration-500 hover:text-text"
                href={"/Home"}
              >
                404 Error Page
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-500 hover:text-text"
                href={"/Services"}
              >
                Password Protected
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-500 hover:text-text"
                href={"/About"}
              >
                Styleguide
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-500 hover:text-text"
                href={"/Contact"}
              >
                Licensing
              </Link>
            </li>
            <li>
              <Link
                className="transition duration-500 hover:text-text"
                href={"/Contact"}
              >
                Changelog
              </Link>
            </li>
          </ul>
        </aside>
      </div>

      <div className="mx-auto mt-20 flex justify-between p-4 pb-16 2xl:max-w-[1300px]">
        <p className="text-xs text-text-muted">
          Copyright © 2024 Developed by{" "}
          <a href="https://raddito.com/" className="font-semibold">
            Raddito LLC
          </a>
          . Designed by{" "}
          <a href="https://templates.gola.io/" className="font-semibold">
            Gola
          </a>
          .
        </p>

        <div
          className="absolute bottom-5 right-5 flex cursor-pointer items-center gap-4 text-meta text-text md:static"
          onClick={() => smoothScrollToTop(2000)}
        >
          TO TOP
          <aside className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-muted">
            <GoArrowUp />
          </aside>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
