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
            I’m a Software Developer with 4+ years’ experience building ERP,
            CRM, Field Service, and e-commerce applications. I led front-end
            development for a multi-client ERP, contributed to CRM and FSM
            projects, and most recently worked full-stack on an e-commerce
            platform and an AI-powered estimation tool. I’m currently
            strengthening my backend expertise with technologies like Supabase
            and Drizzle.
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
            continuous learning, which drive me to keep improving, take
            ownership of my work, and contribute meaningfully to every team I’m
            part of. I also value clear communication, reliability, and
            building products that are both useful and thoughtfully crafted.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
