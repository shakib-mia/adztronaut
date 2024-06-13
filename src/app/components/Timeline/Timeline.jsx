import React from "react";
import TimelineItem from "../TimelineItem/TimelineItem";

const Timeline = () => {
  //   const topValue = 4 * 6;

  const items = [
    {
      subHeading: "Do we Match?",
      tag: "2 Hours",
      heading: "Discovery Call",
      paragraph:
        "Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?",
      listItem: [
        "We get to know each other better",
        "Determine how I can best assist you",
        "Understand the goals you have for your website",
      ],
    },

    {
      subHeading: "lorem ipsum",
      tag: "1 Week",
      heading: "Concept & STrategy",
      paragraph:
        "Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface.",
      listItem: ["UX Design", "Wireframes", "Interactive Prototype"],
    },

    {
      subHeading: "SOme MAgic",
      tag: "1 week",
      heading: "web Design",
      paragraph:
        "Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience.",
      listItem: [
        "High-end web design tailored to your brand",
        "Interactive prototype of the design",
      ],
    },

    {
      subHeading: "More Magic",
      tag: "2 Weeks",
      heading: "Development",
      paragraph:
        "In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition.",
      listItem: [
        "Custom framer website",
        "Modular web design systems",
        "CMS integration",
      ],
    },

    {
      subHeading: "ready to go",
      tag: "2 Hours",
      heading: "WEbsite onboarding",
      paragraph:
        "In a personal Framer workshop, I will show you how to make changes to your new website quickly and easily. Additionally, you will receive personalized Framer video tutorials that you can access at any time. Edit your Framer website without a complicated backend or the need for an additional programmer. It's as simple as that.",
      listItem: [
        "Personal workshop",
        "Personalized video tutorials",
        "Edit text and images directly on your website",
      ],
    },
  ];

  return (
    <div className="relative mt-16">
      {items.map((item, key) => (
        <TimelineItem {...item} id={key + 1} key={key} />
      ))}
    </div>
  );
};

export default Timeline;
