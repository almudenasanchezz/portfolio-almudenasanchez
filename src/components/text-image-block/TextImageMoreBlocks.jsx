import "./text-image-block.scss";
import TextImageBlock from "./TextImageBlock";
import me from "../../images/me.jpg";

const TextImageMoreBlocks = () => {
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
        to={`/calculator`}
      />
      <TextImageBlock
        language="Figma | Wordpress"
        title="3. Daikiri eCommerce"
        src={me}
        type="btn btn__tertiary"
        sizeIcon="small__icon"
        to={`/daikiri-project`}
      />
      <TextImageBlock
        imageToRight
        language="React | Javascript"
        title="4. To do list"
        src={me}
        type="btn btn__tertiary"
        sizeIcon="small__icon"
      />
      <TextImageBlock
        language="React | Javascript"
        title="5. To do list"
        src={me}
        type="btn btn__tertiary"
        sizeIcon="small__icon"
      />
    </div>
  );
};

export default TextImageMoreBlocks;
