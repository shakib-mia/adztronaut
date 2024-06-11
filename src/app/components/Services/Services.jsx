import React from "react";
import Service from "../Service/Service";

const Services = () => {
  const services = [
    {
      id: 1,
      heading: "Web design",
      text: "Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.",
      link: "/services#webdesign",
      linkText: "About Webdesign",
    },
    {
      id: 2,
      heading: "Development",
      text: "Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.",
      link: "/services#development",
      linkText: "About Webflow",
    },
    {
      id: 3,
      heading: "Content & Seo",
      text: "Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.",
      link: "/services#seo_and_content",
      linkText: "About SEO",
    },
  ];
  return (
    <section className="container px-0 pb-10 pt-10 xl:pb-40 xl:pt-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((item, key) => (
          <Service key={key} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Services;
