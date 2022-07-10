import React, { useState, useEffect, useRef, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { OffsetContext } from "../contexts/OffsetContext";
import workData from "../data/workData";

const Work = () => {
  const ref = useRef();

  const { offset, setOffset } = useContext(OffsetContext);

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
    <section className="w-full mt-40 mb-20" id="work">
      <h2 className="mb-10 text-center">Work</h2>
      <Swiper
        ref={ref}
        slidesPerView={"auto"}
        loop={true}
        centeredSlides={true}
      >
        {workData.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <Link href="/work">
                <div className="relative w-full h-full group">
                  <Image
                    src="/images/react-music-player.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                  <p className="absolute z-30 px-4 py-2 transition-opacity duration-300 bg-white rounded glass top-5 left-5 bg-opacity-5">
                    0{slide.id} / {slide.title}
                  </p>
                  <div className="absolute z-30 flex gap-5 bottom-5 left-5">
                    {slide.skills.map((skill) => (
                      <p
                        key={skill.id}
                        className={`px-4 py-2 transition-opacity duration-300 bg-[${skill.color}] rounded-full opacity-0 glass group-hover:opacity-100 bg-opacity-20`}
                      >
                        {skill.title}
                      </p>
                    ))}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Work;
