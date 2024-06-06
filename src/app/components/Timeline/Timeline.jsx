import React from "react";
import TimelineItem from "../TimelineItem/TimelineItem";

const Timeline = () => {
  //   const topValue = 4 * 6;
  return (
    <>
      {/* <div className="relative flex h-auto items-center justify-center gap-20">
        <div className="w-5/12"></div>
        <div className="w-fit">
          <div className="mx-auto mb-2 h-36 w-px bg-border"></div>
          <div className="mx-auto flex aspect-square w-10 items-center justify-center rounded-full border border-border bg-bg-muted">
            01
          </div>
          <div className="mx-auto mt-2 h-36 w-px bg-border"></div>
        </div>
        <div className="relative my-auto w-5/12 border border-border bg-bg p-12">
          <div className="absolute right-5 top-5 border border-border bg-bg-muted p-2 text-meta-sm text-text">
            2 Hours
          </div>

          <p className="mb-1 text-meta">Do we Match?</p>
          <h4 className="mb-4 text-h4 uppercase">Discovery Call</h4>
          <p className="font-chillax text-text text-text-muted">
            Before we start, we determine if and how I can help you. What are
            your requirements for your new website? Why do you need a new
            website? What goals do you have, and what problems can we solve with
            a new website?
          </p>
        </div>
      </div> */}

      {Array.from({ length: 4 }).map((_, key) => (
        <TimelineItem id={key} key={key} />
      ))}
    </>
  );
};

export default Timeline;
