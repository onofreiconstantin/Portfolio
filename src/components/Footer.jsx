import React, { useRef } from "react";
import useCheckVisible from "../hooks/useCheckVisible";
import useLinksData from "../hooks/useLinksData";
import useScrollIntoView from "../hooks/useScrollIntoView";
import { ReactComponent as FacebookSvg } from "../resources/svg/facebook.svg";
import { ReactComponent as InstagramSvg } from "../resources/svg/instagram.svg";
import { ReactComponent as LinkedInSvg } from "../resources/svg/linkedIn.svg";
import { ReactComponent as PortfolioSvg } from "../resources/svg/portfolio.svg";

const Footer = () => {
  const parentRef = useRef(null);
  const { animateElement } = useCheckVisible(parentRef);
  const { linksData, headerElement } = useLinksData();

  const socialData = [
    {
      id: 0,
      link: "https://www.linkedin.com/in/constantin-onofrei-43a63b269/",
      svg: <LinkedInSvg />,
    },
    {
      id: 1,
      link: "https://www.facebook.com/iulian.constantin.onofrei",
      svg: <FacebookSvg />,
    },
    {
      id: 2,
      link: "https://www.instagram.com/ci.onofrei/",
      svg: <InstagramSvg />,
    },
  ];

  return (
    <footer className="footer" ref={parentRef}>
      <div
        className={`footer__logo ${
          animateElement && "bottomToTop u-animation-delay"
        }`}
      >
        <PortfolioSvg
          onClick={() => useScrollIntoView(headerElement)}
          className="u-cursor-pointer"
        />
      </div>
      <div
        className={`footer__column ${
          animateElement && "leftToRight u-animation-delay"
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
          animateElement && "rightToLeft u-animation-delay"
        }`}
      >
        <div className="footer__wrapper">
          <p className="paragraph u-paragraph-copyright">
            Build by ONOFREI CONSTANTIN to be used as a portfolio. Copyright
            &copy; by Onofrei Constantin. You can contact me via the contact
            form or on my socials.
          </p>
          <div className="footer__socials">
            {socialData.map((linkData) => {
              return (
                <a
                  href={linkData.link}
                  target="_blank"
                  className="btn-social u-btn-social-alternative"
                  key={linkData.id}
                >
                  {linkData.svg}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
