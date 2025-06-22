// components/Footer/ScrollToTop.jsx
"use client";
import { GoArrowUp } from "react-icons/go";
import { smoothScrollTo } from "@/utils/smoothScroll";

const ScrollToTop = () => {
  return (
    <div
      className="absolute bottom-5 right-5 flex cursor-pointer items-center gap-4 text-meta text-text md:static"
      onClick={() => smoothScrollTo(0, 2000)}
    >
      TO TOP
      <aside className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-muted">
        <GoArrowUp />
      </aside>
    </div>
  );
};

export default ScrollToTop;
