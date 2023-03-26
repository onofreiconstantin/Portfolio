import React, { useRef } from "react";
import useCheckVisible from "../hooks/useCheckVisible";

const About = () => {
  const parentRef = useRef(null);
  const { isVisible } = useCheckVisible(parentRef);

  return (
    <section className="section-about" ref={parentRef}>
      <div className="about">
        <div className="about__header">
          <h2
            className={`heading-secondary ${
              isVisible && "leftToRight u-animation-delay"
            }`}
          >
            About me
          </h2>
        </div>
        <p
          className={`paragraph ${
            isVisible && "bottomToTop u-animation-delay"
          }`}
        >
          I'm a Junior Front End Developer in React with a Computer Science
          degree. For the most part, I'm a self-taught developer with a strong
          desire to work on projects that challenge me. I occupy my free time
          learning new stuff about web development, playing games, watching
          movies & TV Shows, and going out with friends. Presently I'm learning
          about SCSS and the cool things you can do with CSS. Some of my core
          values are dedication, being friendly and sympathetic, a good learning
          curve, and the desire to learn new technologies.
        </p>
      </div>
    </section>
  );
};

export default About;
