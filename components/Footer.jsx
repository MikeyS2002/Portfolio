import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { OffsetContext } from "../contexts/OffsetContext";
import CustomTooltip from "./CustomTooltip";
import { useInView } from "react-intersection-observer";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
  AreaChart,
} from "recharts";

export default function Footer() {
  const [clock, setClock] = useState();
  const { contributionsState } = useContext(OffsetContext);
  const [data, setData] = useState([]);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    const constributionArr = contributionsState.slice(-1 * 21);
    const dataArr = [];
    constributionArr.forEach((item, i) => {
      dataArr.push({
        contributions: item,
        week: i !== 20 ? `${20 - i} weeks ago` : "This week",
      });
    });
    setData(dataArr);
  }, [contributionsState]);

  useEffect(() => {
    setInterval(() => {
      const date = new Date().toLocaleString("en-US", {
        timeZone: "Europe/Amsterdam",
        timeStyle: "medium",
        hourCycle: "h24",
      });
      setClock(date);
    }, 1000);
  }, []);

  return (
    <footer className="border-t  border-[#A5A5A5] px-5 md:px-20 py-10 ">
      <div className="flex flex-col justify-between gap-10 page-width md:flex-row">
        <div className="flex flex-col justify-between">
          <ul>
            <li>
              <h3>Mike Schaper</h3>
            </li>
            <li>
              <p>Amserdam, Netherlands</p>
            </li>
            <li>
              <p>CEST {clock}</p>
            </li>
            <li>
              <p>+31 624 4312 74</p>
            </li>
          </ul>
          <ul className="hidden gap-5 overflow-hidden md:flex">
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 10 },
              }}
              className="cursor-pointer"
            >
              <a>Github</a>
            </motion.li>
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 10 },
              }}
              className="cursor-pointer"
            >
              <a>LinkedIn</a>
            </motion.li>
          </ul>
        </div>
        {contributionsState.length !== 0 && (
          <ul className="">
            <li className="justify-end mb-4 md:mb-2 md:flex">
              <h5>Github contributions last 20 weeks:</h5>
            </li>
            <motion.li
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 10 },
              }}
              className="md:w-[400px] h-[150px] md:translate-x-0 md:scale-100 -translate-x-6 scale-110 md:translate-y-3"
            >
              {inView && (
                <ResponsiveContainer width="100%" height={150}>
                  <AreaChart data={data}>
                    <Area
                      dataKey="contributions"
                      stroke="#ffffff"
                      fill="transparent"
                      isAnimationActive={true}
                    />
                    <XAxis dataKey="week" opacity={0.2} stroke="white" />
                    <YAxis
                      dataKey="contributions"
                      tickCount={4}
                      opacity={0.2}
                      stroke="white"
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <CartesianGrid opacity={0.2} vertical={false} />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </motion.li>
          </ul>
        )}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 10 },
          }}
          className="flex gap-5 md:hidden"
        >
          <li className="cursor-pointer">
            <a>Github</a>
          </li>
          <li className="cursor-pointer">
            <a>LinkedIn</a>
          </li>
        </motion.ul>
      </div>
    </footer>
  );
}
