import React, { useRef } from "react";
import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

export default function Header({ loading }) {
  const textVariants = {
    open: {
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    closed: { y: 200 },
  };
  const textSmallVariants = {
    open: {
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
    closed: { y: 100 },
  };
  const opacityVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    closed: { opacity: 0 },
  };

  const { scrollYProgress } = useViewportScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <header
      className="h-screen bg-black relative scale-y-[1.01] snap-start"
      id="header"
    >
      <div className="absolute bottom-[21%] md:bottom-[23%] left-5 sm:left-[15%] z-10">
        <motion.div style={{ y: y2 }} className="overflow-hidden">
          <motion.h1
            animate={loading ? "closed" : "open"}
            variants={textVariants}
            className="mb-2 leading-none text-white"
          >
            Mike
          </motion.h1>
        </motion.div>
        <motion.div style={{ y: y2 }} className="overflow-hidden">
          <motion.h1
            animate={loading ? "closed" : "open"}
            variants={textVariants}
            className="mb-4 leading-none text-white"
          >
            Schaper
          </motion.h1>
        </motion.div>
        <motion.div style={{ y: y1 }} className="overflow-hidden">
          <motion.p
            animate={loading ? "closed" : "open"}
            variants={textSmallVariants}
            className="ml-1 text-white"
          >
            Software engineer
          </motion.p>
        </motion.div>
      </div>
      <Canvas>
        <Experience loading={loading} />
      </Canvas>
    </header>
  );
}
