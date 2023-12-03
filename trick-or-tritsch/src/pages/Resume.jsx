import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiMongodb } from "react-icons/di";
import { SiHandlebarsdotjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiMicrosoftoffice } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { PiVinylRecordLight } from "react-icons/pi";
import { FaWordpress } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { SiAdobeindesign } from "react-icons/si";

















const Resume = () => {
  const onButtonClick = () => {
    const pdfUrl = "mtritsch-resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Tritsch-Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <div className="resume-div">
      <h1 className="page-name">Resume</h1>
      <button className="resume-btn btn btn-outline-primary" onClick={onButtonClick}>
        Download PDF
      </button>
      <div className="resume-items-div">
        <div className="tech-stack-list">
          <h2>Tech Stack</h2>
          <ul>
            <li>
            <IoLogoJavascript />
              JavaScript
            </li>
            <li>
            <SiExpress />
              Express.js
            </li>
            <li>
            <FaNode />
              Node.js
            </li>
            <li>
            <DiJqueryLogo />
              jQuery
            </li>
            <li>
            <FaHtml5 />
              HTML5
            </li>
            <li>
            <FaCss3 />
              CSS3
            </li>
            <li>
            <FaBootstrap />
              Bootstrap
            </li>
            <li>
            <SiHandlebarsdotjs />
              Handlebars
            </li>
            <li>
            <FaReact />
              React.js
            </li>
            <li>
            <GrMysql />
              mySQL
            </li>
            <li>
            <DiMongodb />
              noSQL/MongoDB
            </li>
          </ul>
          <div className="pro-tech-list">
            <h2>Professional Tech</h2>
            <ul>
              <li>
              <SiMicrosoftoffice />
                Microsoft 365
              </li>
              <li>
              <FaGoogle />
                Google Suite
              </li>
              <li>
              <PiVinylRecordLight />
                Logic Pro X
              </li>
              <li>
              <FaWordpress />
                WordPress
              </li>
              <li>
              <FaComputer />
                Mac & PC
              </li>
              <li>
              <SiAdobeindesign />
                Adobe InDesign
              </li>
            </ul>
          </div>
        </div>
        <div className="education">
          <h2>Education</h2>
          <div className="cu-denver">
            <h3>The University of Colorado Denver</h3>
              <p>B.S. | Music Business</p>
          </div>
          <div className="uta">
            <h3>The University of Texas at Austin</h3>
              <p>Certificate | Full-Stack Web Development</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume