import "./text-image-block.scss";
import IconArrowBlack from "../icons/IconArrowBlack";
import Button from "../buttons/Button";

const TextBlock = (props) => {
  return (
    <div className="project__content">
      <div className="project__title">
        <p className="project__title__language">{props.language}</p>
        <p className="project__title__exercise">{props.title}</p>
        <Button
          type={props.type}
          text="View project"
          icon={<IconArrowBlack />}
        />
      </div>
    </div>
  );
};

export default TextBlock;
