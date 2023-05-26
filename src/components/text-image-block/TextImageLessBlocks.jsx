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
      />
      <TextImageBlock
        imageToRight
        language="React"
        title="2. Calculator"
        src={me}
      />
      <TextImageBlock language="Figma" title="3. Web redesign" src={me} />
    </div>
  );
};

export default TextImageLessBlocks;
