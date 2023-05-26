import "./App.scss";
import { Link, Outlet } from "react-router-dom";
import "./scss/global.scss";
import Topbar from "./components/header/Topbar";

function App() {
  return (
    <>
      <header className="topbar">
        <Topbar />
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
