import Link from "next/link";
import React from "react";
import { PiArrowDownRightThin } from "react-icons/pi";
import Work from "../Work/Work";
import Works from "../Works/Works";

const SelectedWorks = () => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2
          className="font-satoshi text-h3 md:text-h2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Selected <span className="font-gambetta italic">Work</span>
        </h2>

        <Link
          href={"/"}
          className="flex items-center gap-3"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg-muted p-2">
            <PiArrowDownRightThin className="-rotate-90" />
          </div>
          <p className="font-satoshi text-meta uppercase text-text">See all</p>
        </Link>
      </div>

      <Works />
    </section>
  );
};

export default SelectedWorks;
