import React from "react";
import { PiArrowDown } from "react-icons/pi";
import laptop from "@/assets/images/services.png";
import Image from "next/image";
import CountUp from "react-countup";
import image1 from "@/assets/images/services/ideas-into-reality.jpg";
import image2 from "@/assets/images/services/developing-high-performing-app.jpg";
import image3 from "@/assets/images/services/ideas-into-reality.jpg";
import ServiceContentDetails from "../ServiceContentDetails/ServiceContentDetails";

const ServicesContents = () => {
  const services = [
    {
      image: image1,
      header: "Transforming Your Ideas into Reality",
      tag: "Webdesign",
      id: "Webdesign",
      details: [
        {
          heading: "Concept",
          paragraph:
            "I take time to understand your business needs and audience to develop a unique concept for your website. I'll create wireframes that serve as the foundation for your site's design and functionality.",
        },

        {
          heading: "UX / Ui Design",
          paragraph:
            "I'll design a user-friendly interface that is visually appealing and engages your target audience. Your website will be created to meet your brand's needs and goals while ensuring a seamless user experience.",
        },

        {
          heading: "Prototype",
          paragraph:
            "With an interactive prototype, you'll have the ability to test your website's functionality before it goes live. This will ensure that your website's design and user experience are optimized for your audience's needs and preferences.",
        },
      ],
    },
    {
      image: image2,
      header: "Developing High-Performance Websites and Web Applications",
      tag: "development",
      id: "development",
      details: [
        {
          heading: "Framer",
          paragraph:
            "I specialize in developing web applications using Framer. From custom animations to complex interactions, I bring your web app to life.",
        },

        {
          heading: "CMS Integration",
          paragraph:
            "I can help you streamline your content management process by integrating a CMS into your website. Say goodbye to manual updates and hello to efficiency.",
        },

        {
          heading: "WEb Design System",
          paragraph:
            "I use a modular design approach to create a web design system that ensures consistency throughout your website. This results in a professional and cohesive online presence.",
        },
      ],
    },
    {
      image: image3,
      header: "Boosting Your Website's Organic Search Traffic",
      tag: "SEO & content",
      id: "seo_and_content",
      details: [
        {
          heading: "Research",
          paragraph:
            "I conduct thorough research to identify the best keywords and strategies to improve your website's search engine ranking.",
        },

        {
          heading: "SEo Ranking",
          paragraph:
            "My SEO services are designed to improve your website's visibility on search engines, increasing your organic traffic and driving more leads and sales.",
        },

        {
          heading: "SEO Support",
          paragraph:
            "With ongoing SEO support, I ensure that your website stays up-to-date with the latest SEO best practices, keeping you ahead of the competition.",
        },
      ],
    },
  ];

  return (
    <div className="pb-6 pt-20 md:pb-16 md:pt-32 xl:pb-32 xl:pt-56">
      <h1
        className="mx-auto text-center font-satoshi text-h2 md:text-heading-md xl:w-7/12 xl:text-heading-lg"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Web Design <div className="font-gambetta italic">& Framer</div>
      </h1>

      <p
        className="mx-auto mb-5 text-center font-chillax text-lg text-text-muted md:mb-11 xl:mb-16 xl:w-1/2 xl:text-xl"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        Premium web design, development, and SEO services to help your business
        stand out.
      </p>

      <div className="flex w-full justify-center">
        <button
          className="flex items-center gap-4"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="1500"
          id="about"
          onClick={() =>
            smoothScrollTo(
              getElementTopPosition(document.getElementById("about")) + 20,
              500,
            )
          }
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-muted">
            <PiArrowDown className="text-md" />
          </div>
          ABOUT ME
        </button>
      </div>
      <Image
        src={laptop}
        alt="laptop"
        className="mt-16"
        data-aos="fade-in"
        data-aos-delay="2000"
        data-aos-duration="1000"
      />

      <div className="mt-20 grid grid-cols-2 gap-16 font-satoshi md:grid-cols-4">
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <p className="text-xs uppercase text-text-muted lg:text-meta">
            Clients
          </p>
          <h1 className="mt-1 text-3xl text-text lg:text-h1">
            <CountUp
              start={0}
              enableScrollSpy
              delay={3}
              duration={2}
              end={150}
            />
            +
          </h1>
        </div>

        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <p className="text-xs uppercase text-text-muted lg:text-meta">
            Projects
          </p>
          <h1 className="mt-1 text-3xl text-text lg:text-h1">
            <CountUp
              start={0}
              enableScrollSpy
              delay={3}
              duration={2}
              end={300}
            />
            +
          </h1>
        </div>

        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <p className="text-xs uppercase text-text-muted lg:text-meta">
            Happy Clients
          </p>
          <h1 className="mt-1 text-3xl text-text lg:text-h1">
            <CountUp
              start={0}
              enableScrollSpy
              delay={4}
              duration={2}
              end={100}
            />
            %
          </h1>
        </div>

        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <p className="text-xs uppercase text-text-muted lg:text-meta">
            Followers
          </p>
          <h1 className="mt-1 text-3xl text-text lg:text-h1">
            <CountUp
              start={0}
              enableScrollSpy
              delay={4}
              duration={2}
              end={150}
            />
            K
          </h1>
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-4 lg:mt-40 lg:gap-8">
        {services.map((item, key) => (
          <ServiceContentDetails key={key} {...item} />
        ))}
      </div>

      {/* <div className="mt-20 flex flex-col gap-8 text-text lg:mt-40">
        <div className="border border-border bg-bg p-8 lg:p-16">
          <p
            className="font-satoshi text-meta-sm uppercase lg:text-meta"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Webdesign
          </p>
          <h1
            className="mb-6 mt-4 font-satoshi text-3xl lg:mb-12 lg:text-h1"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            Transforming Your Ideas into Reality
          </h1>

          <Image
            src={image1}
            alt="Transforming-ideas-into-reality"
            className="mb-4 md:mb-8 lg:mb-12"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="500"
          />

          <div className="flex flex-col divide-y divide-border">
            <div
              className="flex flex-wrap py-6 lg:py-12"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <aside className="w-full text-meta uppercase text-text lg:w-2/12">
                Concept
              </aside>
              <div className="w-full font-chillax text-sm text-text-muted lg:w-10/12 lg:text">
                I take time to understand your business needs and audience to
                develop a unique concept for your website. {"I'll"} create
                wireframes that serve as the foundation for your {"site's"}{" "}
                design and functionality.
              </div>
            </div>
            <div
              className="flex flex-wrap py-6 lg:py-12"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <aside className="w-full text-meta uppercase text-text lg:w-2/12">
                UX / Ui Design
              </aside>
              <div className="w-full font-chillax text-sm text-text-muted lg:w-10/12 lg:text">
                {"I'll"} design a user-friendly interface that is visually
                appealing and engages your target audience. Your website will be
                created to meet your {"brand's"} needs and goals while ensuring
                a seamless user experience.
              </div>
            </div>
            <div
              className="flex flex-wrap py-6 lg:py-12"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <aside className="w-full text-meta uppercase text-text lg:w-2/12">
                Prototype
              </aside>
              <div className="w-full font-chillax text-sm text-text-muted lg:w-10/12 lg:text">
                With an interactive prototype, {"you'll"} have the ability to
                test your {"website's"} functionality before it goes live. This
                will ensure that your {"website's"} design and user experience
                are optimized for your {"audience's"} needs and preferences.
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ServicesContents;
