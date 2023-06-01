import "./text-image-block.scss";
import TextImageBlock from "./TextImageBlock";
import me from "../../images/me.jpg";

const TextImageLessBlocks = () => {
  return (
    <div className="projects__container">
      <TextImageBlock
        language="React | Javascript"
        title="1. To do list"
        src={me}
        type="btn btn__tertiary"
        sizeIcon="small__icon"
        to={`/to-do-project`}
      />
      <TextImageBlock
        imageToRight
        language="React"
        title="2. Calculator"
        src={me}
        type="btn btn__tertiary"
        sizeIcon="small__icon"
        to={`/calculator-project`}
      />
      <TextImageBlock
        language="Figma"
        title="3. Web redesign"
        src={me}
        type="btn btn__tertiary"
        sizeIcon="small__icon"
        to={`/another-project`}
      />
    </div>
  );
};

export default TextImageLessBlocks;
