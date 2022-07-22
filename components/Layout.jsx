import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Contact />

      {children}
      <Footer />
    </>
  );
}
