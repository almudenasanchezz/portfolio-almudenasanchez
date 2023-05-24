import "./Button.scss";
import { Link } from "react-router-dom";

const TertiaryButton = (props) => {
  return (
    <Link className="btn btn__tertiary" to={props.route}>
      {props.text}
      {props.icon}
    </Link>
  );
};

export default TertiaryButton;
