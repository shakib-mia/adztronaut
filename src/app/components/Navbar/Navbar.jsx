"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaChevronDown } from "react-icons/fa";
import logo from "./../../../assets/images/logo.png";
import Button from "../Button/Button";
import useScrollDirection from "@/app/hooks/useScrollDirection";
import { HiBars3 } from "react-icons/hi2";

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
        className={`${scrollDirection === "up" ? "!translate-y-0" : "!-translate-y-40"} fixed left-0 right-0 top-0 z-[99999] mx-auto mt-4 flex w-full max-w-[95vw] items-center justify-between rounded-sm border border-border bg-bg-muted bg-opacity-20 p-3 text-brand backdrop-blur transition-transform !duration-500 md:mt-6 md:max-w-[95vw] lg:mt-12 lg:max-w-[fit-content] lg:justify-center`}
        style={{ borderEndStartRadius: navChecked ? "2px" : "0" }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Link href="/" onClick={() => setNavChecked(false)}>
          <Image src={logo} alt="Logo" className="w-8 lg:w-7" />
        </Link>

        <label className="sm:hidden">
          <HiBars3 className="text-4xl" />
          <input
            type="checkbox"
            onChange={(e) => setNavChecked(e.target.checked)}
            className="hidden"
          />
        </label>

        <ul
          className={`absolute left-0 top-16 z-10 hidden h-fit w-full flex-col items-end gap-5 overflow-visible border-t-0 border-border px-3 text-meta uppercase text-brand transition-all duration-300 sm:static sm:flex sm:w-auto sm:flex-row sm:items-center sm:border-0 sm:bg-transparent xl:overscroll-none`}
        >
          {navItem.slice(0, 5).map(({ path, text }, key) => (
            <li
              className="group relative mt-3 sm:mt-0"
              key={key}
              onClick={() => setNavChecked(false)}
            >
              <Link href={path}>{text}</Link>
              <div className="absolute bottom-0 left-0 right-0 mx-auto h-px w-0 bg-text transition-[width] duration-300 group-hover:w-full"></div>
            </li>
          ))}

          <div className="relative cursor-pointer">
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

          <Button className="mb-3 !border-brand !bg-brand uppercase sm:hidden">
            {"Let's"} Talk
          </Button>
        </ul>

        {/* <Button className="hidden p-0 !px-0 !py-0 sm:block">
          <Link
            href={"/contact"}
            className="hidden bg-bg-primary px-4 py-[0.625rem] uppercase text-black sm:block"
          >
            {"Let's"} Talk
          </Link>
        </Button> */}

        <Button className="hidden border-brand bg-brand !p-0 hover:text-brand sm:block">
          <Link
            href={"/contact"}
            className="flex items-center gap-2 px-4 py-[0.625rem] uppercase"
          >
            {"Let's"} Talk
          </Link>
        </Button>
      </nav>

      <div
        className={`fixed left-0 right-0 top-[78px] z-10 mx-auto max-h-[14.5rem] max-w-[95%] rounded-t-none border-t-0 border-border bg-bg-muted ${navChecked ? "h-full border" : "h-0 py-0"} flex w-full flex-col divide-y overflow-hidden border-t-0 border-border text-meta uppercase text-text backdrop-blur transition-[height_padding] duration-500 sm:static sm:hidden sm:w-auto sm:flex-row sm:items-center sm:gap-5 sm:border-0 sm:bg-transparent sm:backdrop-blur-0`}
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
              <div className="absolute bottom-0 left-0 right-0 mx-auto h-px w-0 bg-text transition-[width] duration-300 group-hover:w-full"></div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
