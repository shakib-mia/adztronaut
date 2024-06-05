import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`text-text-inverse rounded-sm bg-bg-primary px-4 py-[0.625rem] text-meta ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
