import "./text-image-block.scss";
import TextImageBlock from "./TextImageBlock";
import me from "../../images/me.jpg";

const TextImageBlocks = () => {
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
      <TextImageBlock
        imageToRight
        language="React | Javascript"
        title="4. To do list"
        src={me}
      />
      <TextImageBlock
        language="React | Javascript"
        title="5. To do list"
        src={me}
      />
    </div>
  );
};

export default TextImageBlocks;
