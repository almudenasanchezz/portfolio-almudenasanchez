import "./text-image-block.scss";
import ImageBlock from "./ImageBlock";
import TextBlock from "./TextBlock";

const TextImageBlock = (props) => {
  return (
    <div className={props.className}>
      <ImageBlock
        columnImage="project__image"
        src={props.src}
        alt={props.alt}
      />
      <TextBlock
        language={props.language}
        title={props.title}
        to={props.to}
        type={props.type}
      />
    </div>
  );
};

export default TextImageBlock;
