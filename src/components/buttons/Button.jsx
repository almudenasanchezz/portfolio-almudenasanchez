import "./Button.scss";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link
      className={props.type}
      to={props.to}
      target={props.newTab ? "_blanck" : ""}
    >
      {props.text}
      {props.icon}
    </Link>
  );
};

export default Button;
