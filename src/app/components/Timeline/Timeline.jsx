"use client";
import React from "react";
import TimelineLine from "../TimelineLine/TimelineLine";
import TimelineItem from "../TimelineItem/TimelineItem";

const Timeline = () => {
  const items = [
    {
      heading: "Strategy Before Everything",
      paragraph:
        "We don’t jump straight into execution. We ask, research, and plan so every piece of content actually has a purpose—and performs.",
    },
    {
      heading: "We’re Always in Touch",
      paragraph:
        "We're not the “vanish after invoice” type. Whether it’s a weekend idea or a late-night brainstorm, we’re here for the real conversations.",
    },
    {
      heading: "Creativity Backed by Data",
      paragraph:
        "We blend storytelling with performance insights—so every campaign is both beautiful and bottom-line driven.",
    },
    {
      heading: "We Build Systems, Not Just Posts",
      paragraph:
        "From organic content flows to ad funnels, we build full ecosystems that scale. One carousel or reel is just the tip of the iceberg.",
    },
    {
      heading: "We're Partners, Not Vendors",
      paragraph:
        "Think of us as an extended growth team—people who care about your business like it's our own.",
    },
  ];

  return (
    <div className="relative mt-4 pl-4 sm:px-6 lg:mt-32 lg:px-16" id="timeline">
      <TimelineLine />
      {items.map((item, key) => (
        <TimelineItem {...item} id={key + 1} key={key} />
      ))}
    </div>
  );
};

export default Timeline;
