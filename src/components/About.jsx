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
            I’m a Software Developer with 4+ years of experience building
            business, e-commerce, ERP, CRM, and community platforms. My
            strongest areas are React, Next.js, TypeScript, and frontend
            architecture, with practical full-stack experience using
            Node.js/Express.js, Supabase/PostgreSQL, MongoDB, and Stripe.
          </p>
          <p className="paragraph">
            Recently, I’ve worked on a public gift card e-commerce platform
            with customer, admin, and partner workflows, an AI-assisted project
            estimation tool, and a community platform with posts, chat, business
            profiles, ads, maps, and Cloudflare R2 object storage. Before that,
            I led frontend development on a multi-tenant ERP and contributed to
            CRM and Field Service Management products.
          </p>
          <p className="paragraph">
            I focus on ownership, clean delivery, and turning complex business
            workflows into usable, maintainable applications. I value clear
            communication, reliability, continuous learning, and building
            products that are both useful and thoughtfully crafted.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
