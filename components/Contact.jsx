import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Contact = () => {
  const [contactOpen, setContactOpen] = useState(true);

  const openContactHandler = () => {
    setContactOpen(!contactOpen);
    if (contactOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const contactVariants = {
    shown: {
      x: "100%",
      transition: {
        duration: 0.5,
        type: "spring",
      },
    },
    hidden: {
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      animate={contactOpen ? "shown" : "hidden"}
      variants={contactVariants}
      className="fixed top-0 right-0 z-40 text-black bg-white h-screen sm:w-[400px] w-full p-10 sm:py-20 sm:px-10 "
    >
      <div className="absolute top-0 -right-[20px] h-full w-[20px] bg-white"></div>
      <div
        onClick={openContactHandler}
        className="absolute flex items-center gap-2 px-2 py-1 rotate-90 bg-white rounded-b cursor-pointer top-1/2 -left-[74px] left md:-left-20 link"
      >
        <div className="flex flex-col justify-between w-3 h-[6px]">
          <div
            className={` ${
              contactOpen ? "" : "rotate-45 translate-y-[3px]"
            } w-full h-px  bg-black rounded-sm transition-all duration-300`}
          ></div>
          <div
            className={` ${
              contactOpen ? "" : "-rotate-45 -translate-y-[2px]"
            } w-full h-px  bg-black rounded-sm transition-all duration-300`}
          ></div>
        </div>
        <p>Get in touch</p>
      </div>
      <div className="flex items-center justify-between mb-10">
        <h3>Contact me!</h3>
        <div onClick={openContactHandler} className="block p-1 sm:hidden link">
          <IoCloseOutline className=" text-[20px] " />
        </div>
      </div>
      <form autoComplete="off">
        <div className="relative mb-7 inputBox">
          <input
            className="w-full px-4 py-2 border rounded focus:outline-none active:outline-none"
            type="text"
            name="name"
            required
            placeholder=" "
          />
          <span className="absolute -translate-y-1/2 left-4 top-1/2 text-[#757575] md:text-[16px] text-[14px] pointer-events-none transition-all">
            Your name
          </span>
        </div>
        <div className="relative mb-7 inputBox">
          <input
            className="w-full px-4 py-2 border rounded focus:outline-none active:outline-none"
            type="email"
            name="email"
            required
            placeholder=" "
          />
          <span className="absolute -translate-y-1/2 left-4 top-1/2 text-[#757575] md:text-[16px] text-[14px]  pointer-events-none transition-all">
            Email address
          </span>
        </div>
        <div className="relative mb-7 inputBox">
          <input
            className="w-full px-4 py-2 border rounded focus:outline-none active:outline-none"
            type="text"
            name="subject"
            required
            placeholder=" "
          />
          <span className="absolute -translate-y-1/2 left-4 top-1/2 text-[#757575] md:text-[16px] text-[14px] pointer-events-none transition-all">
            Subject
          </span>
        </div>
        <div className="relative mb-7 inputBox">
          <textarea
            className="w-full h-40 px-4 py-2 border rounded max-h-60 min-h-20 focus:outline-none active:outline-none"
            type="text"
            name="message"
            required
            placeholder=" "
          />
          <span className="absolute top-2 left-4  text-[#757575] md:text-[16px] text-[14px] pointer-events-none transition-all">
            Message
          </span>
        </div>
        <button type="submit" className="px-6 py-3 text-white bg-black rounded">
          Send message
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
