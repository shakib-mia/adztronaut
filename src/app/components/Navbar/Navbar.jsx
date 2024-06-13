"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaChevronDown } from "react-icons/fa";
import logo from "./../../../assets/images/logo.png";
import Button from "../Button/Button";
import useScrollDirection from "@/app/hooks/useScrollDirection";
import { IoChevronDown } from "react-icons/io5";

const Navbar = () => {
  const [navChecked, setNavChecked] = useState(false);
  const { scrollDirection } = useScrollDirection();

  // console.log(scrollDirection);

  const navItem = [
    {
      path: "/services",
      text: "Services",
    },
    {
      path: "/works",
      text: "Work",
    },
    {
      path: "/testimonials",
      text: "Testimonials",
    },
    {
      path: "/about",
      text: "About",
    },
    {
      path: "/blogs",
      text: "blogs",
    },
    {
      path: "/pricing",
      text: "pricing",
    },
  ];

  return (
    <>
      {/* use translateY here for animation  */}

      {/* ${scrollDirection === "up" ? "-translate-y-20" : ""} */}
      <nav
        className={`${scrollDirection === "up" ? "!translate-y-0" : "!-translate-y-40"} fixed left-0 right-0 top-0 z-[99999] mx-auto mt-4 flex w-full max-w-[95vw] items-center justify-between rounded-sm border border-border bg-bg-muted p-3 text-text backdrop-blur transition-transform !duration-500 md:mt-6 md:max-w-[95vw] lg:mt-12 lg:max-w-[41.5rem]`}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Link href="/">
          <Image src={logo} alt="Logo" className="w-14" />
        </Link>

        <label className="sm:hidden">
          <FaBars />
          <input
            type="checkbox"
            onChange={(e) => setNavChecked(e.target.checked)}
            className="hidden"
          />
        </label>

        <ul
          className={`absolute left-0 top-16 z-10 hidden h-fit w-full flex-col items-end gap-5 overflow-visible border-t-0 border-border px-3 text-meta uppercase text-text transition-all duration-300 sm:static sm:flex sm:w-auto sm:flex-row sm:items-center sm:border-0 sm:bg-transparent xl:overscroll-none`}
        >
          {navItem.slice(0, 5).map(({ path, text }, key) => (
            <li className="group relative mt-3 sm:mt-0" key={key}>
              <Link href={path}>{text}</Link>
              <div className="absolute bottom-0 left-0 right-0 mx-auto h-px w-0 bg-text transition-[width] duration-300 group-hover:w-full"></div>
            </li>
          ))}

          <div className="relative">
            <li className="group mt-3 flex items-center gap-2 sm:mt-0">
              <p>More</p>
              <FaChevronDown className="transition group-hover:rotate-180" />
              {/* <div className="absolute bottom-0 left-0 right-0 mx-auto h-px w-0 bg-text transition-[width] duration-300 group-hover:w-full"></div> */}
              <div className="absolute top-0 h-0 overflow-hidden pt-12 transition-[height] duration-500 group-hover:h-auto">
                <ul className="flex flex-col gap-2 rounded bg-border-inverse p-4">
                  <li className="group relative mt-3 sm:mt-0">
                    <Link href={"/pricing"}>Pricing</Link>
                    {/* <div className="absolute bottom-0 left-0 right-0 mx-auto h-px w-0 bg-text transition-[width] duration-300 group-hover:w-full"></div> */}
                  </li>
                </ul>
              </div>
            </li>
          </div>

          <Button className="mb-3 uppercase sm:hidden">{"Let's"} Talk</Button>
        </ul>

        {/* <Button className="hidden p-0 !px-0 !py-0 sm:block">
          <Link
            href={"/contact"}
            className="hidden bg-bg-primary px-4 py-[0.625rem] uppercase text-black sm:block"
          >
            {"Let's"} Talk
          </Link>
        </Button> */}

        <Button className="hidden !p-0 sm:block">
          <Link
            href={"/contact"}
            className="flex items-center gap-2 px-4 py-[0.625rem] uppercase"
          >
            {"Let's"} Talk
          </Link>
        </Button>
      </nav>

      <div
        className={`fixed left-0 right-0 top-16 z-10 mx-auto max-w-[95%] ${navChecked ? "h-60" : "h-0"} flex w-full flex-col divide-y overflow-hidden border-t-0 border-border text-meta uppercase text-text backdrop-blur transition-[height] duration-300 sm:static sm:hidden sm:w-auto sm:flex-row sm:items-center sm:gap-5 sm:border-0 sm:bg-transparent sm:backdrop-blur-0`}
      >
        <ul className={`border border-t-0 border-border`}>
          {navItem.map(({ path, text }, key) => (
            <li className="group relative" key={key}>
              <Link className="inline-block w-full p-2" href={path}>
                {text}
              </Link>
              <div className="absolute bottom-0 left-0 right-0 mx-auto h-px w-0 bg-text transition-[width] duration-300 group-hover:w-full"></div>
            </li>
          ))}

          {/* <Button className="mb-3 w-fit !p-0 !py-0 sm:hidden">
          <Link href={"/contact"} className="mb-3 bg-bg-primary px-4 py-2">
            {"Let's"} Talk
          </Link>
        </Button> */}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
