import React from "react";

const WorkDetailsItem = ({ heading, text, id }) => {
  return (
    <div
      className="border border-border bg-bg-muted p-4 backdrop-blur md:p-8 xl:p-12"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay={`${id * 250}`}
    >
      <h4 className="mb-2 text-h4 md:mb-4">{heading}</h4>
      <p className="font-chillax text-sm text-text-muted md:text">{text}</p>
    </div>
  );
};

export default WorkDetailsItem;
