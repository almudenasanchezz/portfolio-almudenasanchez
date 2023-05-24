import "./Button.scss";
import { Link } from "react-router-dom";

const SecondaryButton = (props) => {
  return (
    <Link className="btn btn__secondary" to={props.route}>
      {props.text}
      {props.icon}
    </Link>
  );
};

export default SecondaryButton;
