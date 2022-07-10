import React, { useState, useEffect } from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
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
    <footer className="border-t  border-[#A5A5A5] px-20 py-10 ">
      <div className="page-width">
        <ul>
          <li>Mike Schaper</li>
          <li>Amserdam, Netherlands</li>
          <li>CEST {clock}</li>
        </ul>
        <ul className="flex gap-5">
          <li>
            <div className="flex items-center gap-1 ">
              <div className="w-6 h-6 bg-white rounded-sm">
                <SiGithub className="w-full h-full p-[2px] text-[#171515]" />
              </div>
              <p>Github</p>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-1 ">
              <div className="w-6 h-6 bg-[#0A66C2] rounded-sm">
                <FaLinkedinIn className="w-full h-full p-[4px]" />
              </div>
              <p>LinkedIn</p>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
