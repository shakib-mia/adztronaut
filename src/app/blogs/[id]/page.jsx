"use client";
import BlogContainer from "@/app/components/BlogContainer/BlogContainer";
import RelatedBlogs from "@/app/components/RelatedBlogs/RelatedBlogs";
import useAOS from "@/app/hooks/useAos";
import useLenis from "@/app/hooks/useLenis";
import React from "react";

const Page = async () => {
  useAOS();
  useLenis();

  const blogs = await fetch("https://arik-zeta.vercel.app/blogs.json");

  return (
    <>
      <BlogContainer blog={blogs[0]} />
      <RelatedBlogs blogs={blogs} />
    </>
  );
};

export default Page;
