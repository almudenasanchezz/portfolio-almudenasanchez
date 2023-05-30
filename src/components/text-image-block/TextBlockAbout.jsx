import "./text-image-block.scss";
import Button from "../buttons/Button";
import IconArrow from "../icons/IconArrow";

const TextBlockAbout = (props) => {
  return (
    <div className={props.textColumn}>
      <div className={props.text}>
        <p className="text">{props.paragraph}</p>
        <Button
          type={props.type}
          to={`/about`}
          text="Know more"
          icon={<IconArrow />}
        />
      </div>
    </div>
  );
};

export default TextBlockAbout;
