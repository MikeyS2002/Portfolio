import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <section className="fixed top-0 left-0 z-50 w-full h-screen pointer-events-none">
      <div className="grid w-full h-full grid-cols-4">
        <motion.div
          animate={{
            width: 0,
            transition: { delay: 2, duration: 0.5 },
          }}
          className="bg-white"
        ></motion.div>
        <motion.div
          animate={{
            width: 0,
            transition: { delay: 2, duration: 0.5 },
          }}
          className="bg-white"
        ></motion.div>
        <motion.div
          animate={{
            width: 0,
            transition: { delay: 2, duration: 0.5 },
          }}
          className="bg-white"
        ></motion.div>
        <motion.div
          animate={{
            width: 0,
            transition: { delay: 2, duration: 0.5 },
          }}
          className="bg-white"
        ></motion.div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] ">
        <motion.svg
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { duration: 0.5, delay: 1.5 } }}
          viewBox="0 50 200 100"
          width="100%"
          height="100%"
          className="stroke-black"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: 1,
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
            fill="none"
            strokeWidth="10"
            d="M100,100 
             C200,0 200,200 100,100
             C0,0 0,200 100,100z"
          />
        </motion.svg>
      </div>
    </section>
  );
}
