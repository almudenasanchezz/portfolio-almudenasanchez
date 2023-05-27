import "./Topbar.scss";
import { Link } from "react-router-dom";

const TopbarLink = (props) => {
  return (
    <>
      <Link className="topbar__link" to={props.to}>
        {props.text}
      </Link>
    </>
  );
};

export default TopbarLink;
