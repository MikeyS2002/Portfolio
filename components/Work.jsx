import React, { useEffect, useRef, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { OffsetContext } from "../contexts/OffsetContext";
import Icon from "./Icon";
import { motion } from "framer-motion";

const Work = ({ projects }) => {
  const ref = useRef();

  const { setOffset } = useContext(OffsetContext);

  useEffect(() => {
    const handleScroll = (event) => {
      setOffset(ref.current.getBoundingClientRect().top);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      className="w-full mt-20 mb-10 md:mt-40 md:mb-20 work-slider"
      id="work"
    >
      <h2 className="mb-10 text-center">Work</h2>
      <Swiper
        ref={ref}
        slidesPerView={"auto"}
        loop={true}
        centeredSlides={true}
      >
        {projects.allProjects.map((slide, i) => {
          return (
            <SwiperSlide key={i}>
              <Link href={"/" + slide.slug}>
                <div className="relative w-full h-full group link">
                  <Image
                    src={slide.bannerImage.url}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={slide.bannerImage.url}
                    objectPosition={slide.objectTop ? `top` : `center`}
                  />
                  <p
                    className={`${
                      slide.blackOverlayText ? "text-black" : ""
                    } absolute z-30 px-4 py-2  bg-white rounded glass top-5 left-5 bg-opacity-5 `}
                  >
                    0{slide.index} / {slide.title}
                  </p>
                  <div className="absolute z-30 flex gap-5 transition-opacity duration-300 opacity-0 bottom-5 left-5 md:group-hover:opacity-100">
                    {slide.skills.map((skill, i) => (
                      <div className="flex items-center gap-1" key={i}>
                        <div
                          style={{ background: skill.color }}
                          className={`bg-white w-6 h-6 rounded-sm`}
                        >
                          <Icon
                            iconClass="w-full h-full p-[2px]"
                            iconName={skill.logo}
                          />
                        </div>
                        <p>{skill.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.section>
  );
};

export default Work;
