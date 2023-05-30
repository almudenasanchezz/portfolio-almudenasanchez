import "./text-image-block.scss";
import ImageBlock from "./ImageBlock";
import TextBlockAbout from "./TextBlockAbout";

const TextImageAboutBlock = (props) => {
  return (
    <div className={props.column}>
      {!props.imageToRight && (
        <ImageBlock
          columnImage={props.columnImage}
          src={props.src}
          alt={props.alt}
        />
      )}
      <TextBlockAbout
        textColumn={props.textColumn}
        text={props.text}
        type={props.type}
        paragraph={props.paragraph}
      />
      {props.imageToRight && <ImageBlock src={props.src} alt={props.alt} />}
    </div>
  );
};

export default TextImageAboutBlock;
