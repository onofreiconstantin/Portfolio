import React, { useRef } from "react";
import useCheckVisible from "../hooks/useCheckVisible";
import portfolioImage from "../resources/img/portfolioImage.webp";
import ajandekbarLogo from "../resources/img/ajandekbarLogo.png";
import saptariiLogo from "../resources/img/saptariiLogo.webp";
import { ReactComponent as GitHubIcon } from "../resources/svg/github.svg";
import { ReactComponent as LinkIcon } from "../resources/svg/link.svg";
import backgroundVideo2 from "../resources/video/backgroundVideo.mp4";
import backgroundVideo1 from "../resources/video/backgroundVideo.webm";

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
        "One of my strongest projects from the start of my career in terms of styling. This work allowed me to demonstrate consolidated knowledge in CSS, SCSS, and modern frontend design.",
    },
    {
      id: 1,
      image: ajandekbarLogo,
      name: "AjándékBár – Gift Card E-commerce Platform",
      link: "https://ajandekbar.hu/",
      description:
        "Public gift card e-commerce platform with customer, admin, and partner portals. I worked full-stack across product flows, Stripe payments, APIs, and database logic.",
    },
    {
      id: 2,
      image: saptariiLogo,
      name: "Saptarii.ro – RDR2 Server Subscription Platform",
      link: "https://saptarii.ro/",
      description:
        "Community subscription platform for a Red Dead Redemption 2 server. I built key parts of the public site, subscriptions, Stripe payment logic, AWS S3 storage, the admin dashboard, and the interactive map.",
    },
  ];

  return (
    <section className="section-projects" ref={parentRef}>
      <div className="projects">
        <video className="projects__video" autoPlay loop muted preload="auto">
          <source src={backgroundVideo2} type="video/webm" />
          <source src={backgroundVideo1} type="video/mp4" />
          Your browser does not support the video tag.
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
