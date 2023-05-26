import "./Topbar.scss";
import TopbarLink from "./TopbarLink";

const Topbar = () => {
  return (
    <nav className="topbar__nav">
      <TopbarLink text="Home" route={`/`} />
      <TopbarLink text="Projects" route={`/projects`} />
      <TopbarLink text="About" route={`/about`} />
      <TopbarLink text="Contact" route={`/contact`} />
    </nav>
  );
};

export default Topbar;
