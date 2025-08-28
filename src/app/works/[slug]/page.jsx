// src/app/works/[slug]/page.jsx
import Layout from "@/app/components/Layout/Layout";
import NotFound from "@/app/components/NotFound/NotFound";
import WorkDetails from "@/app/components/WorkDetails/WorkDetails";
import Head from "@/app/head";
import { getData } from "@/constants";

// export async function generateMetadata({ params }) {
//   const selectedWork = await getData("works/" + params.slug);

//   if (!selectedWork) {
//     return {
//       title: "Not Found",
//     };
//   }

//   return {
//     title: `${selectedWork.heading} - ${selectedWork.subheading}`,
//     description: selectedWork.description || "",
//   };
// }

export default async function Page({ params }) {
  const slug = params.slug; // dynamic [slug] from the URL like /works/1

  const work = await getData("works/" + slug); // Fetch works data from the API

  if (!work) {
    return (
      <Layout>
        <NotFound />
      </Layout>
    );
  }
  return (
    <>
      <Head title={work.heading} description={work.subheading} />

      <div className="container">
        <WorkDetails data={work} />
      </div>
    </>
  );
}
