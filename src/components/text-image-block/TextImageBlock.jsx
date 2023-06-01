import "./text-image-block.scss";
import ImageBlock from "./ImageBlock";
import TextBlock from "./TextBlock";

const TextImageBlock = (props) => {
  return (
    <div className="project">
      {!props.imageToRight && (
        <ImageBlock
          columnImage="project__image"
          src={props.src}
          alt={props.alt}
        />
      )}
      <TextBlock
        language={props.language}
        title={props.title}
        to={props.to}
        type={props.type}
        sizeIcon={props.sizeIcon}
      />
      {props.imageToRight && (
        <ImageBlock
          columnImage="project__image"
          src={props.src}
          alt={props.alt}
        />
      )}
    </div>
  );
};

export default TextImageBlock;
