import React from "react";
import partner1 from "./../../../assets/images/partners/logo.svg";
import partner2 from "./../../../assets/images/partners/logo-1.svg";
import partner3 from "./../../../assets/images/partners/logo-2.svg";
import partner4 from "./../../../assets/images/partners/logo-3.svg";
import partner5 from "./../../../assets/images/partners/logo-4.svg";
import partner6 from "./../../../assets/images/partners/logo-5.svg";
import Image from "next/image";

const Clients = () => {
  return (
    <section className="flex items-center justify-evenly gap-5 sm:gap-0 xl:pb-20 xl:pt-32">
      <div className="w-1/6">
        <Image
          data-aos="fade-up"
          data-aos-duration="1000"
          // data-aos-delay="100"
          alt="partner1"
          src={partner1}
          className="mx-auto"
        ></Image>
      </div>
      <div className="w-1/6">
        <Image
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          alt="partner2"
          src={partner2}
          className="mx-auto"
        ></Image>
      </div>
      <div className="w-1/6">
        <Image
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          alt="partner3"
          src={partner3}
          className="mx-auto"
        ></Image>
      </div>
      <div className="w-1/6">
        <Image
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
          alt="partner4"
          src={partner4}
          className="mx-auto"
        ></Image>
      </div>
      <div className="w-1/6">
        <Image
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800"
          alt="partner5"
          src={partner5}
          className="mx-auto"
        ></Image>
      </div>
      <div className="w-1/6">
        <Image
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
          alt="partner6"
          src={partner6}
          className="mx-auto"
        ></Image>
      </div>
    </section>
  );
};

export default Clients;
