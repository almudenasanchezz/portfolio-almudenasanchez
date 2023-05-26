import "./text-image-block.scss";
import IconArrowBlack from "../icons/IconArrowBlack";
import TertiaryButton from "../buttons/TertiaryButton";

const TextBlock = (props) => {
  return (
    <div className="project__content">
      <div className="project__title">
        <p className="project__title__language">{props.language}</p>
        <p className="project__title__exercise">{props.title}</p>
        <div className="project__btn__container">
          <TertiaryButton text="View project" icon={<IconArrowBlack />} />
        </div>
      </div>
    </div>
  );
};

export default TextBlock;
