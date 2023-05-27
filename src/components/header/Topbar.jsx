import "./Topbar.scss";
import TopbarLink from "./TopbarLink";

const Topbar = () => {
  return (
    <nav className="topbar__nav">
      <TopbarLink text="Home" to={`/`} />
      <TopbarLink text="Projects" to={`/projects`} />
      <TopbarLink text="About" to={`/about`} />
      <TopbarLink text="Contact" to={`/contact`} />
    </nav>
  );
};

export default Topbar;
