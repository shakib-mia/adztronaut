import React from "react";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="container overflow-x-hidden md:overflow-visible">
        <Navbar />
        {children}
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
