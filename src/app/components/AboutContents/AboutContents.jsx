import React from "react";
import SocialButton from "../SocialButton/SocialButton";
import Image from "next/image";
import { iconMapper } from "@/utils/iconMapper";

const AboutContents = (props) => {
  const { about, socials, awards, id } = props;

  return (
    <aside>
      <div
        className="overflow-visible border border-border bg-bg-muted p-4 text-text lg:p-12"
        data-aos="fade-in"
        data-aos-delay="2000"
        data-aos-duration="1000"
      >
        <h2
          className="font-satoshi mb-4 text-h5 text-text lg:text-h2"
          data-aos={id !== 0 ? "fade-left" : "fade-right"}
          data-aos-duration="1000"
        >
          {about?.name}
        </h2>

        <p
          className="mb-4 text-meta text-text-muted"
          data-aos={id !== 0 ? "fade-left" : "fade-right"}
          data-aos-duration="1000"
        >
          {about?.designation}
        </p>

        <Image
          src={about?.image}
          alt="about-image"
          className="mb-8 mt-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="0"
          width={600}
          height={400}
        />

        {about?.description?.map((desc, idx) => (
          <p
            key={idx}
            className={`font-chillax ${
              idx === 0 ? "text-xs" : "mt-3 text-xs lg:mt-6"
            } text-text-muted lg:text`}
            data-aos={id !== 0 ? "fade-left" : "fade-right"}
            data-aos-duration="1000"
            data-aos-delay={idx * 200}
          >
            {desc}
          </p>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {socials?.map((item, key) => (
          <SocialButton
            key={key}
            // position={id === 0 ? "left" : "right"}
            // animations={''}
            data-aos={id !== 0 ? "fade-left" : "fade-right"}
            data-aos-delay={id === 0 ? ((key - 2) % 3) * -150 : key * 100}
            id={key + 1}
            icon={iconMapper[item?.icon]}
            text={item?.text}
            total={socials?.length}
            link={item?.link}
          />
        ))}
      </div>

      <div className="mt-4 border border-border bg-bg-muted p-4 text-text lg:p-12">
        <p className="font-satoshi mb-2 text-meta uppercase text-text-muted lg:mb-8">
          Awards
        </p>

        <div className="font-satoshi flex flex-col divide-y divide-border">
          {awards?.map(({ name, year }, key) => (
            <div
              className="flex items-center justify-between py-2 md:py-4 lg:py-6"
              data-aos={id !== 0 ? "fade-left" : "fade-right"}
              data-aos-duration="1000"
              data-aos-delay={key * 100}
              key={key}
            >
              <h5 className="text text-text md:text-h6 lg:text-h5">{name}</h5>
              <p className="text-meta text-text">{year}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default AboutContents;
