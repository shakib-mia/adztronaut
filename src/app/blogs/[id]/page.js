import BlogContainer from "@/app/components/BlogContainer/BlogContainer";
import RelatedBlogs from "@/app/components/RelatedBlogs/RelatedBlogs";
import axios from "axios";
import Head from "next/head";
// import AOSLenisWrapper from "@/app/components/AOSLenisWrapper";

export const dynamicParams = true; // Static site হলে লাগবে না, fallback route-এর জন্য helpful

export async function generateMetadata({ params }) {
  const res = await fetch("https://adztronaut.com/blogs.json", {
    // cache: "no-cache", // বা "force-cache", তোমার দরকার মতো
  });

  const blogs = await res.json();
  const blog = await blogs[params.id - 1];
  console.log({ blog, blogs });
  if (!blog) {
    return { title: "Blog not found" };
  }
  return {
    title: blog.heading,
    description: blog.paragraph || "Blog details",
  };
}

const Page = async ({ params }) => {
  const { id } = params;

  // fetch all blogs
  const response = await fetch("https://adztronaut.com/blogs.json");
  const blogs = await response.json();

  // match blog by id
  const blog = blogs[id - 1];

  // যদি না পাওয়া যায়, তুমি 404 দেখাতে পারো বা redirect করতে পারো
  if (!blog.heading) {
    return <div className="text-red-600 py-16 text-center">Blog not found</div>;
  }

  // filter out current blog from related
  const relatedBlogs = blogs.filter((b) => String(b.id) !== id);

  return (
    <div className="container">
      {/* <AOSLenisWrapper /> */}
      <BlogContainer blog={blog} />
      <RelatedBlogs blogs={relatedBlogs} />
    </div>
  );
};

export default Page;
