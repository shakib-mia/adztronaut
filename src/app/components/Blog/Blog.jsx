import React from "react";
import blog from "@/assets/images/blogs/blog-1.jpg";
import Image from "next/image";
import { PiArrowDownRightThin } from "react-icons/pi";
import Link from "next/link";

const Blog = ({ id, image, heading, date, paragraph, tag }) => {
  return (
    <article
      className="group relative"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Link
        href={"/"}
        className="inline-block h-full bg-bg-muted p-4 md:p-8 lg:p-12"
      >
        <div className="relative">
          <Image src={image} alt="blog" />
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto hidden h-8 w-8 items-center justify-center rounded-full border border-border group-hover:flex">
            {/* <FaArrowRight className="-rotate-45 font-thin" /> */}
            <PiArrowDownRightThin className="-rotate-90" />
          </div>
        </div>
        <div className="mb-16 mt-8">
          <small className="mb-2 text-meta-sm text-text-muted">{date}</small>
          <h4 className="mb-2 font-satoshi text-h4">{heading}</h4>
          <p className="font-chillax text text-text-muted">{paragraph}</p>
        </div>

        <span className="absolute bottom-12 border border-border bg-bg-muted p-2 text-meta-sm uppercase text-text">
          {tag}
        </span>
      </Link>
    </article>
  );
};

export default Blog;
