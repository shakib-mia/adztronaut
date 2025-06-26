import React from "react";
import partner1 from "./../../../assets/images/partners/the-chocolate-company.png";
import partner2 from "./../../../assets/images/partners/logo-1.svg";
import partner3 from "./../../../assets/images/partners/logo-2.svg";
import partner4 from "./../../../assets/images/partners/logo-3.svg";
import partner5 from "./../../../assets/images/partners/logo-4.svg";
import partner6 from "./../../../assets/images/partners/logo-5.svg";
import client1 from "./../../../assets/images/testimonials/Image Wrapper.png";
import client2 from "./../../../assets/images/testimonials/Image Wrapper-1.png";
import client3 from "./../../../assets/images/testimonials/Image Wrapper-2.png";
import client4 from "./../../../assets/images/testimonials/Image Wrapper-3.png";
import client5 from "./../../../assets/images/testimonials/Image Wrapper-4.png";
import client6 from "./../../../assets/images/testimonials/Image Wrapper-5.png";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
  const testis = [
    {
      logo: partner1,
      paragraph:
        "Adztronaut changed the game for us. From strategy to scale—they nailed it all.",
      name: "Shreya N.",
      designation: "Founder, FounderThe Chocolate Company",
      image: client1,
    },
    {
      logo: partner2,
      paragraph:
        "The most responsive, creative, and ROI-driven team we’ve ever worked with.",
      name: "Anuj K.",
      designation: "Head of Marketing, UrbanStacks",
      image: client2,
    },
    {
      logo: partner3,
      paragraph:
        "They just get it. Fast, flexible, and fantastic at what they do.",
      name: "Riya D.",
      designation: "Co-founder, BareSkin Beauty",
      image: client3,
    },

    {
      logo: partner3,
      paragraph:
        "We gave them a vision. They gave us viral reels, ad revenue, and a whole new brand voice we didn't know we needed",
      name: "Tania S.",
      designation: "Co-founder, F&B Brand",
      image: client3,
    },
    {
      logo: partner3,
      paragraph:
        "SEO, socials, ads, brand—you name it, Adztronaut did it. They’re not an agency. They’re an extension of our team.",
      name: "Anirban R.",
      designation: "Director, D2C Clothing Brand",
      image: client3,
    },
    {
      logo: partner3,
      paragraph:
        "I went from 0 to 1 lakh+ monthly reach within 45 days. No fluff. Just results.",
      name: "Nisha M.",
      designation: "Resort Owner, North Bengal",
      image: client3,
    },
  ];

  return (
    <section className="container my-16">
      <h2
        className="font-satoshi mx-auto mb-2 text-center text-h4 font-light md:mb-4 lg:w-1/2 lg:text-heading-md"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        What my <span className="font-gambetta italic">clients say</span>
      </h2>
      <p
        className="font-chillax mx-auto text-center text-sm text-text-muted md:text-md lg:w-1/2"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        See what my clients have to say about working with me and the results I
        helped them achieve.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16">
        <div className="flex flex-col gap-8">
          {testis.map(
            (item, key) =>
              (key + 1) % 2 !== 0 && (
                <Testimonial {...item} key={key} id={key} />
              ),
          )}
        </div>

        <div className="flex flex-col gap-8">
          {testis.map(
            (item, key) =>
              (key + 1) % 2 === 0 && (
                <Testimonial {...item} key={key} id={key} />
              ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
