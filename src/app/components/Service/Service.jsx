import Link from "next/link";
import React from "react";
import { PiArrowDownRightThin } from "react-icons/pi";

const Service = ({ id, title, services, whyItMatters }) => {
  // console.log(id);
  return (
    <article
      className="h-full"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={id * 150}
    >
      <div className="flex h-full flex-col border border-border bg-bg-muted p-5 text-text transition-colors duration-300 hover:bg-bg-muted-2 md:p-8 xl:p-12">
        {/* <p className="mb-1 text-meta text-text-muted">0{id}</p> */}
        <h4 className="font-satoshi mb-2 text-h4 uppercase text-text">
          {title}
        </h4>
        <ul className="my-4 list-disc space-y-2 pl-4">
          {services.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>

        <p>
          <b>Why It Matters:</b> {whyItMatters}
        </p>

        {/* <div className="flex flex-grow flex-col justify-between">
          <p className="mb-8 font-chillax text-text-muted">{text}</p>

          <Link href={link} className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border">
              <PiArrowDownRightThin className="-rotate-90" />
            </div>
            <p className="font-satoshi text-meta uppercase tracking-widest text-text">
              {linkText}
            </p>
          </Link>
        </div> */}
      </div>
    </article>
  );
};

export default Service;
