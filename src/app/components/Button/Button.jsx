import React from "react";

const Button = (props) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={`rounded-sm border-2 border-brand bg-brand px-4 py-[0.625rem] text-meta uppercase text-text-inverse transition duration-500 hover:bg-transparent hover:text-text ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
