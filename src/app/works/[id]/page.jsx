// src/app/works/[id]/page.jsx
import Layout from "@/app/components/Layout/Layout";
import NotFound from "@/app/components/NotFound/NotFound";
import WorkDetails from "@/app/components/WorkDetails/WorkDetails";
import { getData } from "@/constants";

// Server Components do not use useState, useEffect, usePathname

export default async function Page({ params }) {
  const id = params.id; // dynamic [id] from the URL like /works/1

  const data = await getData("works");

  const selectedWork = data[id - 1];

  if (!selectedWork) return <NotFound />;

  return (
    <>
      <WorkDetails data={selectedWork} />
    </>
  );
}
