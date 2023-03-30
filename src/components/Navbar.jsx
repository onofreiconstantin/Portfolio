import React, { useEffect, useState } from "react";
import useLinksData from "../hooks/useLinksData";
import useScrollIntoView from "../hooks/useScrollIntoView";
import cvOnofreiConstantin from "../resources/files/cv-onofrei_constantin.pdf";
import { ReactComponent as PortfolioSvg } from "../resources/svg/portfolio.svg";

const Navbar = () => {
  const { linksData, headerElement } = useLinksData();

  const [prevScrollY, setPrevScrollY] = useState(0);
  const [displayNavbar, setDisplayNavbar] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const navElement = document.querySelector("nav");
    const navHeight = navElement.getBoundingClientRect().height;

    if (
      currentScrollY > prevScrollY &&
      currentScrollY > navHeight &&
      windowWidth > 800
    ) {
      setDisplayNavbar(false);
    } else {
      setDisplayNavbar(true);
    }

    setPrevScrollY(currentScrollY);
  };

  const handleResize = () => {
    if (window.innerWidth > 800) {
      const element = document.querySelector(".nav__checkbox");
      element.checked = false;
    }

    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY, windowWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(cvOnofreiConstantin);

  return (
    <div className={`nav ${displayNavbar && `display-nav`}`}>
      <input type="checkbox" id="nav-toggle" className="nav__checkbox" />
      <label htmlFor="nav-toggle" className="nav__button">
        <span className="nav__menu-icon" />
      </label>
      <nav className="nav__content">
        <PortfolioSvg
          className="nav__icon u-cursor-pointer"
          onClick={() => useScrollIntoView(headerElement)}
        />

        <ul className="nav__list rightToLeft">
          {linksData.map((linkData) => {
            return (
              <li className="nav__item" key={linkData.id}>
                <button
                  className="btn-nav"
                  onClick={() => useScrollIntoView(linkData.link, true)}
                >
                  {linkData.name}
                </button>
              </li>
            );
          })}
          <li className="nav__item">
            <a href={cvOnofreiConstantin} className="btn-cv" download>
              CV
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
