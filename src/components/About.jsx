import React, { useRef } from "react";
import useCheckVisible from "../hooks/useCheckVisible";

const About = () => {
  const parentRef = useRef(null);
  const { animateElement } = useCheckVisible(parentRef);

  return (
    <section className="section-about" ref={parentRef}>
      <div className="about">
        <div className="about__header">
          <h2
            className={`heading-secondary ${
              animateElement && "leftToRight u-animation-delay"
            }`}
          >
            About me
          </h2>
        </div>

        <div
          className={`about__content ${
            animateElement && "bottomToTop u-animation-delay"
          }`}
        >
          <p className="paragraph">
            I'm a Software Developer with over 3 years of experience, primarily
            focused on front-end development at a mid-level, while also gaining
            hands-on experience on the backend. Recently, I've been expanding my
            backend skills to strengthen my full-stack understanding and become
            more versatile in building complete applications.
          </p>
          <p className="paragraph">
            I’m passionate about creating clean, user-friendly interfaces and
            applications that genuinely help people. I enjoy taking on projects
            that challenge me to think differently and push my technical
            boundaries. In my free time, I like learning new technologies,
            playing games, watching movies & TV shows, and spending time with
            friends.
          </p>
          <p className="paragraph">
            Some of my core values are dedication, curiosity, empathy, and
            continuous learning, which drive me to keep improving and to
            contribute meaningfully to every team I’m part of.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
