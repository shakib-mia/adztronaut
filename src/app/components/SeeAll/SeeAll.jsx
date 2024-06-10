import Link from "next/link";
import React from "react";
import { PiArrowDownRightThin } from "react-icons/pi";

const SeeAll = ({ link }) => {
  return (
    <Link
      href={link}
      className="flex items-center gap-3"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg-muted p-2">
        <PiArrowDownRightThin className="-rotate-90" />
      </div>
      <p className="font-satoshi text-meta uppercase text-text">See all</p>
    </Link>
  );
};

export default SeeAll;
