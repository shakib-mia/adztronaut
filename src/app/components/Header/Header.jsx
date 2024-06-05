import React from "react";
import hero from "@/assets/images/hero-image.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className="pb-8">
      <div className="mx-auto">
        <Image
          className="mx-auto object-cover"
          src={hero}
          alt="hero image"
          data-aos="fade-up"
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
          data-aos-delay="800"
        >
          Premium web design, development, and SEO services to help your
          business stand out.
        </p>
      </div>
    </header>
  );
};

export default Header;
