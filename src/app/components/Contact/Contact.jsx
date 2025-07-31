"use client";
import { GoArrowUpRight } from "react-icons/go";
import React from "react";
import Marquee from "react-fast-marquee";
import Button from "../Button/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Contact = () => {
  const pathname = usePathname();

  console.log(pathname);
  if (pathname !== "/contact") {
    return (
      <>
        <div className="bg-bg py-4 xl:py-10" id="contact">
          <Marquee autoFill={true}>
            <div className="mr-8 flex gap-8 text-meta lg:text-2xl">
              <aside>{"Let's Talk"}</aside> <aside>{"+++"}</aside>
            </div>
          </Marquee>
        </div>

        <div className="flex flex-col items-center justify-center bg-bg-muted py-10 xl:h-screen">
          <div className="w-full lg:w-1/2 2xl:w-full">
            <h2
              className="font-satoshi mx-auto mb-2 text-center text-h4 font-light md:mb-4 lg:text-heading-md"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              Want to <i className="font-gambetta italic">Know More?</i>
            </h2>

            <p
              className="font-chillax mx-auto w-full text-center text-md text-text-muted lg:w-9/12 lg:text-lg"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              Let’s talk and build something bold, brilliant, and impossible to
              ignore. Hit that button before your competitor does.
            </p>

            <div
              className="flex justify-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <Button className="mt-8 !p-0">
                <Link
                  href={"/contact"}
                  className="flex items-center gap-2 px-4 py-[0.625rem] uppercase"
                >
                  Schedule A Call
                  <GoArrowUpRight />
                </Link>
              </Button>
              {/* <Button>
              <Link
                href={"/contact"}
                className="mb-3 flex items-center justify-center gap-2 bg-bg-primary px-4 py-[0.625rem] sm:hidden"
              >
                get in touch
                <GoArrowUpRight />
              </Link>
            </Button> */}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default Contact;
