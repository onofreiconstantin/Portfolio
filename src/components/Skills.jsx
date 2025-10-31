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
import reactLogo from "../resources/img/reactLogo.webp";
import scssLogo from "../resources/img/scssLogo.webp";
import tailwindLogo from "../resources/img/tailwindLogo.webp";
import typescriptLogo from "../resources/img/typescriptLogo.webp";
import shadcnLogo from "../resources/img/shadcnLogo.webp";
import nestjsLogo from "../resources/img/nestjsLogo.webp";
import dockerLogo from "../resources/img/dockerLogo.webp";
import prismaLogo from "../resources/img/prismaLogo.webp";
import typeormLogo from "../resources/img/typeormLogo.webp";
import postgresqlLogo from "../resources/img/postgresqlLogo.webp";
import mongodbLogo from "../resources/img/mongodbLogo.webp";
import stripeLogo from "../resources/img/stripeLogo.webp";
import validationLogo from "../resources/img/validationLogo.webp";
import zustandLogo from "../resources/img/zustandLogo.webp";

const Skills = () => {
  const parentRef = useRef(null);
  const { animateElement } = useCheckVisible(parentRef);

  const logosData = [
    {
      id: 0,
      logo: reactLogo,
      name: "React",
      skills: [
        "Proficient in React (v17/18/19), with strong knowledge of state management, props usage, and advanced hooks (e.g., useLayoutEffect, useCallback, useMemo, useContext).",
        "Solid understanding of custom hooks and higher-order components (e.g., memo).",
      ],
    },
    {
      id: 1,
      logo: nextLogo,
      name: "Next.js",
      skills: [
        "Experience with Next.js (v12/13/14/15), including a solid understanding of SSR (Server-Side Rendering) and SSG (Static Site Generation) for SEO and performance.",
        "Proficient with core components like Link and Image.",
      ],
    },
    {
      id: 2,
      logo: javascriptLogo,
      name: "JavaScript",
      skills: [
        "Strong foundation in advanced JavaScript and ES6+ features.",
        "Good understanding of the JavaScript object model, including DOM manipulation.",
      ],
    },
    {
      id: 3,
      logo: typescriptLogo,
      name: "TypeScript",
      skills: [
        "Proficient in using TypeScript as a superset of JavaScript to ensure type safety, improve code quality, and maintain scalability in large projects.",
      ],
    },
    {
      id: 4,
      logo: htmlLogo,
      name: "HTML",
      skills: [
        "Good understanding of semantic HTML5 elements and their critical role in web accessibility and SEO.",
      ],
    },
    {
      id: 5,
      logo: cssLogo,
      name: "CSS",
      skills: [
        "Strong knowledge of core CSS properties, selectors, pseudo-classes, and pseudo-elements.",
        "Proficient in creating advanced effects using animations, keyframes, transform, and transition.",
        "Ability to create fully responsive designs for any device.",
      ],
    },
    {
      id: 6,
      logo: scssLogo,
      name: "SCSS",
      skills: [
        "Excellent knowledge of SCSS core concepts, including variables, mixins, nesting, functions, and creating modular, maintainable stylesheets.",
      ],
    },
    {
      id: 7,
      logo: tailwindLogo,
      name: "Tailwind CSS",
      skills: [
        "Experience with Tailwind CSS (v2/3/4), demonstrating good knowledge of its utility-first approach and essential functions/classes for rapid UI development.",
      ],
    },
    {
      id: 8,
      logo: shadcnLogo,
      name: "Shadcn/UI",
      skills: [
        "Proficient in using Shadcn/UI (bazat pe Radix și Tailwind) for building aesthetically pleasing and accessible UIs by composing customizable components.",
      ],
    },
    {
      id: 9,
      logo: muiLogo,
      name: "Material UI",
      skills: [
        "Decent experience with Material UI (MUI) (v4/5).",
        "Able to effectively style and customize components using the sx property, class overrides, and the ThemeProvider.",
      ],
    },
    {
      id: 10,
      logo: nodeLogo,
      name: "Node.js",
      skills: [
        "Basic understanding of the Node.js environment.",
        "Limited experience with the Express.js framework, primarily from an academic project.",
        "Actively working towards becoming a Full-Stack Developer.",
      ],
    },
    {
      id: 11,
      logo: nestjsLogo,
      name: "NestJS",
      skills: [
        "Early experience with NestJS, focusing on building scalable and maintainable server-side applications using its modular, controller-service structure.",
      ],
    },
    {
      id: 12,
      logo: prismaLogo,
      name: "Prisma",
      skills: [
        "Experience with Prisma (ORM), including schema definition, database migration management, and utilizing the Prisma Client for efficient data querying.",
      ],
    },
    {
      id: 13,
      logo: typeormLogo,
      name: "TypeORM",
      skills: [
        "Familiarity with TypeORM for managing relational data in TypeScript applications, including defining entities and using repositories.",
      ],
    },
    {
      id: 14,
      logo: postgresqlLogo,
      name: "PostgreSQL",
      skills: [
        "Basic proficiency in PostgreSQL, focusing on creating robust schemas, writing standard SQL queries, and understanding relational database principles (ACID).",
      ],
    },
    {
      id: 15,
      logo: mongodbLogo,
      name: "MongoDB & Mongoose",
      skills: [
        "Basic knowledge of MongoDB (NoSQL) and using Mongoose (ODM) to enforce data structure (schemas) and validation.",
        "Familiarity with basic queries (MQL) and the concept of flexible schema design.",
      ],
    },
    {
      id: 16,
      logo: validationLogo,
      name: "Validation & Forms",
      skills: [
        "Strong proficiency in Zod and YUP for schema declaration and validation, ensuring data integrity.",
        "Primary focus on React Hook Form for high-performance control and validation, supplemented by familiarity with Formik for state management.",
      ],
    },
    {
      id: 21,
      logo: zustandLogo,
      name: "Zustand",
      skills: [
        "Basic knowledge of Zustand providing a concise and practical way to manage shared state and simplify state logic",
      ],
    },
    {
      id: 17,
      logo: stripeLogo,
      name: "Stripe",
      skills: [
        "Familiarity with Stripe API integration for handling payments, subscriptions, and managing financial transactions within a web application.",
      ],
    },
    {
      id: 18,
      logo: gitLogo,
      name: "GIT & Version Control",
      skills: [
        "Good practical knowledge of GIT for collaborative projects and standard branching workflows (e.g., Git Flow).",
        "Familiarity with version control repositories like GitHub and BitBucket.",
      ],
    },
    {
      id: 19,
      logo: dockerLogo,
      name: "Docker",
      skills: [
        "Limited experience in creating basic Docker containers for development environments and understanding containerization fundamentals.",
      ],
    },
    {
      id: 20,
      logo: languageLogo,
      name: "English Language Skills",
      skills: [
        "Listening: B1",
        "Reading: B2",
        "Writing: B2",
        "Spoken Production: B2",
        "Spoken Interaction: B2",
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
