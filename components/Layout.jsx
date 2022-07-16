import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

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
