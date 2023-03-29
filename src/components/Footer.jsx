import React from "react";
import useScrollIntoView from "../hooks/useScrollIntoView";
import { ReactComponent as PortfolioSvg } from "../resources/svg/portfolio.svg";

const Footer = () => {
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
    <footer className="footer">
      <div className="footer__logo">
        <PortfolioSvg />
      </div>
      <div className="footer__column">
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

      <div className="footer__column">
        <div className="footer__wrapper">
          <p className="paragraph u-paragraph-copyright">
            Build by ONOFREI CONSTANTIN to be used as a portfolio. Copyright
            &copy; by Onofrei Constantin. You can contact me at the number
            0757258652, through email at constantin.onofrei22@gamil.com or via
            the contact form.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
