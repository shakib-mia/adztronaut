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
  return (
    <footer className="relative bg-bg-muted">
      <div className="mx-auto grid grid-cols-1 gap-10 p-4 uppercase text-text-muted md:grid-cols-2 xl:grid-cols-4 xl:gap-4 2xl:max-w-[1300px]">
        <aside data-aos="fade-up" data-aos-duration="1000">
          <Image src={logo} alt="logo" />
          <ul className="mt-6 flex flex-col gap-4 md:mt-8 xl:mt-11">
            <li>
              <a className="flex items-center gap-2" href="#">
                <aside className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-muted text-text-muted">
                  <FaInstagram />
                </aside>
                <p className="text-meta text-text-muted">INSTAGRAM</p>
              </a>
            </li>

            <li>
              <a className="flex items-center gap-2" href="#">
                <aside className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-muted text-text-muted">
                  <CiTwitter />
                </aside>
                <p className="text-meta text-text-muted">TWITTER</p>
              </a>
            </li>

            <li>
              <a className="flex items-center gap-2" href="#">
                <aside className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-muted text-text-muted">
                  <AiOutlineDribbble />
                </aside>
                <p className="text-meta text-text-muted">DRIBBBLE</p>
              </a>
            </li>

            <li>
              <a className="flex items-center gap-2" href="#">
                <aside className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-muted text-text-muted">
                  <FaBehance />
                </aside>
                <p className="text-meta text-text-muted">BEHANCE</p>
              </a>
            </li>
          </ul>
        </aside>
        <aside data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <h5 className="text-h6 text-text xl:text-h5">Pages</h5>
          <ul className="mt-8 flex flex-col gap-4">
            <li>
              <Link href={"/Home"}>Home</Link>
            </li>
            <li>
              <Link href={"/Services"}>Services</Link>
            </li>
            <li>
              <Link href={"/About"}>About</Link>
            </li>
            <li>
              <Link href={"/Contact"}>Contact</Link>
            </li>
          </ul>

          <Button className="my-8 flex items-center justify-center gap-2 uppercase">
            get in touch
            <GoArrowUpRight />
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
              <Link href={"/Home"}>Home</Link>
            </li>
            <li>
              <Link href={"/Services"}>Services</Link>
            </li>
            <li>
              <Link href={"/About"}>About</Link>
            </li>
            <li>
              <Link href={"/Contact"}>Contact</Link>
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
              <Link href={"/Home"}>404 Error Page</Link>
            </li>
            <li>
              <Link href={"/Services"}>Password Protected</Link>
            </li>
            <li>
              <Link href={"/About"}>Styleguide</Link>
            </li>
            <li>
              <Link href={"/Contact"}>Licensing</Link>
            </li>
            <li>
              <Link href={"/Contact"}>Changelog</Link>
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

        <a
          href="#top"
          className="absolute bottom-5 right-5 flex items-center gap-4 text-meta text-text md:static"
        >
          TO TOP
          <aside className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-muted">
            <GoArrowUp />
          </aside>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
