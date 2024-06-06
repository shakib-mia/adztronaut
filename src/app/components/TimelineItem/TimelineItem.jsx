import React, { useEffect, useState } from "react";

const TimelineItem = ({ id }) => {
  const [topPosition, setTopPosition] = useState(0);
  // alert(window.innerHeight);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const position = `${(window.innerWidth > 640 ? 2 : 1) * id}rem`;
      // console.log(position);
      setTopPosition(`-${position}`);
    }
  }, [id]);

  return (
    <div
      className={`relative ${id % 2 === 0 ? "flex-row-reverse xl:flex-row" : "flex-row"} flex h-auto items-center justify-center gap-4 xl:gap-20`}
      style={{ top: topPosition }}
    >
      {id % 2 === 0 ? (
        <div
          className="relative my-auto w-5/6 border border-border bg-bg p-6 xl:w-5/12 xl:p-12"
          data-aos={window.innerWidth > 1280 ? "fade-left" : ""}
          data-aos-duration="1000"
        >
          <div className="absolute right-5 top-5 border border-border bg-bg-muted p-2 text-meta-sm text-text">
            2 Hours
          </div>

          <p className="mb-1 text-meta">Do we Match?</p>
          <h4 className="mb-4 text-h5 uppercase sm:text-h4">Discovery Call</h4>
          <p className="font-chillax text-sm text-text text-text-muted sm:text-base">
            Before we start, we determine if and how I can help you. What are
            your requirements for your new website? Why do you need a new
            website? What goals do you have, and what problems can we solve with
            a new website?
          </p>
        </div>
      ) : (
        <div className="hidden w-5/12 xl:block"></div>
      )}

      <div className="w-fit">
        <div className="mx-auto mb-2 h-36 w-px bg-border"></div>
        <div className="mx-auto flex aspect-square w-10 items-center justify-center rounded-full border border-border bg-bg-muted">
          0{id + 1}
        </div>
        <div className="mx-auto mt-2 h-36 w-px bg-border"></div>
      </div>

      {id % 2 !== 0 ? (
        <div
          className="relative my-auto w-5/6 border border-border bg-bg p-6 xl:w-5/12 xl:p-12"
          data-aos={window.innerWidth > 1280 ? "fade-right" : ""}
          data-aos-duration="1000"
        >
          <div className="absolute right-5 top-5 border border-border bg-bg-muted p-2 text-meta-sm text-text">
            2 Hours
          </div>

          <p className="mb-1 text-meta">Do we Match?</p>
          <h4 className="mb-4 text-h5 uppercase sm:text-h4">Discovery Call</h4>
          <p className="font-chillax text-sm text-text text-text-muted sm:text-base">
            Before we start, we determine if and how I can help you. What are
            your requirements for your new website? Why do you need a new
            website? What goals do you have, and what problems can we solve with
            a new website?
          </p>
        </div>
      ) : (
        <div className="hidden w-5/12 xl:block"></div>
      )}
    </div>
  );
};

export default TimelineItem;
