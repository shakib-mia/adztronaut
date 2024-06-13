import React, { useEffect, useState } from "react";
import Work from "../Work/Work";
import { getData } from "@/constants";

const Works = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    getData("works").then((data) => setWorks(data));
  }, []);

  return (
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
      {works.map((item, key) => (
        <Work {...item} key={key} id={key + 1} />
      ))}
    </div>
  );
};

export default Works;
