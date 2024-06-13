"use client";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Blog from "../components/Blog/Blog";
import useAOS from "../hooks/useAos";
import useLenis from "../hooks/useLenis";
import { getData } from "@/constants";

const Page = () => {
  useAOS();
  useLenis();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getData("blogs").then((data) => setBlogs(data));
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
