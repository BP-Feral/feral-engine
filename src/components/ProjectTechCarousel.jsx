import React, { useEffect, useRef } from "react";
import "../styles/ProjectTechCarousel.css";

import AtlassianIcon from '../assets/icons/atlassian.svg';
import CppIcon from '../assets/icons/cpp.svg';
import CsharpIcon from '../assets/icons/csharp.svg';
import GitIcon from '../assets/icons/git.svg';
import GithubIcon from '../assets/icons/github.svg';
import HTML5Icon from '../assets/icons/html5.svg';
import JavaIcon from '../assets/icons/java.svg';
import JavaScriptIcon from '../assets/icons/javascript.svg';
import NodeJSIcon from '../assets/icons/nodejs.svg';
import NpmIcon from '../assets/icons/npm.svg';
import PhotoshopIcon from '../assets/icons/photoshop.svg';
import PyCharmIcon from '../assets/icons/pycharm.svg';
import PythonIcon from '../assets/icons/python.svg';
import ReactIcon from '../assets/icons/react.svg';
import SlackIcon from '../assets/icons/slack.svg';
import VSCodeIcon from '../assets/icons/vscode.svg';

const forwardTechs = [
    { name: 'Atlassian' , icon: AtlassianIcon },
    { name: 'C++' , icon: CppIcon },
    { name: 'C#' , icon: CsharpIcon },
    { name: 'Git' , icon: GitIcon },
    { name: 'Github' , icon: GithubIcon },
    { name: 'HTML5' , icon: HTML5Icon },
    { name: 'Java' , icon: JavaIcon },
    { name: 'JavaScript' , icon: JavaScriptIcon },
    { name: 'NodeJS' , icon: NodeJSIcon },
    { name: 'npm' , icon: NpmIcon },
    { name: 'Photoshop' , icon: PhotoshopIcon },
    { name: 'PyCharm' , icon: PyCharmIcon },
    { name: 'Python' , icon: PythonIcon },
    { name: 'React' , icon: ReactIcon },
    { name: 'Slack' , icon: SlackIcon },
    { name: 'VSCode' , icon: VSCodeIcon },
];

const ProjectTechCarousel = () => {
  const forwardRef = useRef(null);
  const pauseForwardRef = useRef(false);

  useEffect(() => {
    const forwardCarousel = forwardRef.current;
    if (!forwardCarousel) return;

    const duplicateWidth = forwardCarousel.scrollWidth / 3;
    forwardCarousel.scrollLeft = duplicateWidth;

    const scrollSpeed = 0.5;
    let animationId;

    const step = () => {
      if (!pauseForwardRef.current) {
        forwardCarousel.scrollLeft -= scrollSpeed;
        if (forwardCarousel.scrollLeft <= 0) {
          forwardCarousel.scrollLeft += duplicateWidth;
        }
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const renderTechBoxes = (techs) => {
    const tripled = [...techs, ...techs, ...techs];
    return tripled.map((tech, index) => (
      <div key={index} className="tech-box">
        <img src={tech.icon} alt={tech.name} />
        <span>{tech.name}</span>
      </div>
    ));
  };

  return (
    <div className="tech-carousel-wrapper">
      <div
        className="forward-carousel"
        ref={forwardRef}
        onMouseEnter={() => (pauseForwardRef.current = true)}
        onMouseLeave={() => (pauseForwardRef.current = false)}
      >
        {renderTechBoxes(forwardTechs)}
      </div>
    </div>
  );
};

export default ProjectTechCarousel;
