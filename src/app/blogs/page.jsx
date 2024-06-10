"use client";
import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { getData, url } from "@/constants";

const Page = () => {
  useAOS();
  useLenis();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getData().then((data) => setBlogs(data));
  }, []);

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
