import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

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
    if (homepage !== "/") {
      setUnderline("home");
    }
  }, [router.pathname]);

  const navVariants = {
    shown: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      ease: "easeOut",
    },
  };
  const pathVariants = {
    shown: {
      pathLength: 1.1,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        variants={navVariants}
        animate={homepage === "/" ? "shown" : "hidden"}
        initial={{ opacity: 0 }}
        className="fixed z-30 flex gap-20 px-8 py-4 -translate-x-1/2 bg-white rounded left-1/2 md:top-10 top-5 glass bg-opacity-5"
      >
        <>
          <div
            className={`${
              underline === "home"
                ? "left-[15.5%] w-[47px]"
                : underline === "work"
                ? "left-[50%] w-[40px]"
                : underline === "about"
                ? "left-[84.5%] w-[50px]"
                : ""
            }  absolute bottom-[14px] h-[2px]  bg-white transition-all duration-300 -translate-x-1/2`}
          ></div>
          <ScrollLink
            to="header"
            smooth={true}
            spy={true}
            duration={500}
            onSetActive={handleSetActiveHome}
          >
            <p className="">Home</p>
          </ScrollLink>
          <ScrollLink
            to="work"
            smooth={true}
            spy={true}
            duration={500}
            offset={-100}
            onSetActive={handleSetActiveWork}
          >
            <p className="">Work</p>
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            spy={true}
            duration={500}
            offset={-20}
            onSetActive={handleSetActiveAbout}
          >
            <p className="">About</p>
          </ScrollLink>
        </>
      </motion.div>

      <Link href="/">
        <motion.div
          variants={navVariants}
          animate={homepage === "/" ? "hidden" : "shown"}
          initial={{ opacity: 0 }}
          className="fixed z-30 flex gap-20 p-4 bg-white rounded-full link group left-10 top-10 glass bg-opacity-5"
        >
          <AiOutlineArrowLeft className="transition-transform group-hover:scale-[1.1]" />
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0"
          >
            <motion.circle
              variants={pathVariants}
              animate={homepage === "/" ? "" : "shown"}
              initial={{ pathLength: 0 }}
              cx="24"
              cy="24"
              r="23.5"
              stroke="white"
            />
          </svg>
        </motion.div>
      </Link>
    </>
  );
}
