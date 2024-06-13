import React from "react";
import hero from "@/assets/images/hero-image.png";
import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="pb-8">
      <div className="mx-auto">
        <Image
          className="mx-auto object-cover"
          src={hero}
          alt="hero image"
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="900"
        />
        <h1
          className="mx-auto w-full text-center font-satoshi text-h2 font-light xl:w-5/6 xl:text-heading-xl"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Web Designer
        </h1>
        <h1
          className="mx-auto w-full text-center font-gambetta text-h2 font-light italic xl:w-5/6 xl:text-heading-xl"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          & Developer
        </h1>

        <p
          className="mx-auto mt-4 w-full text-center font-chillax text-base text-text-muted sm:text-xl xl:w-1/2"
          data-aos="fade-up"
          // data-aos-duration="900"
          data-aos-delay="500"
        >
          Premium web design, development, and SEO services to help your
          business stand out.
        </p>

        <div
          className="mt-6 flex justify-center"
          data-aos="fade-up"
          // data-aos-duration="900"
          data-aos-delay="700"
        >
          <Button className="!p-0 sm:hidden">
            <Link
              href={"/contact"}
              className="flex items-center gap-2 px-4 py-[0.625rem] uppercase"
            >
              {"Let's"} Talk
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
