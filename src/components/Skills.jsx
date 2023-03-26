import React, { useRef } from "react";
import useCheckVisible from "../hooks/useCheckVisible";
import reactLogo from "../resources/img/reactLogo.png";
import nextLogo from "../resources/img/nextLogo.png";
import javascriptLogo from "../resources/img/javascriptLogo.png";
import htmlLogo from "../resources/img/htmlLogo.png";
import cssLogo from "../resources/img/cssLogo.png";
import scssLogo from "../resources/img/scssLogo.png";
import tailwindLogo from "../resources/img/tailwindLogo.png";
import muiLogo from "../resources/img/muiLogo.png";
import gitLogo from "../resources/img/gitLogo.png";
import nodeLogo from "../resources/img/nodeLogo.png";
import languageLogo from "../resources/img/languageLogo.png";
import otherSkillsLogo from "../resources/img/otherSkillsLogo.png";

const Skills = () => {
  const parentRef = useRef(null);
  const { isVisible } = useCheckVisible(parentRef);

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
        "Decent knowledge of the command used in a project with more than one person",
        "Limited experience with version control repositories like BitBucket and GitHub (very little experience)",
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

  return (
    <section className="section-skills" ref={parentRef}>
      <div className="skills">
        <div className="skills__header">
          <h2
            className={`heading-secondary u-heading-alternative ${
              isVisible && "rightToLeft u-animation-delay"
            }`}
          >
            Skills
          </h2>
        </div>
        <div
          className={`skills__container ${
            isVisible && "bottomToTop u-animation-delay"
          }`}
        >
          {logosData.map((logoData) => {
            return (
              <div className="card" key={logoData.id}>
                <div className="card__front">
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
                <div className="card__back">
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
