import React from "react";
import Button from "../Button/Button";

const Package = ({ heading, price, text, offers, tag, id }) => {
  return (
    <div
      className="relative flex flex-col justify-between rounded-sm border border-border bg-bg-muted p-4 font-satoshi lg:p-12"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={`${id * 250}`}
    >
      {tag && (
        <p className="absolute right-4 top-4 bg-bg-primary p-1 text-center text-meta-sm uppercase text-text-inverse md:p-2">
          POPULAR
        </p>
      )}
      <p className="text-meta-sm uppercase md:text-meta">{heading}</p>
      <h3 className="my-2 text-h3">{price}</h3>
      <p className="font-chillax text-sm text-text-muted">{text}</p>

      <ul className="mb-4 divide-y divide-border text-meta-sm md:mb-6 md:text-meta lg:mb-8">
        {offers.map((item, key) => (
          <li key={key} className="py-2 md:py-4">
            {item}
          </li>
        ))}
      </ul>

      <Button className="w-full">Get Started</Button>
    </div>
  );
};

export default Package;
