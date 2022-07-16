import React, { useState, useRef, useEffect, createRef } from "react";
import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
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

const About = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const { scrollYProgress } = useViewportScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const [about, setAbout] = useState("aboutMe");
  const [activeAbout, setActiveAbout] = useState(1);
  const [topPos, setTopPos] = useState([]);
  const [leftPos, setLeftPos] = useState([]);
  const [topOffs, setTopOffs] = useState([]);
  const [leftOffs, setLeftOffs] = useState([]);
  const [rightOffs, setRightOffs] = useState([]);
  const [bottomOffs, setBottomOffs] = useState([]);

  const lineRefs = useRef([]);
  const parentRef = useRef();

  const top = [];
  const left = [];
  const offTop = [];
  const offLeft = [];
  const offRight = [];
  const offBottom = [];

  useEffect(() => {
    for (var i = 0; i < skillsData.length; i++) {
      top.push(Math.floor(Math.random() * (90 - 1 + 1) + 1));
      left.push(Math.floor(Math.random() * (70 - 1 + 1) + 1));
    }
    setTopPos(top);
    setLeftPos(left);
  }, []);

  useEffect(() => {
    lineRefs.current = skillsData.map(
      (_, i) => lineRefs.current[i] ?? createRef()
    );
  }, []);

  useEffect(() => {
    if (about === "skills") {
      const parentWidth = parentRef.current.clientWidth;
      const parentHeight = parentRef.current.clientHeight;
      for (var i = 0; i < skillsData.length; i++) {
        offTop.push(lineRefs.current[i].current.offsetTop);
        offLeft.push(lineRefs.current[i].current.offsetLeft);
        //console.log(parentWidth);
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
  }, [about]);

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
      className="px-2 py-10 sm:px-5 md:py-20 md:px-20 page-width"
      id="about"
    >
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
        <div className="relative w-full col-span-2 my-auto sm:min-h-auto min-h-[270px]">
          {about === "aboutMe" && (
            <>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
                ab non. Pariatur unde iusto, deleniti sit vitae fugit debitis!
                Magnam impedit provident aut sapiente expedita reprehenderit
                corporis omnis.
                <br />
                <br /> Doloremque reiciendis est sequi ut ad dolores, sunt modi
                nam temporibus possimus excepturi praesentium obcaecati qui
                corporis nisi facilis rem perspiciatis ipsa!
              </p>
              <motion.div
                style={{ y: y1 }}
                className="absolute top-0 right-0 w-[150px] h-[200px] -z-10 hidden md:block"
              >
                <div className="absolute z-10 w-full h-full bg-black opacity-40"></div>
                <div className="relative z-0 w-full h-full rounded oveflow-hidden ">
                  <Image
                    src="/images/mikeschaper.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/images/mikeschaper.jpg"
                  />
                </div>
              </motion.div>
              <motion.div
                style={{ y: y2 }}
                className="absolute -bottom-[120px] right-[60%] -z-10  w-[180px] h-[130px] hidden md:block"
              >
                <div className="absolute z-10 w-full h-full bg-black opacity-40"></div>
                <div className="relative z-0 w-full h-full rounded oveflow-hidden">
                  <Image
                    src="/images/callie.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/images/callie.png"
                  />
                </div>
              </motion.div>
              <motion.div
                style={{ y: y3 }}
                className="absolute -bottom-[80px] right-[55%] -z-10 w-[100px] h-[160px] hidden md:block"
              >
                <div className="absolute z-10 w-full h-full bg-black opacity-40"></div>
                <div className="relative z-0 w-full h-full rounded oveflow-hidden ">
                  <Image
                    src="/images/callie2.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="z-10"
                    placeholder="blur"
                    blurDataURL="/images/callie2.jpg"
                  />
                </div>
              </motion.div>
            </>
          )}
          {about === "experience" && (
            <>
              <div className="border-b border-[#A5A5A5] flex justify-between pb-2">
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
              <motion.div
                style={{ y: y1 }}
                className="absolute hidden md:block -bottom-[100px] right-[45%] -z-10  w-[230px] h-[140px]"
              >
                <div className="absolute z-10 w-full h-full bg-black opacity-40"></div>
                <div className="relative z-0 w-full h-full rounded oveflow-hidden">
                  <Image
                    src="/images/flatline.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/images/flatline.jpg"
                  />
                </div>
              </motion.div>
            </>
          )}
          {about === "education" && (
            <>
              <div className="border-b border-[#A5A5A5] flex justify-between pb-2 mb-4">
                <div>
                  <h3>Software engineering</h3>
                  <h4>Amsterdam University of Applied Science</h4>
                </div>
                <div>09.2022 / Now</div>
              </div>
              <div className="border-b border-[#A5A5A5] flex justify-between pb-2 mb-4">
                <div>
                  <h3>Software developer</h3>
                  <h4>ROC Horizon College</h4>
                </div>
                <div>08.2019 / 05.2022 </div>
              </div>
              <div className="border-b border-[#A5A5A5] flex justify-between pb-2">
                <div>
                  <h3>IT and media management</h3>
                  <h4>ROC Horizon College</h4>
                </div>
                <div>08.2018 / 05.2019</div>
              </div>
              <motion.div
                style={{ y: y2 }}
                className="absolute top-[30px] hidden md:block right-[10%] -z-10  w-[200px] h-[110px]"
              >
                <div className="absolute z-10 w-full h-full bg-black opacity-40"></div>
                <div className="relative z-0 w-full h-full rounded oveflow-hidden">
                  <Image
                    src="/images/hva.jpeg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/images/hva.jpeg"
                  />
                </div>
              </motion.div>
              <motion.div
                style={{ y: y1 }}
                className="absolute -bottom-[80px] hidden md:block left-[35%] -z-10  w-[230px] h-[140px]"
              >
                <div className="absolute z-10 w-full h-full bg-black opacity-40"></div>
                <div className="relative z-0 w-full h-full rounded oveflow-hidden">
                  <Image
                    src="/images/horizon.jpeg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/images/hva.jpeg"
                  />
                </div>
              </motion.div>
            </>
          )}
          {about === "skills" && (
            <motion.div
              animate={{ opacity: 1 }}
              inital={{ opacity: 0 }}
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
                  className="absolute flex items-center gap-1 link"
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
            </motion.div>
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
    </motion.section>
  );
};

export default About;
