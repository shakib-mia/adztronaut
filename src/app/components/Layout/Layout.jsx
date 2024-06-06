import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="overflow-x-hidden md:overflow-visible">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
