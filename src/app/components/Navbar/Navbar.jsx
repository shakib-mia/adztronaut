"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaChevronDown,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import logo from "./../../../assets/images/logo.png";
import Button from "../Button/Button";
import useScrollDirection from "@/app/hooks/useScrollDirection";

const Navbar = () => {
  const [navChecked, setNavChecked] = useState(false);
  const { scrollDirection } = useScrollDirection();

  const navItem = [
    { path: "/services", text: "Services" },
    { path: "/works", text: "Work" },
    { path: "/testimonials", text: "Testimonials" },
    { path: "/about", text: "About" },
    { path: "/blogs", text: "Blogs" },
    { path: "/pricing", text: "Pricing" },
  ];

  return (
    <>
      <nav
        className={`${
          scrollDirection === "up" ? "!translate-y-0" : "!-translate-y-40"
        } fixed left-0 right-0 top-0 z-[99999] mx-auto mt-4 flex w-full max-w-[95vw] items-center justify-between rounded-sm border border-border bg-bg-muted bg-opacity-20 p-3 text-brand backdrop-blur transition-transform !duration-500 md:mt-6 md:max-w-[95vw] lg:mt-12 lg:max-w-[fit-content] lg:justify-center`}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Logo */}
        <Link href="/" onClick={() => setNavChecked(false)}>
          <Image src={logo} alt="Logo" className="w-8 lg:w-7" />
        </Link>

        {/* Hamburger Button */}
        <label
          className="relative z-50 flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-[6px] sm:hidden"
          onClick={() => setNavChecked(!navChecked)}
        >
          <span
            className={`block h-[2px] w-6 bg-brand transition-all duration-300 ease-in-out ${
              navChecked ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] bg-brand transition-all duration-300 ease-in-out ${
              navChecked ? "w-0" : "w-6"
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-brand transition-all duration-300 ease-in-out ${
              navChecked ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </label>

        {/* Desktop Nav */}
        <ul
          className={`absolute left-0 top-16 z-10 hidden h-fit w-full flex-col items-end gap-5 border-t-0 border-border px-3 text-meta uppercase text-brand transition-all duration-300 sm:static sm:flex sm:w-auto sm:flex-row sm:items-center sm:border-0 sm:bg-transparent`}
        >
          {navItem.slice(0, 5).map(({ path, text }, key) => (
            <li
              className="group relative mt-3 sm:mt-0"
              key={key}
              onClick={() => setNavChecked(false)}
            >
              <Link href={path}>{text}</Link>
              <div className="absolute bottom-0 left-0 right-0 mx-auto h-px w-0 bg-text transition-[width] duration-300 group-hover:w-full" />
            </li>
          ))}

          {/* More Dropdown */}
          <div className="relative cursor-pointer">
            <li className="group mt-3 flex items-center gap-2 sm:mt-0">
              <p>More</p>
              <FaChevronDown className="transition group-hover:rotate-180" />
              <div className="absolute top-0 h-0 overflow-hidden pt-12 transition-[height] duration-500 group-hover:h-auto">
                <ul className="flex flex-col gap-2 rounded bg-border-inverse p-4">
                  <li className="group relative mt-3 sm:mt-0">
                    <Link href={"/pricing"}>Pricing</Link>
                  </li>
                </ul>
              </div>
            </li>
          </div>

          <Button className="mb-3 !border-brand !bg-brand uppercase sm:hidden">
            {"Let's"} Talk
          </Button>
        </ul>

        {/* Desktop CTA */}
        <Button className="hidden border-brand bg-brand !p-0 hover:text-brand sm:block">
          <Link
            href={"/contact"}
            className="flex items-center gap-2 px-4 py-[0.625rem] uppercase"
          >
            {"Let's"} Talk
          </Link>
        </Button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed left-0 right-0 top-[78px] z-10 mx-auto max-h-[14.5rem] max-w-[95%] rounded-t-none border-t-0 border-border bg-bg-muted ${
          navChecked ? "h-full border" : "h-0 py-0"
        } flex w-full flex-col divide-y overflow-hidden border-t-0 border-border text-meta uppercase text-text backdrop-blur transition-[height_padding] duration-500 sm:static sm:hidden sm:w-auto sm:flex-row sm:items-center sm:gap-5 sm:border-0 sm:bg-transparent sm:backdrop-blur-0`}
      >
        <ul className={`divide-y-[1px] divide-border`}>
          {navItem.map(({ path, text }, key) => (
            <li className="group relative rounded-none py-2" key={key}>
              <Link
                className="inline-block w-full px-3"
                href={path}
                onClick={() => setNavChecked(false)}
              >
                {text}
              </Link>
              <div className="absolute bottom-0 left-0 right-0 mx-auto h-px w-0 bg-text transition-[width] duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
