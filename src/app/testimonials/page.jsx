import React from "react";
import Testimonials from "../components/Testimonials/Testimonials";
import Head from "../head";
// import Layout from "../components/Layout/Layout";
// import useAOS from "../hooks/useAos";
// import useLenis from "../hooks/useLenis";

const Page = () => {
  // useAOS();
  // useLenis();
  return (
    <>
      <Head title={"Testimonials"} />

      <div className="py-24 lg:pb-40 lg:pt-56">
        <Testimonials />
      </div>
    </>
  );
};

export default Page;
