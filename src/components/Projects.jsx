import React, { useRef } from "react";
import useCheckVisible from "../hooks/useCheckVisible";
import othersImage from "../resources/img/othersImage.jpg";
import portfolioImage from "../resources/img/portfolioImage.png";
import transportImage from "../resources/img/transportImage.png";

const Projects = () => {
  const parentRef = useRef(null);
  const { isVisible } = useCheckVisible(parentRef);

  const projectsData = [
    {
      id: 0,
      image: portfolioImage,
      name: "Portfolio",
      link: "",
      github: "",
    },
    {
      id: 1,
      image: transportImage,
      name: "Web platform for local public transport",
      link: "https://licenta-onofrei-constantin.netlify.app/",
      github:
        "https://github.com/Onofrei-Constantin/Web-platform-for-local-public-transport",
    },
    {
      id: 2,
      image: othersImage,
      name: "Other",
    },
  ];

  return (
    <section className="section-projects" ref={parentRef}>
      <div className="projects">
        <div className="projects__header">
          <h2
            className={`heading-secondary u-heading-alternative ${
              isVisible && "rightToLeft u-animation-delay"
            }`}
          >
            Projects
          </h2>
        </div>
        <div
          className={`projects__container ${
            isVisible && "bottomToTop u-animation-delay"
          }`}
        ></div>
      </div>
    </section>
  );
};

export default Projects;
