import React from "react";
import { PiArrowDownThin, PiArrowRightThin } from "react-icons/pi";
import Timeline from "../Timeline/Timeline";

const Steps = () => {
  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };
  return (
    <section className="pt-10 xl:pt-44">
      <p
        className="text-center text-xs uppercase text-text md:text-meta"
        data-aos="fade-up"
      >
        THe PRocess
      </p>
      <h2
        className="font mx-auto w-7/12 text-center font-satoshi text-h3 md:w-2/3 md:text-h1 xl:text-heading-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        {" "}
        Your Website <span className="font-gambetta italic">in 5 steps</span>
      </h2>
      <p
        className="mx-auto mb-6 mt-4 text-center font-chillax text-sm opacity-80 md:mb-12 md:w-1/2 md:text-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        Our process ensures that we create a website tailored to your business
        needs.
      </p>

      <div
        className="mx-auto flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border bg-bg-muted"
        onClick={handleScrollDown}
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <PiArrowDownThin className="text-lg text-icon" />
      </div>

      <Timeline />
    </section>
  );
};

export default Steps;
