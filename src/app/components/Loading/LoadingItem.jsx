import React from "react";
import { VscLoading } from "react-icons/vsc";

const LoadingItem = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <VscLoading className="animate-spin text-6xl text-brand" />
    </div>
  );
};

export default LoadingItem;
