import "./text-image-block.scss";
import IconArrow from "../icons/IconArrow";
import Button from "../buttons/Button";

const TextBlock = (props) => {
  return (
    <div className="project__content">
      <div className="project__title">
        <p className="project__title__language">{props.language}</p>
        <p className="project__title__exercise">{props.title}</p>
        <Button
          type={props.type}
          to={props.to}
          text="View project"
          icon={<IconArrow sizeIcon={props.sizeIcon} />}
        />
      </div>
    </div>
  );
};

export default TextBlock;
