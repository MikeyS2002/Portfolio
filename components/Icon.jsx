import React from "react";
import {
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoSass,
} from "react-icons/io";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiDotnet,
  SiGraphql,
  SiShopify,
  SiThreedotjs,
  SiGreensock,
  SiVite,
  SiJava,
} from "react-icons/si";

const Icon = ({ iconName, iconClass }) => {
  if (iconName === "IoLogoCss3") {
    return <IoLogoCss3 className={iconClass} />;
  } else if (iconName === "IoLogoJavascript") {
    return <IoLogoJavascript className={iconClass} />;
  } else if (iconName === "IoLogoHtml5") {
    return <IoLogoHtml5 className={iconClass} />;
  } else if (iconName === "IoLogoSass") {
    return <IoLogoSass className={iconClass} />;
  } else if (iconName === "FaReact") {
    return <FaReact className={iconClass} />;
  } else if (iconName === "SiNextdotjs") {
    return <SiNextdotjs className={`${iconClass} text-black`} />;
  } else if (iconName === "SiTailwindcss") {
    return <SiTailwindcss className={iconClass} />;
  } else if (iconName === "SiDotnet") {
    return <SiDotnet className={iconClass} />;
  } else if (iconName === "SiGraphql") {
    return <SiGraphql className={iconClass} />;
  } else if (iconName === "SiShopify") {
    return <SiShopify className={iconClass} />;
  } else if (iconName === "SiThreedotjs") {
    return <SiThreedotjs className={`${iconClass} text-black`} />;
  } else if (iconName === "SiVite") {
    return <SiVite className={`${iconClass}`} />;
  } else if (iconName === "SiGreensock") {
    return <SiGreensock className={`${iconClass}`} />;
  } else if (iconName === "SiShopify") {
    return <SiShopify className={`${iconClass}`} />;
  } else if (iconName === "SiJava") {
    return <SiJava className={`${iconClass}`} />;
  } else {
    return;
  }
};

export default Icon;
