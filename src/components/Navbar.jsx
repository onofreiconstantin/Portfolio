import React, { useEffect, useState } from "react";
import useLinksData from "../hooks/useLinksData";
import useScrollIntoView from "../hooks/useScrollIntoView";
import { ReactComponent as PortfolioSvg } from "../resources/svg/portfolio.svg";

const Navbar = () => {
  const { linksData } = useLinksData();

  const [prevScrollY, setPrevScrollY] = useState(0);
  const [displayNavbar, setDisplayNavbar] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const navElement = document.querySelector("nav");
    const navHeight = navElement.getBoundingClientRect().height;

    if (currentScrollY > prevScrollY && currentScrollY > navHeight) {
      setDisplayNavbar(false);
    } else {
      setDisplayNavbar(true);
    }

    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <div className={`nav ${displayNavbar && `display-nav`}`}>
      <nav className="nav__content">
        <PortfolioSvg className="nav__icon leftToRight" />
        <ul className="nav__list rightToLeft">
          {linksData.map((linkData) => {
            return (
              <li className="nav__item" key={linkData.id}>
                <button
                  className="btn-nav"
                  onClick={() => useScrollIntoView(linkData.link)}
                >
                  {linkData.name}
                </button>
              </li>
            );
          })}
          <li>
            <a href="#" className="btn-cv">
              CV
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
