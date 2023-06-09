import "./App.scss";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./scss/global.scss";
import Topbar from "./components/header/Topbar";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header className="topbar">
        <Topbar />
      </header>
      <Outlet />
      <footer className="footer">
        <div className="footer__content">
          <div className="logo">MI LOGO</div>
          <nav className="footer__nav">
            <Link
              className="footer__link"
              to={`https://github.com/almudenasanchezz`}
              target="_blanck"
            >
              Github
            </Link>
            <Link
              className="footer__link"
              to={`https://www.linkedin.com/in/almudena-sánchez-gallego-0a0bb9213/`}
              target="_blanck"
            >
              LinkedIn
            </Link>
            <Link
              className="footer__link"
              to={`https://www.behance.net/almudenasanchez`}
              target="_blanck"
            >
              Behance
            </Link>
          </nav>
          <nav className="footer__nav">
            <Link className="footer__link" to="/">
              Home
            </Link>
            <Link className="footer__link" to="/projects">
              Projects
            </Link>
            <Link className="footer__link" to="/about">
              About
            </Link>
            <Link className="footer__link" to="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default App;
