import React, { useRef } from "react";
import useCheckVisible from "../hooks/useCheckVisible";
import cssLogo from "../resources/img/cssLogo.webp";
import gitLogo from "../resources/img/gitLogo.webp";
import htmlLogo from "../resources/img/htmlLogo.webp";
import javascriptLogo from "../resources/img/javascriptLogo.webp";
import languageLogo from "../resources/img/languageLogo.webp";
import muiLogo from "../resources/img/muiLogo.webp";
import nextLogo from "../resources/img/nextLogo.webp";
import nodeLogo from "../resources/img/nodeLogo.webp";
import otherSkillsLogo from "../resources/img/otherSkillsLogo.webp";
import reactLogo from "../resources/img/reactLogo.webp";
import scssLogo from "../resources/img/scssLogo.webp";
import tailwindLogo from "../resources/img/tailwindLogo.webp";

const Skills = () => {
  const parentRef = useRef(null);
  const { animateElement } = useCheckVisible(parentRef);

  const logosData = [
    {
      id: 0,
      logo: reactLogo,
      name: "React",
      skills: [
        "Decent amount of experience with versions 17 and 18",
        "Strong knowledge of state  management, props usage, and advanced hooks like useLayoutEffect, useCallback, useMemo, useContext, etcetera",
        "Understanding of custom hooks, and HOC components such as memo",
      ],
    },
    {
      id: 1,
      logo: nextLogo,
      name: "Next Js",
      skills: [
        "Limited experience with version 12",
        "A decent understanding of SSR and SSG and why they are so important for sites that use SEO",
        "Good knowledge of Link and Image components",
      ],
    },
    {
      id: 2,
      logo: javascriptLogo,
      name: "JavaScript",
      skills: [
        "Strong knowledge of advanced JavaScript and ES6 functions",
        "A decent understanding of the JavaScript object model including DOM manipulation",
      ],
    },
    {
      id: 3,
      logo: htmlLogo,
      name: "HTML",
      skills: [
        "A good understanding of HTML 5 elements and why are they so important for sites that use SEO",
      ],
    },
    {
      id: 4,
      logo: cssLogo,
      name: "CSS",
      skills: [
        "Strong knowledge of CSS properties, selectors, pseudo-classes, and pseudo-elements",
        "Good understanding of more advanced CSS properties like animations, keyframes, transform, transition, clip-path, etcetera",
        "The ability to create responsive designs for any device",
      ],
    },
    {
      id: 5,
      logo: scssLogo,
      name: "SCSS",
      skills: [
        "Excellent knowledge of core concepts such as variables, mixins, nesting, functions, and modular code",
      ],
    },
    {
      id: 6,
      logo: tailwindLogo,
      name: "Tailwind",
      skills: [
        "Limited experience with versions 2 and 3, with a good knowledge about the basic functions and classes",
      ],
    },
    {
      id: 7,
      logo: muiLogo,
      name: "MUI",
      skills: [
        "Decent amount of experience with versions 4 and 5",
        "The ability to style components using the sx property, classes, and the theme provider",
      ],
    },
    {
      id: 8,
      logo: gitLogo,
      name: "GIT",
      skills: [
        "Good knowledge of how to use it in a project with more than one person",
        "Limited experience with version control repositories like BitBucket and GitHub",
      ],
    },
    {
      id: 9,
      logo: nodeLogo,
      name: "NODE",
      skills: [
        "Very limited understanding of the framework Express Js, my only experience is from when I worked on my computer science license. I plan on becoming a Full Stack developer in the future",
      ],
    },
    {
      id: 10,
      logo: languageLogo,
      name: "English language skills",
      skills: [
        "Understanding the audible text: B1",
        "Understanding of the text read: B2",
        "Production of written messages: B2",
        "Production of oral messages: B2",
        "Oral interaction: B2",
      ],
    },
    {
      id: 11,
      logo: otherSkillsLogo,
      name: "Other skills",
      skills: [
        "Decent knowledge about how Formik works, including the creation of custom inputs that can be used in Form",
        "Good understanding of how YUP works, including the integration with Formik",
      ],
    },
  ];

  const rotateFront = (elementId, siblingId) => {
    const element = document.getElementById(elementId);
    element.style.transform = "rotateY(-180deg)";

    const sibling = document.getElementById(siblingId);
    sibling.style.transform = "rotateY(0deg)";
  };

  const rotateBack = (elementId, siblingId) => {
    const element = document.getElementById(elementId);
    element.style.transform = "rotateY(180deg)";

    const sibling = document.getElementById(siblingId);
    sibling.style.transform = "rotateY(0deg)";
  };

  const canHover = "ontouchstart" in window ? false : true;

  return (
    <section className="section-skills" ref={parentRef}>
      <div className="skills">
        <div className="skills__header">
          <h2
            className={`heading-secondary ${
              animateElement && "rightToLeft u-animation-delay"
            }`}
          >
            Skills
          </h2>
        </div>
        <div
          className={`skills__container ${
            animateElement && "bottomToTop u-animation-delay"
          }`}
        >
          {logosData.map((logoData) => {
            return (
              <div className="card" key={logoData.id}>
                <div
                  className={`card__front ${canHover && "u-no-pointer-events"}`}
                  id={`card-front-${logoData.id}`}
                  onClick={() =>
                    rotateFront(
                      `card-front-${logoData.id}`,
                      `card-back-${logoData.id}`
                    )
                  }
                >
                  <div className="card__logo">
                    <img
                      src={logoData.logo}
                      alt={logoData.name}
                      className="card__logo--content"
                    />
                  </div>
                  <div className="card__header">
                    <h3 className="heading-tertiary u-center-text">
                      {logoData.name}
                    </h3>
                  </div>
                </div>
                <div
                  className={`card__back ${canHover && "u-no-pointer-events"}`}
                  id={`card-back-${logoData.id}`}
                  onClick={() =>
                    rotateBack(
                      `card-back-${logoData.id}`,
                      `card-front-${logoData.id}`
                    )
                  }
                >
                  <h3 className="heading-tertiary u-center-text">
                    {logoData.name}
                  </h3>
                  <div className="card__skills">
                    <ul className="card__skills--list">
                      {logoData.skills?.map((item, index) => {
                        return (
                          <li className="card__skills--item" key={index}>
                            <p className="paragraph u-paragraph-skills">
                              {item}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
