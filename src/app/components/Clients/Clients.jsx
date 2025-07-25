"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import partner1 from "@/assets/images/partners/damro.png";
import partner2 from "@/assets/images/partners/the-chocolate-company.png";
import partner3 from "@/assets/images/partners/jb.png";
import partner4 from "@/assets/images/partners/growcial-bull.png";
import partner5 from "@/assets/images/partners/forevision-digital.png";
import partner6 from "@/assets/images/partners/the-aroggo.png";
import partner7 from "@/assets/images/partners/shree-gourango-bostraloy.png";

const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
];

const Clients = () => {
  return (
    <section className="container py-10 xl:pb-20 xl:pt-32">
      <Swiper
        modules={[Autoplay]}
        // spaceBetween={30}
        slidesPerView={3}
        loop={true}
        // loopFillGroupWithBlank={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
        }}
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <Image
              src={partner}
              alt={`Partner}`}
              className="mx-auto h-24 object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Clients;
