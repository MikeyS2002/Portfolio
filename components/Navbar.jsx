import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

// left-[15%] home
// left-[50%] work
// left-[85%] work about

export default function Navbar() {
  const router = useRouter();
  const [underline, setUnderline] = useState("home");
  const [homepage, setHomepage] = useState(router.pathname);

  const handleSetActiveHome = () => {
    setUnderline("home");
  };
  const handleSetActiveWork = () => {
    setUnderline("work");
  };
  const handleSetActiveAbout = () => {
    setUnderline("about");
  };

  useEffect(() => {
    setHomepage(router.pathname);
  }, [router.pathname]);

  return (
    <>
      {homepage === "/" && (
        <div className="fixed z-40 flex gap-20 px-8 py-4 -translate-x-1/2 bg-white rounded left-1/2 top-10 glass bg-opacity-5">
          <>
            <div
              className={`${
                underline === "home"
                  ? "left-[15%]"
                  : underline === "work"
                  ? "left-[50%]"
                  : underline === "about"
                  ? "left-[85%]"
                  : ""
              }  absolute bottom-3 h-[2px] w-[30px] bg-white transition-all duration-300 -translate-x-1/2`}
            ></div>
            <ScrollLink
              to="header"
              smooth={true}
              spy={true}
              duration={500}
              onSetActive={handleSetActiveHome}
            >
              <p className="cursor-pointer">Home</p>
            </ScrollLink>
            <ScrollLink
              to="work"
              smooth={true}
              spy={true}
              duration={500}
              offset={-100}
              onSetActive={handleSetActiveWork}
            >
              <p className="cursor-pointer">Work</p>
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              spy={true}
              duration={500}
              offset={-20}
              onSetActive={handleSetActiveAbout}
            >
              <p className="cursor-pointer">About</p>
            </ScrollLink>
          </>
        </div>
      )}
      {homepage !== "/" && (
        <Link href="/">
          <div className="fixed z-40 flex gap-20 p-4 bg-white rounded-full cursor-pointer left-10 top-10 glass bg-opacity-5">
            <AiOutlineArrowLeft />
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0"
            >
              <circle cx="24" cy="24" r="23.5" stroke="white" />
            </svg>
          </div>
        </Link>
      )}
    </>
  );
}
