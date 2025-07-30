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
          className="font-satoshi mb-6 mt-4 text-3xl lg:mb-12 lg:text-h1"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          {header}
        </h1>

        <div className="flex flex-col gap-4 lg:flex-row">
          <aside className="h-full w-full object-cover lg:w-1/2">
            <Image
              src={image}
              alt="Transforming-ideas-into-reality"
              className="h-full w-full"
              data-aos="fade-right"
              data-aos-duration="1000"
            />
          </aside>

          <div className="flex flex-col divide-y divide-border">
            {details.map(({ heading, paragraph }, key) => (
              <div
                className={`space-y-2 py-6 lg:flex-nowrap lg:py-12 ${key === 0 && "lg:pt-0"}`}
                data-aos="fade-left"
                data-aos-duration="1000"
                key={key}
              >
                <aside className="w-full text-meta uppercase text-text">
                  {heading}
                </aside>
                <div className="font-chillax w-full text-sm text-text-muted lg:w-8/12 lg:text">
                  {paragraph}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContentDetails;
