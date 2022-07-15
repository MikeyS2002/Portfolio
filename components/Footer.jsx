import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { OffsetContext } from "../contexts/OffsetContext";
import CustomTooltip from "./CustomTooltip";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  ResponsiveContainer,
  AreaChart,
} from "recharts";

export default function Footer() {
  const [clock, setClock] = useState();
  const { contributionsState } = useContext(OffsetContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const constributionArr = contributionsState.slice(-1 * 21);
    const dataArr = [];
    constributionArr.forEach((item, i) => {
      dataArr.push({
        contributions: item,
        week: i !== 20 ? `${20 - i} weeks ago` : "This week",
      });
    });
    console.log(dataArr);
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
      <div className="flex flex-col justify-between gap-5 page-width md:flex-row">
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
          <ul className="flex gap-5">
            <li className="cursor-pointer">
              <a>Github</a>
            </li>
            <li className="cursor-pointer">
              <a>LinkedIn</a>
            </li>
          </ul>
        </div>

        <ul className="">
          <li className="w-[300px]">
            <ResponsiveContainer width="100%" height={150}>
              <AreaChart data={data}>
                <Area
                  dataKey="contributions"
                  stroke="#ffffff"
                  fill="transparent"
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
          </li>
        </ul>
      </div>
    </footer>
  );
}
