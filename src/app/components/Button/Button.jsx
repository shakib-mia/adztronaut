import React from "react";

const Button = (props) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={`rounded-sm bg-bg-primary px-4 py-[0.625rem] text-meta uppercase text-text-inverse transition duration-500 hover:bg-text-muted hover:text-white ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
