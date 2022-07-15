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
      <AnimatedCursor
        innerStyle={{ backgroundColor: "white", mixBlendMode: "difference" }}
        outerStyle={{
          border: "1px solid white",
          backgroundColor: "transparant",
          mixBlendMode: "difference",
        }}
        innerSize={6}
        outerSize={30}
        outerAlpha={0.2}
        innerScale={1}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      {children}
      <Footer />
    </>
  );
}
