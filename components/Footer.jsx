import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [clock, setClock] = useState();

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
          <li>
            <div className="flex items-center gap-1 ">
              <p>Github</p>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-1 ">
              <p>LinkedIn</p>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}
