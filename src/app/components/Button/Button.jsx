import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`hover:text-white rounded-sm bg-bg-primary px-4 py-[0.625rem] text-meta text-text-inverse transition duration-500 hover:bg-text-muted ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
