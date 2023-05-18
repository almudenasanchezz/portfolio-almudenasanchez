import "./App.scss";
import { Link, Outlet } from "react-router-dom";
import "./scss/global.scss";

function App() {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <Link className="header__link" to="/">
            Home
          </Link>
          <Link className="header__link" to="/projects">
            Projects
          </Link>
          <Link className="header__link" to="/about">
            About
          </Link>
          <Link className="header__link" to="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <Outlet />
      <footer className="footer">
        <div className="logo">MI LOGO</div>
        <nav className="footer__nav">
          <Link className="footer__link" to="/list">
            Github
          </Link>
          <Link className="footer__link" to="/list">
            LinkedIn
          </Link>
          <Link className="footer__link" to="/list">
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
      </footer>
    </>
  );
}

export default App;
