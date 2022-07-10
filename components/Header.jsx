import React from "react";
import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";

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
      <div className="absolute bottom-[23%] left-[15%] z-10">
        <motion.div style={{ y: y2 }} className="overflow-hidden">
          <motion.h1
            animate={loading ? "closed" : "open"}
            variants={textVariants}
            className="leading-[110px] text-white"
          >
            Mike
          </motion.h1>
        </motion.div>
        <motion.div style={{ y: y2 }} className="overflow-hidden">
          <motion.h1
            animate={loading ? "closed" : "open"}
            variants={textVariants}
            className="leading-[110px] text-white"
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
      <motion.div
        animate={loading ? "closed" : "open"}
        variants={opacityVariants}
        className="absolute top-0 left-0 z-0 w-full h-full pointer-events-none"
      >
        <Image
          src="/images/wormhole.svg"
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="left bottom"
        />
      </motion.div>
    </header>
  );
}
