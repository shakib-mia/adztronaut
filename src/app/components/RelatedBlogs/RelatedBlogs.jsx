"use client";
import React from "react";
import SeeAll from "../SeeAll/SeeAll";
import { usePathname } from "next/navigation";
import Blog from "../Blog/Blog";
import { VscLoading } from "react-icons/vsc";

const RelatedBlogs = ({ blogs }) => {
  const pathname = usePathname();
  //   console.log(blogs.splice(parseInt(pathname.split("/")[2]), 1));
  const removeItemAtIndex = (index) => {
    if (index >= 0 && index < blogs.length) {
      // Create a copy of the array
      const newArray = [...blogs];
      // Remove the item at the specified index
      newArray.splice(index, 1);
      // Update the state with the new array
      //   setArray(newArray);
      return newArray;
    }
  };

  const filteredBlogs = removeItemAtIndex(parseInt(pathname.split("/")[2]) - 1);

  // console.log(filteredBlogs);

  return (
    <>
      <div className="flex items-center justify-between pb-4 lg:p-8">
        <h1 className="font-satoshi text-h3 lg:text-h1" data-aos="fade-right">
          Related <span className="font-gambetta italic">News</span>
        </h1>

        <SeeAll link={"/blogs"} />
      </div>

      <div className="mb-32 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs ? (
          filteredBlogs
            .slice(0, 3)
            .map((item, key) => <Blog key={key} {...item} />)
        ) : (
          <div className="text-center">
            <div className="flex h-screen items-center justify-center text-center">
              <VscLoading className="animate-spin text-heading-sm" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RelatedBlogs;
