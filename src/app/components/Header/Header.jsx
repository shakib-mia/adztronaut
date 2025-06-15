import React from "react";
import hero from "@/assets/images/hero-image.png";
import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";
import bg from "@/assets/images/hero-section/1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Header = () => {
  return (
    <header className="flex h-screen items-center pb-8">
      {/* <div className="mx-auto">
        <Image
          className="mx-auto w-full"
          src={hero}
          placeholder="blur"
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
      </div> */}

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        speed={1000}
        className="h-[500px] w-full"
      >
        <SwiperSlide>
          {/* <img src="/images/slide1.jpg" alt="Slide 1" /> */}
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${bg.src})`,
            }}
          >
            <h1 className="text-heading-md leading-tight lg:w-8/12">
              Built for impact - insight-driven, identity-focused
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="/images/slide2.jpg" alt="Slide 2" /> */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure
          adipisci ea iusto quos architecto mollitia officiis tenetur rem? Quo
          veniam ipsum alias nihil. Blanditiis consequuntur perspiciatis aliquid
          saepe accusamus?
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="/images/slide3.jpg" alt="Slide 3" /> */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure
          adipisci ea iusto quos architecto mollitia officiis tenetur rem? Quo
          veniam ipsum alias nihil. Blanditiis consequuntur perspiciatis aliquid
          saepe accusamus?
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Header;
