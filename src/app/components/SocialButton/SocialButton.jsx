import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const SocialButton = (props) => {
  const { icon, text, link, id, total, ...animations } = props;
  // const delay = id * 250;
  return (
    <div {...animations}>
      <a
        href={link}
        className="flex items-center justify-between border border-border bg-bg-muted p-4 transition duration-500 hover:bg-bg-secondary"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
          {icon}

          <p className="text-meta uppercase">{text}</p>
        </div>
        <GoArrowUpRight />
      </a>
    </div>
  );
};

export default SocialButton;
