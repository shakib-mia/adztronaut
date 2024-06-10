"use client";
import BlogContainer from "@/app/components/BlogContainer/BlogContainer";
import Layout from "@/app/components/Layout/Layout";
import useAOS from "@/app/hooks/useAos";
import useLenis from "@/app/hooks/useLenis";
import { getData } from "@/constants";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  useAOS();
  useLenis();

  const [blogs, setBlogs] = useState([]);
  const pathname = usePathname();

  //   console.log(parseFloat(pathname.split("/")[2]) - 1);

  useEffect(() => {
    getData().then((data) => setBlogs(data));
  }, []);

  //   console.log(blogs);

  return (
    <Layout>
      <BlogContainer blog={blogs[parseFloat(pathname.split("/")[2]) - 1]} />
    </Layout>
  );
};

export default Page;
