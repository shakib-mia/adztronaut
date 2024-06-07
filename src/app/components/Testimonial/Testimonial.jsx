import Image from "next/image";
import React from "react";

const Testimonial = ({
  logo,
  heading,
  paragraph,
  name,
  designation,
  image,
  id,
}) => {
  const time = (id % 2 ? 800 : 400).toString();
  return (
    <div
      className="rounded-sm border border-border bg-bg-muted p-4 backdrop-blur transition duration-1000 hover:bg-bg-muted-2 md:p-6 lg:p-12"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay={time}
    >
      <Image
        src={logo}
        // height={25}
        className="mb-8 h-4 w-auto md:h-[25px]"
        alt={`${name}'s company`}
      />
      <h4 className="font-satoshi text-h6 text-text md:text-h4">{heading}</h4>
      <p className="mb-8 mt-2 font-chillax text-sm text-text-muted md:text">
        {paragraph}
      </p>

      <div className="flex items-center gap-4">
        <Image src={image} className="aspect-square w-[3.75rem]" alt={name} />
        <aside>
          <p className="font-satoshi text-meta text-text">{name}</p>
          <p className="font-chillax text-meta text-text-muted">
            {designation}
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Testimonial;
