import BlogContainer from "@/app/components/BlogContainer/BlogContainer";
import RelatedBlogs from "@/app/components/RelatedBlogs/RelatedBlogs";
import axios from "axios";
// import AOSLenisWrapper from "@/app/components/AOSLenisWrapper";

export const dynamicParams = true; // Static site হলে লাগবে না, fallback route-এর জন্য helpful

const Page = async ({ params }) => {
  const { id } = params;

  // fetch all blogs
  const response = await axios.get("https://arik-zeta.vercel.app/blogs.json");
  const blogs = response.data;

  // match blog by id
  const blog = blogs[id - 1]; // `id` string হয়ে আসে route param থেকে

  // যদি না পাওয়া যায়, তুমি 404 দেখাতে পারো বা redirect করতে পারো
  if (!blog) {
    return <div className="text-red-600 py-16 text-center">Blog not found</div>;
  }

  // filter out current blog from related
  const relatedBlogs = blogs.filter((b) => String(b.id) !== id);

  return (
    <>
      {/* <AOSLenisWrapper /> */}
      <BlogContainer blog={blog} />
      <RelatedBlogs blogs={relatedBlogs} />
    </>
  );
};

export default Page;
