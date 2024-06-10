import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const SocialButton = ({ icon, text, link, id }) => {
  const delay = id * 250;
  return (
    <a
      href={link}
      className="flex items-center justify-between border border-border bg-bg-muted p-4 transition duration-500 hover:bg-bg-secondary"
      target="_blank"
      rel="noreferrer"
      data-aos="fade-left"
      data-aos-delay={delay}
    >
      <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
        {icon}

        <p className="text-meta uppercase">{text}</p>
      </div>
      <GoArrowUpRight />
    </a>
  );
};

export default SocialButton;
