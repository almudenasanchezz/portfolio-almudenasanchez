import "./App.scss";
import { Link, Outlet } from "react-router-dom";
import "./scss/global.scss";

function App() {
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <Link className="header-link" to="/">
            Home
          </Link>
          <Link className="header-link" to="/projects">
            Projects
          </Link>
          <Link className="header-link" to="/about">
            About
          </Link>
          <Link className="header-link" to="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <Outlet />
      <footer className="footer">
        <div className="logo">MI LOGO</div>
        <nav className="footer-nav">
          <Link className="footer-link" to="/list">
            Github
          </Link>
          <Link className="footer-link" to="/list">
            LinkedIn
          </Link>
          <Link className="footer-link" to="/list">
            Behance
          </Link>
        </nav>
        <nav className="footer-nav">
          <Link className="footer-link" to="/">
            Home
          </Link>
          <Link className="footer-link" to="/projects">
            Projects
          </Link>
          <Link className="footer-link" to="/about">
            About
          </Link>
          <Link className="footer-link" to="/contact">
            Contact
          </Link>
        </nav>
      </footer>
    </>
  );
}

export default App;
