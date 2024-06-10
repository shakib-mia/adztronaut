import Image from "next/image";
import React from "react";
import { PiArrowDown } from "react-icons/pi";
import { VscLoading } from "react-icons/vsc";
import SocialButton from "../SocialButton/SocialButton";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { smoothScrollTo } from "@/utils/smoothScroll";
import { getElementTopPosition } from "@/utils/getElementTopPosition";

const BlogContainer = ({ blog }) => {
  // window.addEventListener("scroll", (e) => {
  //   console.log(window.pageYOffset);
  // });
  // console.log();
  return blog ? (
    <div className="pb-8 pt-20 lg:pb-32 lg:pt-56">
      <h1
        className="text-center font-satoshi text-h3 lg:text-heading-sm"
        data-aos="fade-right"
      >
        {blog.heading}
      </h1>

      <p
        className="mx-auto mt-2 w-full text-clip text-center font-chillax text text-text-muted lg:w-1/2 lg:text-lg"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        {blog.paragraph}
      </p>

      <button
        className="mb-8 mt-6 flex w-full items-center justify-center gap-4 text-meta uppercase lg:mb-16 lg:mt-12"
        onClick={() =>
          smoothScrollTo(
            getElementTopPosition(document.getElementById("blogImage")),
            500,
          )
        }
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-muted">
          <PiArrowDown className="text-icon" />
        </div>
        Read more
      </button>

      <div className="grid grid-cols-1 gap-4 uppercase md:grid-cols-2 lg:grid-cols-3">
        <div className="flex justify-between border border-border bg-bg-muted p-4 text-meta text-text md:p-5 lg:p-8">
          <aside className="text-text-muted">date</aside>
          <aside className="text-text">{blog.date}</aside>
        </div>
        <div className="flex justify-between border border-border bg-bg-muted p-4 text-meta text-text md:p-5 lg:p-8">
          <aside className="text-text-muted">category</aside>
          <aside className="text-text">{blog.tag}</aside>
        </div>
        <div className="flex justify-between border border-border bg-bg-muted p-4 text-meta text-text md:p-5 lg:p-8">
          <aside className="text-text-muted">reading time</aside>
          <aside className="text-text">{blog.readingTime}</aside>
        </div>
      </div>

      <Image
        src={blog.image}
        alt={blog.heading}
        width={1400}
        height={900}
        // responsive
        className="mt-4"
        loading="lazy"
        id="blogImage"
      />

      <div className="mx-auto w-full lg:w-5/6" data-aos="fade-in">
        <div className="mt-5 lg:mt-20">
          <h2 className="mb-4 font-satoshi text-h3 lg:text-h2">
            {blog.introduction.heading}
          </h2>
          <p className="font-chillax text-sm text-text-muted lg:text">
            {blog.introduction.paragraph}
          </p>
        </div>

        {blog.sections.map(({ heading, paragraph }, key) => (
          <div className="mt-12" key={key}>
            <h3 className="font-satoshi text-h4 text-text lg:text-h3">
              {heading}
            </h3>
            <p className="mt-4 font-chillax text-sm text-text-muted lg:text">
              {paragraph}
            </p>
          </div>
        ))}

        <div className="mt-12 border border-border bg-bg-muted p-6 md:p-8 lg:p-12">
          <h3 className="mb-2 font-satoshi text-h4 lg:text-h3">Conclusion</h3>
          <p className="mb-8 w-5/6 font-chillax text-sm text-text-muted lg:text">
            {blog.conclusion}
          </p>

          <div className="flex items-center gap-4">
            <Image
              src={blog.author.image}
              width={60}
              height={60}
              className="rounded-full"
              alt="author"
            />

            <aside>
              <h5 className="font-satoshi text-h5 text-text">
                {blog.author.name}
              </h5>
              <p className="mt-1 text-meta uppercase text-text-muted">
                {blog.author.designation}
              </p>
            </aside>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {/* <div></div> */}
          {/* {blog.socials.map((item, key) => <SocialButton key={key}  />)} */}
          <SocialButton
            icon={<FaFacebook />}
            text={blog.socials[0].name}
            link={blog.socials[0].link}
            id={0}
          />

          <SocialButton
            icon={<FaTwitter />}
            text={blog.socials[1].name}
            link={blog.socials[1].link}
            id={1}
          />

          <SocialButton
            icon={<FaInstagram />}
            text={blog.socials[2].name}
            link={blog.socials[2].link}
            id={2}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center">
      <div className="flex h-screen items-center justify-center text-center">
        <VscLoading className="animate-spin text-heading-sm" />
      </div>
    </div>
  );
};

export default BlogContainer;
