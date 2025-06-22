import React from "react";
import Service from "../Service/Service";

const Services = () => {
  const services = [
    {
      title: "Content Strategy & Messaging",
      services: [
        "Brand voice development",
        "Funnel-aligned content plans",
        "Audience behavior mapping",
      ],
      whyItMatters:
        "No more throwing posts into the void. We build content with intent.",
    },
    {
      title: "Organic Content Marketing",
      services: [
        "SEO-driven blogs, reels, carousels",
        "Thought leadership & brand authority",
        "Content calendars built to grow followers and traffic",
      ],
      whyItMatters:
        "We don’t post for vanity metrics. We post to move the brand forward.",
    },
    {
      title: "Performance Content & Ads",
      services: [
        "Paid ads across Meta, Google & YouTube",
        "Ad creative design + copy",
        "Retargeting and funnel optimization",
      ],
      whyItMatters: "Our ads don’t feel like ads. That’s why they work.",
    },
    {
      title: "Creative Studio",
      services: [
        "Visual identity + storytelling",
        "Reels, carousels, landing pages, banners",
        "Thumb-stopping creatives for every stage of the funnel",
      ],
      whyItMatters: "In a scroll-happy world, we build reasons to pause.",
    },
    {
      title: "Analytics & Growth Consulting",
      services: [
        "Campaign reporting dashboards",
        "Conversion rate insights",
        "Actionable growth playbooks",
      ],
      whyItMatters: "We don’t just launch. We measure, optimize, and evolve.",
    },
  ];
  return (
    <section className="container px-0 pb-0 pt-10 xl:pt-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((item, key) => (
          <Service key={key} id={key} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Services;
