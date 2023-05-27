import "./text-image-block.scss";
import SecondaryButton from "../buttons/SecondaryButton";
import IconArrow from "../icons/IconArrow";

const TextBlockAbout = (props) => {
  return (
    <div className="about__content">
      <div className="about__content__text">
        <p className="text">{props.paragraph}</p>
        <SecondaryButton to={`/about`} text="Know more" icon={<IconArrow />} />
      </div>
    </div>
  );
};

export default TextBlockAbout;
