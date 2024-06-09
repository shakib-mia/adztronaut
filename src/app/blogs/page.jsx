"use client";
import React from "react";
import Layout from "../components/Layout/Layout";
import Blog from "../components/Blog/Blog";
import blog1 from "@/assets/images/blogs/blog-1.jpg";
import blog2 from "@/assets/images/blogs/blog-2.jpg";
import blog3 from "@/assets/images/blogs/blog-3.jpg";
import blog4 from "@/assets/images/blogs/blog-4.jpg";
import blog5 from "@/assets/images/blogs/blog-5.jpg";
import blog6 from "@/assets/images/blogs/blog-6.jpg";
import useAOS from "../hooks/useAos";
import useLenis from "../hooks/useLenis";

const Page = () => {
  useAOS();
  useLenis();

  const blogs = [
    {
      link: "/",
      image: blog1,
      date: "23rd Aug 2023",
      heading: "How to Build a Stunning Website with Framer",
      paragraph:
        "Learn how to create an impressive website using Framer with our step-by-step guide.",
      tag: "Webdesign",
    },
    {
      link: "/",
      image: blog2,
      date: "23rd Aug 2023",
      heading: "10 website elements for maximum user engagement",
      paragraph:
        "10 website elements to engage users, from intuitive navigation to compelling visuals.",
      tag: "Webdesign",
    },
    {
      link: "/",
      image: blog3,
      date: "23rd Aug 2023",
      heading: "The importance of content in driving website traffic",
      paragraph:
        "Learn how to create an impressive website using Framer with our step-by-step guide.",
      tag: "Webdesign",
    },
    {
      link: "/",
      image: blog4,
      date: "23rd Aug 2023",
      heading: "10 common web development mistakes to avoid",
      paragraph:
        "Quality content is king. Learn how to create valuable, SEO-optimized content.",
      tag: "Webdesign",
    },
    {
      link: "/",
      image: blog5,
      date: "23rd Aug 2023",
      heading: "Why responsive web design is critical for your business",
      paragraph:
        "Learn how to create an impressive website using Framer with our step-by-step guide.",
      tag: "Webdesign",
    },
    {
      link: "/",
      image: blog6,
      date: "23rd Aug 2023",
      heading:
        "The art of SEO writing: How to write content that ranks on Google",
      paragraph:
        "Learn how to create an impressive website using Framer with our step-by-step guide.",
      tag: "Webdesign",
    },
  ];

  return (
    <Layout>
      <div className="pb-6 pt-20 md:pb-16 md:pt-32 xl:pb-32 xl:pt-56">
        <div className="mx-auto text-center lg:w-7/12">
          <h1
            className="mb-4 font-satoshi text-h2 md:text-heading-md xl:text-heading-lg"
            data-aos="zoom-in"
          >
            Blog
          </h1>
          <p
            className="font-chillax text text-text-muted md:text-md lg:text-lg xl:text-xl"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor lorem.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, key) => (
            <Blog {...blog} key={key} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Page;
