import React from "react";
import partner1 from "./../../../assets/images/partners/logo.svg";
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
      heading: "Amazing Results with Arik’s Premium Web Design Services.",
      paragraph:
        "Arik is a top-notch web designer who created a stunning website for my business. He was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend his services.",
      name: "John Smith",
      designation: "ABC Company",
      image: client1,
    },
    {
      logo: partner2,
      heading:
        "Expert Webflow and SEO Services: Excellent Work, Great Results.",
      paragraph:
        "Working with Arik on my website redesign was a fantastic experience. He was able to take my vision and turn it into a beautiful and functional website. His attention to detail and creative approach is unmatched. I couldn't be happier with the end result.",
      name: "David Kim",
      designation: "Design Inc.",
      image: client2,
    },
    {
      logo: partner3,
      heading: "Professional, Collaborative Web Design Experience with Arik.",
      paragraph:
        "I had the pleasure of working with Arik on a website development project and was blown away by his expertise and professionalism. He made the process seamless and delivered a website that exceeded our expectations. I highly recommend Arik for all your web development needs.",
      name: "Karen Lee",
      designation: "Redwood Technologies",
      image: client3,
    },
    {
      logo: partner4,
      heading: "Expertise in Web Design: Second to None with Arik.",
      paragraph:
        "Arik is not only an exceptional web designer, but also a pleasure to work with. He took the time to understand my business and its unique needs, and created a website that perfectly represents my brand. I highly recommend Arik's services to anyone looking for a top-quality web designer.",
      name: "John Smith",
      designation: "ABC Company",
      image: client4,
    },
    {
      logo: partner5,
      heading: "Web Design and Content Solutions: Stand Out from the Crowd.",
      paragraph:
        "Arik's SEO services have helped my business improve its online presence and increase traffic to our website. He is knowledgeable, professional, and provides excellent results. I highly recommend him for all your SEO needs.",
      name: "Emily Davis",
      designation: "Greenway Industries",
      image: client5,
    },
    {
      logo: partner6,
      heading:
        "High-Quality Web Design: Exceptional Attention to Detail with Arik.",
      paragraph:
        "Arik's development services are top-notch. He is able to take complex ideas and turn them into functional, user-friendly websites. His attention to detail and commitment to customer satisfaction are unmatched. I highly recommend Arik for all your web development needs.",
      name: "Ryan Chen",
      designation: "Golden Gate Solutions",
      image: client6,
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
