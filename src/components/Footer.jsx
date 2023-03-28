import React, { useRef } from "react";
import useCheckVisible from "../hooks/useCheckVisible";
import useScrollIntoView from "../hooks/useScrollIntoView";
import { ReactComponent as PortfolioSvg } from "../resources/svg/portfolio.svg";

const Footer = () => {
  const parentRef = useRef(null);
  const { isVisible } = useCheckVisible(parentRef);

  const linksData = [
    {
      id: 0,
      link: document.querySelector(".section-about"),
      name: "About me",
    },
    {
      id: 1,
      link: document.querySelector(".section-skills"),
      name: "Skills",
    },
    {
      id: 2,
      link: document.querySelector(".section-experience"),
      name: "Experience",
    },
    {
      id: 3,
      link: document.querySelector(".section-projects"),
      name: "Projects",
    },
    {
      id: 4,
      link: document.querySelector(".section-contact"),
      name: "Contact me",
    },
  ];

  return (
    <footer className="footer" ref={parentRef}>
      <div
        className={`footer__logo ${
          isVisible && "bottomToTop u-animation-delay"
        }`}
      >
        <PortfolioSvg />
      </div>
      <div
        className={`footer__column ${
          isVisible && "leftToRight u-animation-delay"
        }`}
      >
        <div className="footer__wrapper">
          <ul className="footer__wrapper--list">
            {linksData.map((linkData) => {
              return (
                <li className="footer__wrapper--item" key={linkData.id}>
                  <button
                    className="btn-nav u-btn-nav-alternative"
                    onClick={() => useScrollIntoView(linkData.link)}
                  >
                    {linkData.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className={`footer__column ${
          isVisible && "rightToLeft u-animation-delay"
        }`}
      >
        <div className="footer__wrapper">
          <p className="paragraph u-paragraph-copyright">
            Build by ONOFREI CONSTANTIN to be used as a portfolio. Copyright
            &copy; by Onofrei Constantin. You are 100% allowed to use this
            webpage for personal use but not for any other reason.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
