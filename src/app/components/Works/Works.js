import React from "react";
import Work from "../Work/Work";
// import { getData } from "@/constants";
import axios from "axios";
// import { headers } from "next/headers";

const Works = async () => {
  // const [works, setWorks] = useState([]);
  // const headersList = headers();
  // console.log(headersList);

  // useEffect(() => {
  //   getData("works").then((data) => setWorks(data));
  // }, []);
  const { data: works } = await axios.get(
    "https://arik-zeta.vercel.app/works.json",
  );

  return (
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
      {works.map((item, key) => (
        <Work {...item} key={key} id={key + 1} />
      ))}
    </div>
  );
};

export default Works;
