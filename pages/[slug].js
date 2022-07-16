import React, { useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";

import { OffsetContext } from "../contexts/OffsetContext";

const Details = () => {
  const { offset } = useContext(OffsetContext);

  return (
    <section className="flex justify-center h-screen">
      <div
        style={{ top: offset === 0 ? `28%` : `${offset - 174}px` }}
        className="absolute overflow-hidden -translate-x-1/2 left-1/2 w-fit"
      >
        <motion.h2
          animate={{
            y: 200,
            transition: {
              duration: 0.5,
              type: "spring",
              ease: "easeIn",
              delay: 0.5,
            },
          }}
          className=""
        >
          Work
        </motion.h2>
      </div>

      <div className="absolute overflow-hidden -translate-x-1/2 left-1/2 w-fit top-[28%] px-5">
        <motion.p
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              type: "spring",
              ease: "easeOut",
              delay: 1.5,
            },
          }}
          className="text-[0.7rem] uppercase"
        >
          05.2022
        </motion.p>
        <motion.h2
          initial={{ y: 200 }}
          animate={{
            y: 0,
            transition: {
              duration: 0.5,
              type: "spring",
              ease: "easeOut",
              delay: 1,
            },
          }}
        >
          React music player
        </motion.h2>
      </div>

      <motion.div
        animate={{
          top: "50%",
          left: 0,
          x: 0,
          height: "50vh",
          width: "100%",
          transition: { duration: 1 },
        }}
        className="md:w-[60%] w-[80%] h-[15rem] md:h-[50vh] absolute"
        style={{ top: offset === 0 ? `50%` : `${offset}px` }}
      >
        <div className="relative w-full h-full rounded">
          <Image
            layout="fill"
            alt=""
            objectFit="cover"
            src="/images/react-music-player.jpg"
          />
          <motion.div
            animate={{
              opacity: 1,
              transition: { duration: 0.5, ease: "easeIn" },
            }}
            className="absolute z-30 px-4 py-2 text-[0.7rem] uppercase duration-300 -translate-y-1/2  rounded opacity-0  top-1/2 left-5 "
          >
            <AiOutlineArrowDown className="text-[18px] animate-bounce mb-2" />
            <p>
              Scroll <br /> for more
            </p>
          </motion.div>
          <motion.p
            animate={{
              opacity: 0,
              transition: { duration: 0.5, ease: "easeIn" },
            }}
            className="absolute z-30 px-4 py-2 duration-300 bg-white rounded glass top-5 left-5 bg-opacity-5"
          >
            01 / React music player
          </motion.p>
          <motion.div
            animate={{
              opacity: 0,
              transition: { duration: 0.5, ease: "easeIn" },
            }}
            className="absolute z-30 flex gap-5 bottom-5 left-5"
          >
            <p className="px-4 py-2 duration-300 bg-blue-400 rounded-full glass bg-opacity-20">
              React
            </p>
            <p className="px-4 py-2 duration-300 bg-pink-400 rounded-full glass bg-opacity-20">
              SCSS
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Details;
