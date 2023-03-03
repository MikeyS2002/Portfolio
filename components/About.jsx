import React, { useState, useRef, useEffect, createRef } from "react";
import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { useInView } from "react-intersection-observer";

import skillsData from "../data/skillsData";
import Icon from "./Icon";

const pathVariants = {
  shown: {
    pathLength: 1.1,
    transition: { duration: 1, ease: "easeOut" },
  },
  hidden: {
    pathLength: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const aboutImgs = ["mikeschaper.jpg", "callie.png", "lift.JPG", "callie2.jpg"];
const expImgs = ["flatline.jpg"];
const eduImgs = ["hva.jpeg", "horizon.jpeg"];

const About = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const { scrollYProgress } = useViewportScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const [about, setAbout] = useState("aboutMe");
  const [activeAbout, setActiveAbout] = useState(1);

  //skills
  const [topPos, setTopPos] = useState([]);
  const [leftPos, setLeftPos] = useState([]);
  const [topOffs, setTopOffs] = useState([]);
  const [leftOffs, setLeftOffs] = useState([]);
  const [rightOffs, setRightOffs] = useState([]);
  const [bottomOffs, setBottomOffs] = useState([]);

  const top = [];
  const left = [];
  const offTop = [];
  const offLeft = [];
  const offRight = [];
  const offBottom = [];

  //About
  const [aboutTopPos, setAboutTopPos] = useState([]);
  const [aboutLeftPos, setAboutLeftPos] = useState([]);
  const [aboutTopOffs, setAboutTopOffs] = useState([]);
  const [aboutLeftOffs, setAboutLeftOffs] = useState([]);
  const [aboutRightOffs, setAboutRightOffs] = useState([]);
  const [aboutBottomOffs, setAboutBottomOffs] = useState([]);

  const aboutTop = [];
  const aboutLeft = [];
  const aboutOffTop = [];
  const aboutOffLeft = [];
  const aboutOffRight = [];
  const aboutOffBottom = [];

  //Experience
  const [expTopPos, setExpTopPos] = useState([]);
  const [expLeftPos, setExpLeftPos] = useState([]);
  const [expTopOffs, setExpTopOffs] = useState([]);
  const [expLeftOffs, setExpLeftOffs] = useState([]);
  const [expRightOffs, setExpRightOffs] = useState([]);
  const [expBottomOffs, setExpBottomOffs] = useState([]);

  const expTop = [];
  const expLeft = [];
  const expOffTop = [];
  const expOffLeft = [];
  const expOffRight = [];
  const expOffBottom = [];

  //Education
  const [eduTopPos, setEduTopPos] = useState([]);
  const [eduLeftPos, setEduLeftPos] = useState([]);
  const [eduTopOffs, setEduTopOffs] = useState([]);
  const [eduLeftOffs, setEduLeftOffs] = useState([]);
  const [eduRightOffs, setEduRightOffs] = useState([]);
  const [eduBottomOffs, setEduBottomOffs] = useState([]);

  const eduTop = [];
  const eduLeft = [];
  const eduOffTop = [];
  const eduOffLeft = [];
  const eduOffRight = [];
  const eduOffBottom = [];

  //refs
  const aboutRefs = useRef([]);
  const expRefs = useRef([]);
  const eduRefs = useRef([]);
  const lineRefs = useRef([]);

  const aboutParentRef = useRef();
  const expParentRef = useRef();
  const eduParentRef = useRef();
  const parentRef = useRef();

  //Set random top an left
  useEffect(() => {
    for (var i = 0; i < skillsData.length; i++) {
      top.push(Math.floor(Math.random() * (90 - 1 + 1) + 1));
      left.push(Math.floor(Math.random() * (70 - 1 + 1) + 1));
    }
    setTopPos(top);
    setLeftPos(left);

    //About me images
    for (var i = 0; i < aboutImgs.length; i++) {
      aboutLeft.push(Math.floor(Math.random() * 86));
      aboutTop.push(Math.floor(Math.random() * 40));
    }
    setAboutTopPos(aboutTop);
    setAboutLeftPos(aboutLeft);

    //Experience images
    for (var i = 0; i < expImgs.length; i++) {
      expTop.push(Math.floor(Math.random() * 32));
      expLeft.push(Math.floor(Math.random() * 70));
    }
    setExpTopPos(expTop);
    setExpLeftPos(expLeft);

    //Education images
    for (var i = 0; i < eduImgs.length; i++) {
      eduTop.push(Math.floor(Math.random() * 32));
      eduLeft.push(Math.floor(Math.random() * 70));
    }
    setEduTopPos(eduTop);
    setEduLeftPos(eduLeft);
  }, []);

  //Set refs
  useEffect(() => {
    lineRefs.current = skillsData.map(
      (_, i) => lineRefs.current[i] ?? createRef()
    );

    aboutRefs.current = aboutImgs.map(
      (_, i) => aboutRefs.current[i] ?? createRef()
    );

    expRefs.current = expImgs.map((_, i) => expRefs.current[i] ?? createRef());

    eduRefs.current = eduImgs.map((_, i) => eduRefs.current[i] ?? createRef());
  }, []);

  //Calculate offset for drag constraints
  useEffect(() => {
    if (about === "skills") {
      const parentWidth = parentRef.current.clientWidth;
      const parentHeight = parentRef.current.clientHeight;

      for (var i = 0; i < skillsData.length; i++) {
        offTop.push(lineRefs.current[i].current.offsetTop);
        offLeft.push(lineRefs.current[i].current.offsetLeft);
        offRight.push(
          parentWidth - (lineRefs.current[i].current.clientWidth + offLeft[i])
        );
        offBottom.push(
          parentHeight - (lineRefs.current[i].current.clientHeight + offTop[i])
        );
      }
      setTopOffs(offTop);
      setLeftOffs(offLeft);
      setRightOffs(offRight);
      setBottomOffs(offBottom);
    }

    if (about === "aboutMe") {
      const parentWidth = aboutParentRef.current.clientWidth;
      const parentHeight = aboutParentRef.current.clientHeight;
      for (var i = 0; i < aboutImgs.length; i++) {
        if (aboutRefs.current[i].current) {
          aboutOffTop.push(aboutRefs.current[i].current.offsetTop);
          aboutOffLeft.push(aboutRefs.current[i].current.offsetLeft);

          aboutOffRight.push(
            parentWidth -
              (aboutRefs.current[i].current.clientWidth + aboutOffLeft[i])
          );
          aboutOffBottom.push(
            parentHeight -
              (aboutRefs.current[i].current.clientHeight + aboutOffTop[i])
          );
          console.log(aboutOffBottom);
        } else {
          return;
        }
      }
      if (aboutImgs.length > 0) {
        setAboutTopOffs(aboutOffTop);
        setAboutLeftOffs(aboutOffLeft);
        setAboutRightOffs(aboutOffRight);
        setAboutBottomOffs(aboutOffBottom);
      }
    }

    if (about === "experience") {
      const parentWidth = expParentRef.current.clientWidth;
      const parentHeight = expParentRef.current.clientHeight;
      for (var i = 0; i < expImgs.length; i++) {
        if (expRefs.current[i].current) {
          expOffTop.push(expRefs.current[i].current.offsetTop);
          expOffLeft.push(expRefs.current[i].current.offsetLeft);

          expOffRight.push(
            parentWidth -
              (expRefs.current[i].current.clientWidth + expOffLeft[i])
          );
          expOffBottom.push(
            parentHeight -
              (expRefs.current[i].current.clientHeight + expOffTop[i])
          );
          console.log(expOffBottom);
        } else {
          return;
        }
      }
      if (expImgs.length > 0) {
        setExpTopOffs(expOffTop);
        setExpLeftOffs(expOffLeft);
        setExpRightOffs(expOffRight);
        setExpBottomOffs(expOffBottom);
      }
    }

    if (about === "education") {
      const parentWidth = eduParentRef.current.clientWidth;
      const parentHeight = eduParentRef.current.clientHeight;
      for (var i = 0; i < eduImgs.length; i++) {
        if (eduRefs.current[i].current) {
          eduOffTop.push(eduRefs.current[i].current.offsetTop);
          eduOffLeft.push(eduRefs.current[i].current.offsetLeft);

          eduOffRight.push(
            parentWidth -
              (eduRefs.current[i].current.clientWidth + eduOffLeft[i])
          );
          eduOffBottom.push(
            parentHeight -
              (eduRefs.current[i].current.clientHeight + eduOffTop[i])
          );
          console.log(eduOffBottom);
        } else {
          return;
        }
      }
      if (eduImgs.length > 0) {
        setEduTopOffs(eduOffTop);
        setEduLeftOffs(eduOffLeft);
        setEduRightOffs(eduOffRight);
        setEduBottomOffs(eduOffBottom);
      }
    }
  }, [about]);

  //Active tab
  useEffect(() => {
    switch (activeAbout) {
      case 1:
        setAbout("aboutMe");
        break;
      case 2:
        setAbout("experience");
        break;
      case 3:
        setAbout("education");
        break;
      case 4:
        setAbout("skills");
        break;
      default:
        setAbout("aboutMe");
        break;
    }
  }, [activeAbout]);

  const nextAboutHandler = () => {
    if (activeAbout < 4) {
      setActiveAbout(activeAbout + 1);
    } else if (activeAbout === 4) {
      setActiveAbout(1);
    }
  };
  const prevAboutHandler = () => {
    if (activeAbout > 1) {
      setActiveAbout(activeAbout - 1);
    } else if (activeAbout === 1) {
      setActiveAbout(4);
    }
  };

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
      className="px-2 py-10 sm:px-5 md:py-20 md:px-20 "
      id="about"
    >
      <div className="page-width">
        <h2 className="mb-10 text-center">About</h2>
        <div className="flex flex-col gap-10 md:gap-20 md:flex-row">
          <div className="relative flex flex-row flex-wrap justify-between md:justify-center md:space-y-4 md:flex-col">
            <div
              className={`${
                about === "aboutMe"
                  ? "top-[33%] w-[77px]"
                  : about === "experience"
                  ? "top-[50%] w-[86px]"
                  : about === "education"
                  ? "top-[67%]  w-[80px]"
                  : about === "skills"
                  ? "top-[84%] w-[38px] "
                  : ""
              } absolute h-[2px] bg-white transition-all left-0 duration-300 md:block hidden`}
            ></div>
            <div
              className={`${
                about === "aboutMe"
                  ? "left-0 w-[70px]"
                  : about === "experience"
                  ? "left-[30%] w-[75px]"
                  : about === "education"
                  ? "left-[61.5%]  w-[70px]"
                  : about === "skills"
                  ? "left-[92%] w-[30px] "
                  : ""
              } absolute h-[2px] bg-white transition-all left-0 duration-300 top-[90%] md:hidden block`}
            ></div>
            <p
              onClick={() => {
                setAbout("aboutMe");
                setActiveAbout(1);
              }}
              className="link w-fit"
            >
              About me
            </p>
            <p
              onClick={() => {
                setAbout("experience");
                setActiveAbout(2);
              }}
              className="link w-fit"
            >
              Experience
            </p>
            <p
              onClick={() => {
                setAbout("education");
                setActiveAbout(3);
              }}
              className="link w-fit"
            >
              Education
            </p>
            <p
              onClick={() => {
                setAbout("skills");
                setActiveAbout(4);
              }}
              className="link w-fit"
            >
              Skills
            </p>
          </div>
          <div className="w-px md:block hidden bg-[#A5A5A5] h-[232px]"></div>
          <div className="relative w-full col-span-2 my-auto sm:min-h-0 h-[270px] ">
            {about === "aboutMe" && (
              <div
                ref={aboutParentRef}
                className="h-[232px] gap-10 relative rounded flex items-center"
              >
                <p className="z-20 p-5 pointer-events-none select-none">
                  Hey there, my name is Mike and I&apos;m just your average
                  software engineering student at Amsterdam University of
                  Applied Sciences. But don&apos;t let the textbooks fool you,
                  I&apos;m not just a nerd - I&apos;m a web development nerd
                  with a passion for all things front-end. In fact, I&apos;m so
                  good with JavaScript that I&apos;ve earned the title of
                  &apos;JavaScript Ninja&apos; (or at least that&apos;s what my
                  dad calls me). I&apos;m basically a black belt in code and a
                  master of modern frameworks...or at least that&apos;s what I
                  tell myself while I&apos;m coding at 3am on a Sunday morning.
                </p>
                {aboutImgs.map((item, i) => (
                  <motion.div
                    key={i}
                    ref={aboutRefs.current[i]}
                    style={{
                      top: `${aboutTopPos[i]}%`,
                      left: `${aboutLeftPos[i]}%`,
                    }}
                    drag
                    dragElastic={0.05}
                    whileDrag={{ cursor: "grabbing" }}
                    dragConstraints={{
                      left: aboutLeftOffs ? -aboutLeftOffs[i] : 0,
                      top: aboutTopOffs ? -aboutTopOffs[i] : 0,
                      right: aboutRightOffs ? aboutRightOffs[i] : 0,
                      bottom: aboutBottomOffs ? aboutBottomOffs[i] : 0,
                    }}
                    className="absolute w-[100px] h-[140px] z-10 hidden md:block cursor-grab"
                  >
                    <div className="absolute z-10 w-full h-full bg-black opacity-40"></div>
                    <div className="relative z-0 w-full h-full">
                      <Image
                        src={`/images/${item}`}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={`/images/${item}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {about === "experience" && (
              <div
                ref={expParentRef}
                className="h-[270px] flex flex-col justify-center"
              >
                <div className="border-b border-[#A5A5A5] flex justify-between pb-2 z-30 pointer-events-none select-none">
                  <div>
                    <h3>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.flatlineagency.com/"
                      >
                        Flatline Agency
                      </a>
                    </h3>
                    <h4>Junior frontend developer</h4>
                  </div>
                  <div>05.2022 / Now</div>
                </div>
                {expImgs.map((item, i) => (
                  <motion.div
                    key={i}
                    ref={expRefs.current[i]}
                    style={{
                      top: `${expTopPos[i]}%`,
                      left: `${expLeftPos[i]}%`,
                    }}
                    drag
                    dragElastic={0.05}
                    whileDrag={{ cursor: "grabbing" }}
                    dragConstraints={{
                      left: -expLeftOffs[i],
                      top: -expTopOffs[i],
                      right: expRightOffs[i],
                      bottom: expBottomOffs[i],
                    }}
                    className="absolute w-[230px] h-[140px] z-10 hidden md:block cursor-grab"
                  >
                    <div className="absolute z-10 w-full h-full bg-black opacity-40"></div>
                    <div className="relative z-0 w-full h-full">
                      <Image
                        src={`/images/${item}`}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={`/images/${item}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            {about === "education" && (
              <div
                ref={eduParentRef}
                className="h-[270px] flex flex-col justify-center"
              >
                <div className="border-b z-30 border-[#A5A5A5] flex justify-between pointer-events-none select-none pb-2 mb-4">
                  <div>
                    <h3>Software engineering</h3>
                    <h4>Amsterdam University of Applied Science</h4>
                  </div>
                  <div>09.2022 / Now</div>
                </div>
                <div className="border-b border-[#A5A5A5] flex justify-between pointer-events-none select-none pb-2 z-30 mb-4">
                  <div>
                    <h3>Software developer</h3>
                    <h4>ROC Horizon College</h4>
                  </div>
                  <div>08.2019 / 05.2022 </div>
                </div>
                <div className="border-b border-[#A5A5A5] flex justify-between pointer-events-none select-none z-30 pb-2">
                  <div>
                    <h3>IT and media management</h3>
                    <h4>ROC Horizon College</h4>
                  </div>
                  <div>08.2018 / 05.2019</div>
                </div>
                {eduImgs.map((item, i) => (
                  <motion.div
                    key={i}
                    ref={eduRefs.current[i]}
                    style={{
                      top: `${eduTopPos[i]}%`,
                      left: `${eduLeftPos[i]}%`,
                    }}
                    drag
                    dragElastic={0.05}
                    whileDrag={{ cursor: "grabbing" }}
                    dragConstraints={{
                      left: -eduLeftOffs[i],
                      top: -eduTopOffs[i],
                      right: eduRightOffs[i],
                      bottom: eduBottomOffs[i],
                    }}
                    className="absolute w-[200px] h-[110px] z-10 hidden md:block cursor-grab"
                  >
                    <div className="absolute z-10 w-full h-full bg-black opacity-40"></div>
                    <div className="relative z-0 w-full h-full">
                      <Image
                        src={`/images/${item}`}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={`/images/${item}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            {about === "skills" && (
              <>
                <div
                  ref={parentRef}
                  className={`h-[232px] gap-10 bg-[#181818] relative rounded `}
                >
                  {skillsData.map((skill, i) => (
                    <motion.div
                      key={i}
                      ref={lineRefs.current[i]}
                      style={{
                        top: `${topPos[i]}%`,
                        left: `${leftPos[i]}%`,
                      }}
                      drag
                      dragElastic={0.05}
                      whileDrag={{ cursor: "grabbing" }}
                      dragConstraints={{
                        left: -leftOffs[i],
                        top: -topOffs[i],
                        right: rightOffs[i],
                        bottom: bottomOffs[i],
                      }}
                      className="absolute flex items-center gap-1 cursor-grab"
                    >
                      <div
                        style={{ background: skill.color }}
                        className="w-6 h-6 bg-white rounded-sm "
                      >
                        <Icon
                          iconClass="w-full h-full p-[2px]"
                          iconName={skill.logo}
                        />
                      </div>
                      <p>{skill.title}</p>
                    </motion.div>
                  ))}
                </div>
                <p className="absolute right-0  -bottom-6 text-[12px]  flex justify-center items-center gap-2">
                  <AiOutlineArrowUp className="animate-bounce" /> Drag &amp;
                  play around
                </p>
              </>
            )}
          </div>
        </div>
        <div
          ref={ref}
          className="flex gap-10 md:gap-5 md:ml-[15.5rem] mx-auto md:mx-0 mt-5 w-fit"
        >
          <button
            onClick={prevAboutHandler}
            className="relative gap-20 p-4 bg-white rounded-full w-fit link group glass bg-opacity-5"
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
                cx="24"
                cy="24"
                r="23.5"
                stroke="white"
                initial="hidden"
                animate={inView ? "shown" : "hidden"}
                variants={pathVariants}
              />
            </svg>
          </button>
          <button
            onClick={nextAboutHandler}
            className="relative gap-20 p-4 bg-white rounded-full w-fit link group glass bg-opacity-5"
          >
            <AiOutlineArrowRight className="transition-transform group-hover:scale-[1.1]" />
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 rotate-180"
            >
              <motion.circle
                cx="24"
                cy="24"
                r="23.5"
                stroke="white"
                initial="hidden"
                animate={inView ? "shown" : "hidden"}
                variants={pathVariants}
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
