import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";
import { gql as gql2, GraphQLClient } from "graphql-request";
import Icon from "../components/Icon";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { OffsetContext } from "../contexts/OffsetContext";
import SliderButtons from "../components/SliderButtons";
import { BsLink45Deg } from "react-icons/bs";
import { AiOutlineBranches } from "react-icons/ai";

const container = {
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 0.3,
  },
};

const Details = ({ project }) => {
  const { offset } = useContext(OffsetContext);
  const {
    bannerImage,
    title,
    date,
    index,
    skills,
    typeProject,
    blackOverlayText,
    content,
    slider,
    websiteUrl,
    githubRepo,
  } = project.project;
  const [topPos, setTopPos] = useState([]);
  const [rightPos, setRightPos] = useState([]);

  const top = [];
  const right = [];

  useEffect(() => {
    skills.forEach((item) => {
      top.push(Math.floor(Math.random() * (100 - -100 + 1) + -100));
      right.push(Math.floor(Math.random() * (100 - -100 + 1) + -100));
    });
    setTopPos(top);
    setRightPos(right);
  }, []);

  return (
    <>
      <Head>
        <title>Mike | {title}</title>
        <meta
          name="description"
          content={`Hi, my name is Mike, I am currently studying software
                  engineering at Amsterdam University of Applied Science. In this page I will show you about the ${title} project.`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex justify-center ">
        <div className="absolute top-0 right-0 w-[100%] h-[50vh] overflow-hidden">
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="relative "
          >
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                variants={item}
                style={{
                  background: skill.color,
                  top: topPos[i],
                  right: rightPos[i],
                }}
                className={`absolute  rounded-full opacity-30 h-64 w-64 md:w-80 md:h-80 filter blur-xl -translate-y-1/2 blob${
                  i + 1
                } `}
              ></motion.div>
            ))}
          </motion.div>
        </div>

        <div
          style={{ top: offset === 0 ? `29%` : `${offset - 174}px` }}
          className="absolute hidden overflow-hidden -translate-x-1/2 md:block left-1/2 w-fit"
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

        <div className="absolute overflow-hidden -translate-x-1/2 left-1/2 w-fit bottom-[51%] sm:top-[29%] px-2 sm:px-5">
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
                delay: 1.5,
              },
            }}
            className="text-[0.7rem] uppercase"
          >
            {date}
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
            {title}
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
              alt={title}
              priority
              objectFit="cover"
              src={bannerImage.url}
            />
            <motion.div
              animate={{
                opacity: 1,
                transition: { duration: 0.5, ease: "easeIn" },
              }}
              className="absolute z-20 px-4 py-2 duration-300 -translate-y-1/2 rounded opacity-0 top-1/2 left-5 "
            >
              <AiOutlineArrowDown className="text-[18px] animate-bounce mb-2" />
              <p className="text-[0.7rem] uppercase">
                Scroll <br /> for more
              </p>
            </motion.div>
            <motion.p
              animate={{
                opacity: 0,
                transition: { duration: 0.5, ease: "easeIn" },
              }}
              className={`${
                blackOverlayText ? "text-black" : ""
              } absolute z-30 px-4 py-2 transition-opacity duration-300 bg-white rounded glass top-5 left-5 bg-opacity-5 `}
            >
              0{index} / {title}
            </motion.p>
            <motion.div
              animate={{
                opacity: 0,
                transition: { duration: 0.5, ease: "easeIn" },
              }}
              className="absolute z-30 flex gap-5 bottom-5 left-5"
            >
              {skills.map((skill, i) => (
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
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-[100vh] project-slider max-w-[1600px] mx-aut0 md:py-20 md:px-10 px-2 sm:px-5 py-10">
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
        </div>
      </section>
    </>
  );
};

export default Details;

const PATHS_QUERY = gql2`
  query MyQuery {
    allProjects {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const endpoint = "https://graphql.datocms.com/";
  const graphqlClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/js",
      authorization: "bearer " + process.env.CMS_API_KEY,
    },
  });
  const slugQuery = await graphqlClient.request(PATHS_QUERY);
  let paths = [];
  slugQuery.allProjects.map((p) => paths.push(`/${p.slug}`));

  return {
    paths,

    fallback: false,
  };
}

const query = gql2`
  query MyQuery($slug: String!) {
    project(filter: { slug: { eq: $slug } }) {
      slug
      title
      skills
      githubRepo
      typeProject
      index
      slider {
        url
      }
      websiteUrl
      content(markdown: true)
      bannerImage {
        url
      }
      date
      blackOverlayText
    }
  }
`;

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const endpoint = "https://graphql.datocms.com/";
  const graphqlClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/js",
      authorization: "bearer " + process.env.CMS_API_KEY,
    },
  });

  const project = await graphqlClient.request(query, { slug });

  return {
    props: {
      project,
    },
  };
}
