import React from "react";
import work from "@/assets/images/selected-works/nova.jpg";
import Image from "next/image";

const Work = ({ image, heading, subheading, id }) => {
  return (
    <article
      className="relative"
      data-aos="fade-up"
      data-aos-delay={id % 2 ? 250 : 2 * 250}
    >
      <Image src={image} alt="work" className="w-full" />

      <div className="relative mx-8">
        <div className="absolute bottom-8 flex w-full justify-between px-4 py-3 text-text backdrop-blur-xl">
          <h4 className="font-satoshi text-h4">{heading}</h4>
          <p className="font-satoshi uppercase">{subheading}</p>
        </div>
      </div>
    </article>
  );
};

export default Work;
