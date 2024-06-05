"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/images/logo.png";
import Button from "../Button/Button";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [navChecked, setNavChecked] = useState(false);
  return (
    <nav className="fixed left-0 right-0 top-0 mx-auto mt-4 flex w-full max-w-[95%] items-center justify-between rounded-sm border border-border bg-bg-muted p-3 text-text backdrop-blur md:mt-6 md:max-w-[41.25rem] lg:mt-12">
      <Image src={logo} alt="Logo" className="w-14" />

      <label className="sm:hidden">
        <FaBars />
        <input
          type="checkbox"
          onChange={(e) => setNavChecked(e.target.checked)}
          className="hidden"
        />
      </label>
      {/* <div className="flex items-center gap-4"> */}
      <ul
        className={`sm:bg-transparent absolute right-0 top-12 flex w-full flex-col items-end gap-5 overflow-hidden border-t-0 border-border bg-bg-muted px-3 text-meta uppercase text-text sm:static sm:w-auto sm:flex-row sm:items-center sm:border-0 ${navChecked ? "h-auto border" : "h-0 border-0 sm:h-auto"}`}
      >
        <li className="mt-3 sm:mt-0">Services</li>
        <li>Work</li>
        <li>About</li>
        <li>Blog</li>
        <li>Pages</li>
        <Button className={"mb-3 sm:hidden"}>{"Let's"} Talk</Button>
      </ul>
      {/* </div> */}
      <Button className={"hidden sm:block"}>{"Let's"} Talk</Button>
    </nav>
  );
};

export default Navbar;
