import React, { useEffect, useState } from "react";

const TimelineItem = ({
  id,
  subHeading,
  heading,
  paragraph,
  tag,
  listItem,
}) => {
  const [topPosition, setTopPosition] = useState(0);
  // const [aosType]
  // alert(window.innerHeight);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const position = `${(window.innerWidth > 640 ? 2 : 1) * id}rem`;
      // console.log(position);
      setTopPosition(`-${position}`);
    }
  }, [id]);

  const [aosType, setAosType] = useState("");
  const [aosType2, setAosType2] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 1280) {
      setAosType("fade-left");
      setAosType2("fade-right");
    } else {
      setAosType("fade-left");
      setAosType2("fade-left");
    }
  }, []);

  return (
    <div
      className={`relative ${id % 2 === 0 ? "flex-row-reverse xl:flex-row" : "flex-row"} flex h-auto items-center justify-center gap-4 xl:gap-20`}
      style={{ top: topPosition }}
    >
      {id % 2 === 0 ? (
        <div
          className="relative my-auto w-5/6 border border-border bg-bg p-6 xl:w-5/12 xl:p-12"
          data-aos={aosType}
          data-aos-duration="1000"
        >
          <div className="absolute right-5 top-5 border border-border bg-bg-muted p-2 text-meta-sm uppercase text-text">
            {tag}
          </div>

          <p className="mb-1 text-meta uppercase text-text-muted">
            {subHeading}
          </p>
          <h4 className="mb-4 text-h5 uppercase sm:text-h4">{heading}</h4>
          <p className="mb-8 font-chillax text-sm text-text text-text-muted sm:text-base">
            {paragraph}
          </p>

          <ul className="flex flex-col gap-2 md:gap-4">
            {listItem.map((item, key) => (
              <li className="flex items-center gap-4" key={key}>
                <div className="h-1 w-1 rounded-full bg-bg-primary"></div>
                <p className="font-chillax text-xs text-text md:text">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="hidden w-5/12 xl:block"></div>
      )}

      <div className="w-fit" data-aos="fade-down">
        <div className="mx-auto mb-2 h-48 w-px bg-border"></div>
        <div className="mx-auto flex aspect-square w-10 items-center justify-center rounded-full border border-border bg-bg-muted">
          0{id}
        </div>
        <div className="mx-auto mt-2 h-48 w-px bg-border"></div>
      </div>

      {id % 2 !== 0 ? (
        <div
          className="relative my-auto w-5/6 border border-border bg-bg p-6 xl:w-5/12 xl:p-12"
          data-aos={aosType2}
          data-aos-duration="1000"
        >
          <div className="absolute right-5 top-5 border border-border bg-bg-muted p-2 text-meta-sm uppercase text-text">
            {tag}
          </div>

          <p className="mb-1 text-meta uppercase text-text-muted">
            {subHeading}
          </p>
          <h4 className="mb-4 text-h5 uppercase sm:text-h4">{heading}</h4>
          <p className="mb-8 font-chillax text-sm text-text text-text-muted sm:text-base">
            {paragraph}
          </p>

          <ul className="flex flex-col gap-2 md:gap-4">
            {listItem.map((item, key) => (
              <li className="flex items-center gap-4" key={key}>
                <div className="h-1 w-1 rounded-full bg-bg-primary"></div>
                <p className="font-chillax text-xs text-text md:text">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="hidden w-5/12 xl:block"></div>
      )}
    </div>
  );
};

export default TimelineItem;
