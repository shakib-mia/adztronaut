import React from "react";

const ClientDetails = ({ heading, text, id }) => {
  // Ensure the website link has https://
  const getWebsiteUrl = (url) => {
    if (!/^https?:\/\//i.test(url)) {
      return `https://${url}`;
    }
    return url;
  };

  return (
    <div
      className="border border-border bg-bg-muted p-4 text-center backdrop-blur"
      data-aos="fade-right"
      data-aos-delay={id * 250}
    >
      <p className="mb-1 text-meta uppercase text-text opacity-60">{heading}</p>
      {/* <p className="text-meta uppercase text-text">{text}</p> */}
      {heading === "website" ? (
        <a
          href={getWebsiteUrl(text)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-meta hover:underline"
        >
          {text}
        </a>
      ) : (
        <p className="text-meta">{text}</p>
      )}
    </div>
  );
};

export default ClientDetails;
