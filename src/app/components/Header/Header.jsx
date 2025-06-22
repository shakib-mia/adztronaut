"use client";
import React from "react";
import bg from "@/assets/images/hero-section/1.jpg";
import bg2 from "@/assets/images/hero-section/hero-2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Parallax } from "swiper/modules";

const Header = () => {
  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     const pagination = document.querySelector(".swiper-pagination");
  //     if (pagination) pagination.classList.add("swiper-loaded");
  //   }, 100); // Delay ensures no initial full width

  //   return () => clearTimeout(interval);
  // }, []);

  return (
    <header
      className="h-[90vh]"
      // style={{
      //   paddingTop:
      //     document.querySelector("nav").clientHeight +
      //     parseFloat(
      //       getComputedStyle(document.querySelector("nav")).marginTop,
      //     ) +
      //     "px",
      // }}
    >
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

      {/* <Swiper
        modules={[Pagination, Autoplay, Parallax]}
        spaceBetween={30}
        parallax
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        speed={1000}
        className="h-[500px] w-full"
      >
        <SwiperSlide>
       <img src="/images/slide1.jpg" alt="Slide 1" /> 
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
          <img src="/images/slide1.jpg" alt="Slide 1" /> 
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
        <img src="/images/slide1.jpg" alt="Slide 1" /> 
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
      </Swiper> */}

      <Swiper
        modules={[Pagination, Autoplay, Parallax]}
        parallax={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: false }}
        speed={1000}
        className="h-full"
        onSwiper={() => {
          // Delay class add to avoid initial full width on first bullet
          requestAnimationFrame(() => {
            document
              .querySelector(".swiper-pagination")
              ?.classList.add("swiper-ready");
          });
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-full overflow-hidden bg-cover">
            <div className="relative h-full" data-swiper-parallax="-400">
              <div
                className="absolute left-0 top-0 h-full w-full"
                style={{
                  background: "radial-gradient(transparent 0, black 69%)",
                }}
              ></div>
              <div
                style={{ backgroundImage: `url(${bg2.src})` }} // slide 1 bg
                className="absolute left-0 top-0 -z-20 h-full w-full -scale-x-100 bg-cover bg-center brightness-75 filter transition-transform duration-1000 ease-out"
              ></div>
            </div>
            <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col justify-center lg:p-10">
              <h1
                data-swiper-parallax="100"
                className="text-4xl leading-tight lg:text-7xl"
              >
                Content that connects. <br /> Creatives that convert.
              </h1>

              <h4
                className="mt-4 text-h5 italic lg:w-5/6 lg:text-h4"
                data-swiper-parallax="-500"
              >
                We’re an advertising agency built for today—part story studio,
                part performance lab. All signal. No noise.
              </h4>

              {/* <div data-swiper-parallax="300">
                <Button>{`Let's Talk`}</Button>
              </div> */}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}

        <SwiperSlide>
          <div className="relative h-full overflow-hidden">
            <div className="relative h-full" data-swiper-parallax="-400">
              <div
                className="absolute left-0 top-0 h-full w-full"
                style={{
                  background: "radial-gradient(transparent 0, black 100%)",
                  // transform: "flipX(180)",
                }}
              ></div>
              <div
                style={{ backgroundImage: `url(${bg.src})` }} // slide 1 bg
                className="absolute left-0 top-0 -z-20 h-full w-full bg-cover bg-center brightness-75 filter transition-transform duration-1000 ease-out"
              ></div>
            </div>
            <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col justify-center lg:p-10">
              <h1
                data-swiper-parallax="100"
                className="text-4xl leading-tight lg:w-5/6 lg:text-7xl"
              >
                We don’t make ads. <br /> We build attention.
              </h1>

              <h4
                className="mt-4 text-h5 italic lg:w-5/6 lg:text-h4"
                data-swiper-parallax="-500"
              >
                Adztronaut is a modern advertising agency crafting organic +
                performance content that gets people to click, care, and
                convert.
              </h4>

              {/* <div data-swiper-parallax="300">
                <Button>{`Let's Talk`}</Button>
              </div> */}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-full overflow-hidden">
            <div className="relative h-full" data-swiper-parallax="-400">
              <div
                className="absolute left-0 top-0 h-full w-full"
                style={{
                  background: "radial-gradient(transparent 0, black 69%)",
                }}
              ></div>
              <div
                style={{ backgroundImage: `url(${bg.src})` }} // slide 1 bg
                className="absolute left-0 top-0 -z-20 h-full w-full bg-cover bg-center brightness-75 filter transition-transform duration-1000 ease-out"
              ></div>
            </div>
            <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col justify-center lg:p-10">
              <h1
                data-swiper-parallax="100"
                className="text-4xl leading-tight lg:w-full lg:text-7xl"
              >
                Launch Your Next Chapter <br /> Schedule a Quick Call
              </h1>

              <h4
                className="mt-4 text-h5 italic lg:w-5/6 lg:text-h4"
                data-swiper-parallax="-500"
              >
                We’re not just another agency. We blend story, SEO, and strategy
                into content that scales organically and performs on demand.
              </h4>

              {/* <div data-swiper-parallax="300">
                <Button>{`Let's Talk`}</Button>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Header;
