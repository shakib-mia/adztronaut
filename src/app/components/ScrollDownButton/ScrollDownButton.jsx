"use client";
import { smoothScrollTo } from "@/utils/smoothScroll";
import React from "react";
import { PiArrowDown } from "react-icons/pi";

const ScrollDownButton = ({ text }) => {
  return (
    <button
      className="mb-8 mt-6 flex w-full items-center justify-center gap-4 text-meta uppercase lg:mb-16 lg:mt-12"
      onClick={() => {
        const currentScroll = window.scrollY || window.pageYOffset;
        smoothScrollTo(currentScroll + 500, 500);
      }}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-muted">
        <PiArrowDown className="text-icon" />
      </div>
      {text || "Read more"}
    </button>
  );
};

export default ScrollDownButton;
