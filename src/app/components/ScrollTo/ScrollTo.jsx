// components/Footer/ScrollToTop.jsx
"use client";
import { GoArrowUp } from "react-icons/go";
import { smoothScrollTo } from "@/utils/smoothScroll";

const ScrollTo = ({ position, children }) => {
  return (
    <div
      className="cursor-pointer text-meta text-text md:static"
      onClick={() => smoothScrollTo(position, 2000)}
    >
      {children}
    </div>
  );
};

export default ScrollTo;
