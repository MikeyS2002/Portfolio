import React from "react";
import Image from "next/image";
import { BsLink45Deg } from "react-icons/bs";
import { AiOutlineBranches } from "react-icons/ai";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderButtons from "../components/SliderButtons";

const SlugContent = ({ project }) => {
  const {
    bannerImage,
    title,
    skills,
    typeProject,
    content,
    slider,
    websiteUrl,
    githubRepo,
  } = project;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      className="mt-[100vh] project-slider max-w-[1600px] mx-aut0 md:py-20 md:px-10 px-2 sm:px-5 py-10"
    >
      <div className="flex flex-col gap-5 md:gap-10 md:flex-row">
        <div className="min-w-[200px] max-w-[200px]">
          <div className="flex items-center gap-2 ">
            <BsLink45Deg className="text-[20px]" />
            <a
              target="_blank"
              rel="noreferrer"
              href={websiteUrl}
              className="break-words"
            >
              {title}
            </a>
          </div>
          {}
          <div className="flex items-center gap-2 ">
            <AiOutlineBranches className="text-[20px]" />
            <a
              target="_blank"
              rel="noreferrer"
              href={githubRepo}
              className="break-words"
            >
              Github repository
            </a>
          </div>
          <p className="mt-5">{typeProject}</p>
          <p className="mt-5">Skills:</p>
          <ul className="ml-5 list-disc">
            {skills.map((skill, i) => (
              <li key={i}>{skill.title}</li>
            ))}
          </ul>
        </div>
        <div className="w-px bg-[#A5A5A5] min-h-full md:block hidden"></div>
        <div className="w-full bg-[#A5A5A5] h-px md:hidden block"></div>
        <div
          className="space-y-5 content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        navigation={true}
        className="mt-10"
      >
        {slider.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <Image
                src={slide.url}
                alt=""
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={slide.url}
              />
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src={bannerImage.url}
              alt=""
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={bannerImage.url}
            />
          </div>
        </SwiperSlide>
        <SliderButtons />
      </Swiper>
    </motion.div>
  );
};

export default SlugContent;
