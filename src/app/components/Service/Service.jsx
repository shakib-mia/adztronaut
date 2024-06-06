import Link from "next/link";
import React from "react";
import { PiArrowDownRightThin } from "react-icons/pi";

const Service = ({ id, heading, text, link, linkText }) => {
  // console.log(id);
  return (
    <article
      className="flex flex-col border border-border bg-bg-muted p-5 text-text md:p-8 xl:p-12"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={id * 150}
    >
      <p className="mb-1 text-meta text-text-muted">0{id}</p>
      <h4 className="mb-2 font-satoshi text-h4 uppercase text-text">
        {heading}
      </h4>
      <div className="flex flex-grow flex-col justify-between">
        <p className="mb-8 font-chillax text-text-muted">{text}</p>

        <Link href={link} className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border">
            {/* <FaArrowRight className="-rotate-45 font-thin" /> */}
            <PiArrowDownRightThin className="-rotate-90" />
          </div>
          <p className="font-satoshi text-meta uppercase tracking-widest text-text">
            {linkText}
          </p>
        </Link>
      </div>
    </article>
  );
};

export default Service;
