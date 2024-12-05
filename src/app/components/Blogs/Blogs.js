import React from "react";
import Blog from "../Blog/Blog";
import { VscLoading } from "react-icons/vsc";

const Blogs = async () => {
  const response = await fetch("https://arik-zeta.vercel.app/blogs.json");
  const blogs = await response.json();

  return (
    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {blogs ? (
        blogs.map((blog, key) => <Blog {...blog} key={key} />)
      ) : (
        <VscLoading className="animate-spin" />
      )}
    </div>
  );
};

export default Blogs;
