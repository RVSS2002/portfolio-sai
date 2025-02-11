import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";

const ResumePDF = "https://onedrive.live.com/?cid=A78032EFF805EB1E&id=A78032EFF805EB1E%21sad75b53c45634430a1605b47a537a859&parId=root&o=OneUp"

const About = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.download = "file:///C:/Users/HP/Downloads/sai%20resume.pdf";
    link.click();
  };

  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            I am <b>Venkata Siva Sai Ramanadam</b>, currently pursuing a Master’s degree at MBU,
            Aspiring <b>Frontend Developer </b>with a strong foundation in<b> computer sciencea</b>nd hands-on experience in software development. 
            Completed an internship specializing in<b>advanced Python</b>, gaining expertise in complex scripting, data manipulation, and backend integration. Skilled in<b> HTML, CSS, JavaScript, and React</b>, 
            with a focus on creating responsive and engaging user interfaces. 
            Passionate about building innovative frontend solutions in a dynamic tech environment.


          </p>


          <button onClick={downloadResume} className="resume-btn">
            Download Resume <FaFileDownload />
          </button>
        </div>
      </div>

      <h1 className="SkillsHeading">Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Javascript" />
        <Skills skill="React JS" />
        <Skills skill="Github" />
        <Skills skill="Python" />
        <Skills skill="MYSQL" />
        <Skills skill="JAVA" />

      </div>
    </>
  );
};

export default About;
