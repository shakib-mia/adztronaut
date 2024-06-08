import React from "react";

const InputField = (props) => {
  const { textarea } = props;
  return textarea ? (
    <textarea
      rows={props.rows || 6}
      {...props}
      className="w-full resize-none rounded-sm border border-border bg-bg-muted px-6 py-4 text-text transition duration-500 placeholder:text-meta placeholder:uppercase placeholder:text-text focus:border-text-muted focus:outline-none"
    />
  ) : (
    <input
      type="text"
      {...props}
      className="w-full rounded-sm border border-border bg-bg-muted px-6 py-4 text-text transition duration-500 placeholder:text-meta placeholder:uppercase placeholder:text-text focus:border-text-muted focus:outline-none"
    />
  );
};

export default InputField;
