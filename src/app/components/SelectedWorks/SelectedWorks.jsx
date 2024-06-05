import Link from "next/link";
import React from "react";
import { PiArrowDownRightThin } from "react-icons/pi";
import Work from "../Work/Work";
import space from "@/assets/images/selected-works/space.jpg";
import nova from "@/assets/images/selected-works/nova.jpg";
import sonic from "@/assets/images/selected-works/sonic.jpg";
import solar from "@/assets/images/selected-works/solar.jpg";

const SelectedWorks = () => {
  const data = [
    {
      id: 1,
      image: space,
      heading: "Space",
      subheading: "Webdesign",
    },
    {
      id: 2,

      image: nova,
      heading: "Nova",
      subheading: "Webdesign",
    },
    {
      id: 3,
      image: sonic,
      heading: "Sonic",
      subheading: "Webdesign",
    },
    {
      id: 4,
      image: solar,
      heading: "Solar",
      subheading: "Webdesign",
    },
  ];

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

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {data.map((item, key) => (
          <Work {...item} key={key} id={key + 1} />
        ))}
      </div>
    </section>
  );
};

export default SelectedWorks;
