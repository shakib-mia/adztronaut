import Image from "next/image";
import React from "react";

const ServiceContentDetails = ({ image, tag, header, details, id }) => {
  return (
    <div className="flex flex-col gap-8 text-text" id={id}>
      <div className="border border-border bg-bg p-8 lg:p-16">
        <p
          className="font-satoshi text-meta-sm uppercase lg:text-meta"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          {tag}
        </p>
        <h1
          className="mb-6 mt-4 font-satoshi text-3xl lg:mb-12 lg:text-h1"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          {header}
        </h1>

        <Image
          src={image}
          alt="Transforming-ideas-into-reality"
          className="mb-4 md:mb-8 lg:mb-12"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="500"
        />

        <div className="flex flex-col divide-y divide-border">
          {details.map(({ heading, paragraph }, key) => (
            <div
              className="flex flex-wrap py-6 lg:py-12"
              data-aos="fade-right"
              data-aos-duration="1000"
              key={key}
            >
              <aside className="w-full text-meta uppercase text-text lg:w-2/12">
                {heading}
              </aside>
              <div className="w-full font-chillax text-sm text-text-muted lg:w-10/12 lg:text">
                {paragraph}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceContentDetails;
