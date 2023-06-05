import "./error.scss";
import Button from "../../components/buttons/Button";
import IconArrow from "../../components/icons/IconArrow";

function Error() {
  return (
    <div className="centered">
      <div className="error__text">
        <span className="red">O</span>
        <span className="pink">O</span>
        <span className="green">P</span>
        <span className="blue">S</span>
        <span className="white">!</span>

        <p className="error__phrase">couldn't find this page</p>
      </div>
      <Button
        type="btn btn__secondary"
        to="/home"
        text="BACK HOME"
        icon={<IconArrow />}
      />
    </div>
  );
}

export default Error;
