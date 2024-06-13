import Link from "next/link";
import React from "react";
import { PiArrowDownRightThin } from "react-icons/pi";
// import Work from "../Work/works";
import Works from "../Works/Works";
import SeeAll from "../SeeAll/SeeAll";

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

        <SeeAll link={"/works"} />
      </div>

      <Works />
    </section>
  );
};

export default SelectedWorks;
