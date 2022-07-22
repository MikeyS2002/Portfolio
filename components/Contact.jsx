import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [contactOpen, setContactOpen] = useState(true);
  const [sending, setSending] = useState();

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
  async function onSubmitForm(values, e) {
    e.preventDefault();
    setSending(true);

    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(values),
    })
      .then((response) => {
        setSending(false);
        reset();
        setTimeout(() => {
          setContactOpen(true);
          document.body.style.overflow = "auto";
        }, 1000);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <motion.div
      animate={contactOpen ? "shown" : "hidden"}
      variants={contactVariants}
      className="fixed whitebg top-0 right-0 z-40 text-black bg-white h-screen sm:w-[400px] w-full p-10 sm:py-20 sm:px-10 "
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
      <form autoComplete="off" onSubmit={handleSubmit(onSubmitForm)}>
        <div className="relative mb-7 inputBox">
          <input
            className={`w-full px-4 py-2 border rounded focus:outline-none active:outline-none ${
              errors.name?.message ? "border-red-500" : ""
            }`}
            type="text"
            name="name"
            {...register("name", {
              required: "Required",
            })}
            placeholder=" "
          />
          <span className="absolute -translate-y-1/2 left-4 top-1/2 text-[#757575] md:text-[16px] text-[14px] pointer-events-none transition-all">
            Your name
          </span>
          <p
            className={`absolute -top-[19px] text-[12px] right-0 text-red-500 opacity-0 ${
              errors.name?.message ? "ahashakeheartache" : ""
            }`}
          >
            {errors.name?.message}
          </p>
        </div>
        <div className="relative mb-7 inputBox">
          <input
            className={`w-full px-4 py-2 border rounded focus:outline-none active:outline-none ${
              errors.email?.message ? "border-red-500" : ""
            }`}
            type="text"
            name="email"
            {...register("email", {
              required: "Required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid email",
              },
            })}
            placeholder=" "
          />
          <span className="absolute -translate-y-1/2 left-4 top-1/2 text-[#757575] md:text-[16px] text-[14px]  pointer-events-none transition-all">
            Email address
          </span>
          <p
            className={`absolute -top-[19px] text-[12px] right-0 text-red-500 opacity-0 ${
              errors.email?.message ? "ahashakeheartache" : ""
            }`}
          >
            {errors.email?.message}
          </p>
        </div>
        <div className="relative mb-7 inputBox">
          <input
            className={`w-full px-4 py-2 border rounded focus:outline-none active:outline-none ${
              errors.subject?.message ? "border-red-500" : ""
            }`}
            type="text"
            name="subject"
            {...register("subject", {
              required: "Required",
            })}
            placeholder=" "
          />
          <span className="absolute -translate-y-1/2 left-4 top-1/2 text-[#757575] md:text-[16px] text-[14px] pointer-events-none transition-all">
            Subject
          </span>
          <p
            className={`absolute -top-[19px] text-[12px] right-0 text-red-500 opacity-0 ${
              errors.subject?.message ? "ahashakeheartache" : ""
            }`}
          >
            {errors.subject?.message}
          </p>
        </div>
        <div className="relative mb-7 inputBox">
          <textarea
            className={`w-full h-40 px-4 py-2 border rounded max-h-60 min-h-20 focus:outline-none active:outline-none ${
              errors.message?.message ? "border-red-500" : ""
            }`}
            type="text"
            name="message"
            {...register("message", {
              required: "Required",
            })}
            placeholder=" "
          />
          <span className="absolute top-2 left-4  text-[#757575] md:text-[16px] text-[14px] pointer-events-none transition-all">
            Message
          </span>
          <p
            className={`absolute -top-[19px] text-[12px] right-0 text-red-500 opacity-0 ${
              errors.message?.message ? "ahashakeheartache" : ""
            }`}
          >
            {errors.message?.message}
          </p>
        </div>
        <button
          type="submit"
          className="px-6 py-3 text-white bg-black rounded w-[167.3px] h-[48px]"
        >
          {sending && <AiOutlineLoading className="m-auto animate-spin" />}
          {!sending && <p>Send message</p>}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
