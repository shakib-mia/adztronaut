import React from "react";
import Work from "../Work/Work";
import { getData } from "@/constants";

const Works = async () => {
  const works = await getData("works");

  if (!works || works.length === 0) {
    return (
      <div className="text-red-600 mt-8 text-center text-xl">
        No works found.
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
      {works.map((item, key) => (
        <Work {...item} key={key} id={key + 1} />
      ))}
    </div>
  );
};

export default Works;
