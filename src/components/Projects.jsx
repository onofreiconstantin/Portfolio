import React, { useRef } from "react";
import useCheckVisible from "../hooks/useCheckVisible";
import othersImage from "../resources/img/othersImage.jpg";
import portfolioImage from "../resources/img/portfolioImage.png";
import transportImage from "../resources/img/transportImage.jpg";
import { ReactComponent as GitHubIcon } from "../resources/svg/github.svg";
import { ReactComponent as LinkIcon } from "../resources/svg/link.svg";
import backgroundVideo from "../resources/video/backgroundVideo.mp4";

const Projects = () => {
  const parentRef = useRef(null);
  const { animateElement } = useCheckVisible(parentRef);

  const projectsData = [
    {
      id: 0,
      image: portfolioImage,
      name: "Portfolio",
      link: "https://portfolio-oc.netlify.app/",
      github: "https://github.com/Onofrei-Constantin/Portfolio",
      description:
        "It's my most recent work and my best in terms of styling. Here is where I tried to show what I learned in the past month in CSS, SCSS, and more.",
    },
    {
      id: 1,
      image: transportImage,
      name: "Web platform for local public transport",
      link: "https://licenta-onofrei-constantin.netlify.app/",
      github:
        "https://github.com/Onofrei-Constantin/Web-platform-for-local-public-transport",
      description: `This was my first "big" project, and it's the place where I fell in love with React. It was the topic for my license in computer science and I learned a lot of things like CSS, HTML, JavaScrip, and how React works.`,
    },
    {
      id: 2,
      image: othersImage,
      name: "Others",
      description:
        "I worked on other little projects,  based on JavsScript, React, or Next.",
    },
  ];

  return (
    <section className="section-projects" ref={parentRef}>
      <div className="projects">
        <video className="projects__video" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          Here is a nice background video!
        </video>
        <div className="projects__wrapper">
          <div className="projects__header">
            <h2
              className={`heading-secondary ${
                animateElement && "rightToLeft u-animation-delay"
              }`}
            >
              Projects
            </h2>
          </div>
          <div
            className={`projects__container ${
              animateElement && "bottomToTop u-animation-delay"
            }`}
          >
            {projectsData.map((projectData) => {
              return (
                <figure className="figure" key={projectData.id}>
                  <div className="figure__img">
                    <img
                      src={projectData.image}
                      alt={projectData.name}
                      className="figure__img--content"
                    />
                  </div>
                  <figcaption className="figure__content">
                    <p className="paragraph u-paragraph-projects">
                      {projectData.name}
                    </p>
                    <p className="paragraph u-hyphens">
                      {projectData.description}
                    </p>
                    <div className="figure__content--buttons">
                      {projectData.hasOwnProperty("github") && (
                        <a
                          href={projectData.github}
                          target="_blank"
                          className="figure__content--button"
                        >
                          <GitHubIcon />
                        </a>
                      )}
                      {projectData.hasOwnProperty("link") && (
                        <a
                          href={projectData.link}
                          target="_blank"
                          className="figure__content--button"
                        >
                          <LinkIcon />
                        </a>
                      )}
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
