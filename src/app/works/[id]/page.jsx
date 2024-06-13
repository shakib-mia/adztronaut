"use client";
import Layout from "@/app/components/Layout/Layout";
import NotFound from "@/app/components/NotFound/NotFound";
import WorkDetails from "@/app/components/WorkDetails/WorkDetails";
import useAOS from "@/app/hooks/useAos";
import useLenis from "@/app/hooks/useLenis";
import { getData } from "@/constants";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  useAOS();
  useLenis();

  const pathname = usePathname().split("/")[2];
  // console.log(pathname);
  const [data, setData] = useState({});

  useEffect(() => {
    getData("works").then((data) => setData(data[pathname - 1]));
  }, [pathname]);

  return <Layout>{data ? <WorkDetails data={data} /> : <NotFound />}</Layout>;
};

export default Page;
