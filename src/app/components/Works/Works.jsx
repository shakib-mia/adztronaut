import React from "react";
import Work from "../Work/Work";
import space from "@/assets/images/selected-works/space.jpg";
import nova from "@/assets/images/selected-works/nova.jpg";
import sonic from "@/assets/images/selected-works/sonic.jpg";
import solar from "@/assets/images/selected-works/solar.jpg";

const Works = () => {
  const data = [
    {
      id: 1,
      image: space,
      heading: "Space",
      subheading: "Webdesign",
    },
    {
      id: 2,

      image: nova,
      heading: "Nova",
      subheading: "Webdesign",
    },
    {
      id: 3,
      image: sonic,
      heading: "Sonic",
      subheading: "Webdesign",
    },
    {
      id: 4,
      image: solar,
      heading: "Solar",
      subheading: "Webdesign",
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
      {data.map((item, key) => (
        <Work {...item} key={key} id={key + 1} />
      ))}
    </div>
  );
};

export default Works;
