import "./Topbar.scss";
import TopbarLink from "./TopbarLink";
import { useState } from "react";

const Topbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <nav
        className={`topbar__nav ${showMobileMenu ? "topbar__nav__show" : ""}`}
      >
        <button className="topbar__nav__close" onClick={handleShowMenuClick}>
          Close
        </button>
        <TopbarLink text="Home" to={`/`} />
        <TopbarLink text="Projects" to={`/projects`} />
        <TopbarLink text="About" to={`/about`} />
        <TopbarLink text="Contact" to={`/contact`} />
      </nav>
      <button className="show__menu" onClick={handleShowMenuClick}>
        Menu
      </button>
    </>
  );
};

export default Topbar;
