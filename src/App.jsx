import "./App.scss";
import { Link, Outlet } from "react-router-dom";
import "./scss/global.scss";

function App() {
  return (
    <>
      <header className="menu">
        <nav className="navegation">
          <Link className="link" to="/list">
            Home
          </Link>
          <Link className="link" to="/list">
            Projects
          </Link>
          <Link className="link" to="/list">
            About
          </Link>
          <Link className="link" to="/list">
            Contact
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default App;
