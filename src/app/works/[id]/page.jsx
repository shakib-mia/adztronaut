// src/app/works/[id]/page.jsx
import Layout from "@/app/components/Layout/Layout";
import NotFound from "@/app/components/NotFound/NotFound";
import WorkDetails from "@/app/components/WorkDetails/WorkDetails";
import { getData } from "@/constants";

export async function generateMetadata({ params }) {
  const data = await getData("works");
  const selectedWork = data[parseInt(params.id) - 1];

  if (!selectedWork) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${selectedWork.heading} - ${selectedWork.subheading}`,
    description: selectedWork.description || "",
  };
}

export default async function Page({ params }) {
  const id = params.id; // dynamic [id] from the URL like /works/1

  const selectedWork = await getData("works/" + id.toString());

  if (!selectedWork) {
    return (
      <Layout>
        <NotFound />
      </Layout>
    );
  }
  return (
    <>
      <WorkDetails data={selectedWork} />
    </>
  );
}
