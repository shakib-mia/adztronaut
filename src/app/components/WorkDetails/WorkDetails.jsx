import React from "react";
import ClientDetails from "../ClientDetails/ClientDetails";
import { PiArrowDown } from "react-icons/pi";
import { smoothScrollTo } from "@/utils/smoothScroll";
import Image from "next/image";
import { getElementTopPosition } from "@/utils/getElementTopPosition";
import WorkDetailsItem from "../WorkDetailsItem/WorkDetailsItem";
import ScrollToTop from "../ScrollTo/ScrollTo";
import { GoArrowUp } from "react-icons/go";

const WorkDetails = ({ data }) => {
  // console.log(data);
  return (
    <div className="pb-8 pt-20 xl:pb-32 xl:pt-56">
      <h1
        className="font-satoshi mb-4 text-center text-h2 md:text-heading-md xl:text-heading-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {data.heading}
      </h1>
      <p
        className="font-chillax mx-auto w-full text-center text text-text-muted md:text-md lg:w-1/2 lg:text-lg xl:text-xl"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        {data.subheading}
      </p>

      <div className="my-4 grid grid-cols-2 gap-2 md:my-6 md:gap-4 lg:my-8 lg:grid-cols-4 lg:gap-6 xl:my-12 xl:gap-8">
        {data.clientDetails &&
          Object.keys(data.clientDetails).map((item, key) => (
            <ClientDetails
              id={key + 1}
              key={key}
              heading={item}
              text={data.clientDetails[item]}
            />
          ))}
      </div>

      {/* <button
        className="mb-8 mt-6 flex w-full items-center justify-center gap-4 text-meta uppercase xl:mb-16 xl:mt-12"
        // onClick={() =>
        //   smoothScrollTo(
        //     getElementTopPosition(document.getElementById("workImage")),
        //     500,
        //   )
        // }
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="1500"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-muted">
          <PiArrowDown className="text-icon" />
        </div>
        more details
      </button> */}

      <ScrollToTop text={"To Top"} position={0} icon={<GoArrowUp />} />

      <Image
        id="workImage"
        src={data.image}
        alt={data.heading}
        className="w-full"
        width={1400}
        height={900}
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="2000"
      />

      <div className="grid grid-cols-1 gap-10 pt-8 md:pt-16 lg:grid-cols-2 xl:gap-24 xl:pt-32">
        <aside>
          <p
            className="text-meta uppercase text-text-muted"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            About
          </p>
          <h2
            className="font-satoshi text-h5 xl:text-h2"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            {data.about?.heading}
          </h2>
        </aside>
        <aside className="flex flex-col gap-8">
          {data.about?.details?.map((item, key) => (
            <WorkDetailsItem id={key} key={key} {...item} />
          ))}
        </aside>
      </div>
    </div>
  );
};

export default WorkDetails;
