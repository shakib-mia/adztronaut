import React from "react";
import { PiArrowDownThin, PiArrowRightThin } from "react-icons/pi";
import Timeline from "../Timeline/Timeline";

const Steps = () => {
  // const handleScrollDown = () => {
  //   window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  // };
  return (
    <section className="pt-10 xl:pt-20">
      <h2
        className="font font-satoshi mx-auto w-7/12 text-center text-h3 md:w-2/3 md:text-h1 xl:text-heading-sm"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        {" "}
        Why <span className="font-gambetta italic">Adztronaut</span>?
      </h2>
      <p
        className="font-chillax mx-auto mb-6 mt-4 text-center text-sm opacity-80 md:mb-12 md:w-1/2 md:text-h4"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        Because we’re built different—and built for you.
      </p>

      {/* <div
        className="mx-auto flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border bg-bg-muted"
        onClick={handleScrollDown}
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <PiArrowDownThin className="text-lg text-icon" />
      </div> */}

      <Timeline />
    </section>
  );
};

export default Steps;
