import React from "react";

const ClientDetails = ({ heading, text, id }) => {
  return (
    <div
      className="border border-border bg-bg-muted p-4 text-center backdrop-blur"
      data-aos="fade-right"
      data-aos-delay={id * 250}
    >
      <p className="mb-1 text-meta uppercase text-text opacity-60">{heading}</p>
      <p className="text-meta uppercase text-text">{text}</p>
    </div>
  );
};

export default ClientDetails;
