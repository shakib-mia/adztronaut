"use client";
import React from "react";
import bg from "@/assets/images/hero-section/1.jpg";
import bg2 from "@/assets/images/hero-section/1.png";
import bg3 from "@/assets/images/hero-section/2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Parallax } from "swiper/modules";
import Image from "next/image";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="container mt-10 h-[70vh] max-h-screen pt-20 lg:h-[80vh]">
      <Swiper
        modules={[Pagination, Autoplay, Parallax]}
        parallax={true}
        autoplay={{ delay: 6000 }}
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
          <div className="relative h-full overflow-hidden">
            <div className="relative h-full" data-swiper-parallax="-400">
              <div
                className="absolute left-0 top-0 h-full w-full"
                style={{
                  background:
                    "radial-gradient(transparent 0, transparent 30%, black 70%)",
                  // transform: "flipX(180)",
                }}
              ></div>
              <Image
                src={bg2}
                alt="slide background"
                fill
                priority
                // style={{ backgroundImage: `url(${bg2.src})` }} // slide 1 bg
                className="absolute left-0 top-0 -z-20 h-full w-full -scale-x-100 bg-cover bg-center object-cover brightness-75 filter transition-transform duration-1000 ease-out"
              />
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

              {/* <>Call</> */}

              {/* <div data-swiper-parallax="300">
                <Button>{`Let's Talk`}</Button>
              </div> */}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-full overflow-hidden bg-cover">
            <div className="relative h-full" data-swiper-parallax="-400">
              <div
                className="absolute left-0 top-0 h-full w-full"
                // style={{
                //   background: "radial-gradient(transparent 0, black 69%)",
                // }}
              ></div>
              <Image
                src={bg}
                alt="slide background"
                fill
                priority
                // style={{ backgroundImage: `url(${bg2.src})` }} // slide 1 bg
                className="absolute left-0 top-0 -z-20 h-full w-full -scale-x-100 bg-cover bg-center object-cover brightness-75 filter transition-transform duration-1000 ease-out"
              />
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
              <Image
                src={bg3}
                alt="slide background"
                fill
                priority
                // style={{ backgroundImage: `url(${bg2.src})` }} // slide 1 bg
                className="absolute left-0 top-0 -z-20 h-full w-full -scale-x-100 bg-cover bg-center object-cover brightness-75 filter transition-transform duration-1000 ease-out"
              />
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

              <a
                href="callto:+8801832492467"
                className="mt-4"
                data-swiper-parallax="300"
              >
                <Button>{`Let's Talk`}</Button>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Header;
