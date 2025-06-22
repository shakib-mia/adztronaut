import React from "react";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import AOSLenisWrapper from "../AOSLenisWrapper/AOSLenisWrapper";

const Layout = ({ children }) => {
  return (
    <>
      <AOSLenisWrapper />
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
