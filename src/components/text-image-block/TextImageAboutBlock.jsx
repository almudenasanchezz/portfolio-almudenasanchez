import "./text-image-block.scss";
import ImageBlock from "./ImageBlock";
import TextBlockAbout from "./TextBlockAbout";

const TextImageAboutBlock = (props) => {
  return (
    <div className={props.column}>
      <ImageBlock
        columnImage={props.columnImage}
        src={props.src}
        alt={props.alt}
      />
      <TextBlockAbout
        textColumn={props.textColumn}
        text={props.text}
        type={props.type}
        paragraph={props.paragraph}
      />
    </div>
  );
};

export default TextImageAboutBlock;
