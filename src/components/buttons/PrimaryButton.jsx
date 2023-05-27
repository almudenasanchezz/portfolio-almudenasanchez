import "./Button.scss";
import { Link } from "react-router-dom";

const PrimaryButton = (props) => {
  return (
    <Link className="btn btn__primary" to={props.to}>
      {props.text}
      {props.icon}
    </Link>
  );
};

export default PrimaryButton;
