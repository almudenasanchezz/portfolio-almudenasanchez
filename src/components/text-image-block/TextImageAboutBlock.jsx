import "./text-image-block.scss";
import ImageBlock from "./ImageBlock";
import TextBlockAbout from "./TextBlockAbout";

const TextImageAboutBlock = (props) => {
  return (
    <div className="project">
      {!props.imageToRight && <ImageBlock src={props.src} alt={props.alt} />}
      <TextBlockAbout paragraph={props.paragraph} />
      {props.imageToRight && <ImageBlock src={props.src} alt={props.alt} />}
    </div>
  );
};

export default TextImageAboutBlock;
