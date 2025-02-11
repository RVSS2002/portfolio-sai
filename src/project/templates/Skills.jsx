


import React from "react";
import { FaReact, FaGithub, FaHtml5, FaCss3, FaPython, FaJava } from "react-icons/fa";
import { DiJavascript1, DiMysql } from "react-icons/di";

const Skills = ({ skill }) => {
  // Convert skill prop to lowercase
  const lowercaseSkill = skill.toLowerCase();

  const icon = {
    html: <FaHtml5 />,
    css: <FaCss3 />,
    javascript: <DiJavascript1 />,
    python: <FaPython />,
    react: <FaReact />,
    github: <FaGithub />,
    java: <FaJava />,
    mysql: <DiMysql />,
  };

  const reactIcons = {
    js: <FaReact />, // Use the same React icon for React JS
    native: <FaReact />, // Use the same React icon for React Native
  };

  const getSkillIcon = () => {
    if (icon[lowercaseSkill]) {
      return icon[lowercaseSkill];
    } else if (lowercaseSkill === "react js") {
      return reactIcons.js;
    } else if (lowercaseSkill === "react native") {
      return reactIcons.native;
    } else {
      return null;
    }
  };

  return (
    <div title={skill} className="SkillBox">
      {getSkillIcon()}
    </div>
  );
};

export default Skills;
