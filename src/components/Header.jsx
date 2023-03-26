import React from "react";
import portfolioImage from "../resources/img/portfolio.png";
import { ReactComponent as LinkedInSvg } from "../resources/svg/linkedIn.svg";
import { ReactComponent as FacebookSvg } from "../resources/svg/facebook.svg";
import { ReactComponent as InstagramSvg } from "../resources/svg/instagram.svg";

const Header = () => {
  const linksData = [
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
    <header className="header">
      <div className="header__info">
        <h1 className="heading-primary leftToRight">Hello</h1>
        <h2 className="heading-secondary leftToRight">
          I'm Onofrei Constantin
        </h2>
        <div className="header__info-skills">
          <h2 className="heading-secondary leftToRight">
            Front End Developer in
          </h2>
          <h2 className="heading-secondary leftToRight">React</h2>
        </div>
        <div className="header__socials bottomToTop">
          {linksData.map((linkData) => {
            return (
              <a
                href={linkData.link}
                target="_blank"
                className="btn-social"
                key={linkData.id}
              >
                {linkData.svg}
              </a>
            );
          })}
        </div>
      </div>
      <div className="header__image rightToLeft">
        <img
          src={portfolioImage}
          alt="Portfolio Image"
          className="header__image--content"
        />
      </div>
    </header>
  );
};

export default Header;
