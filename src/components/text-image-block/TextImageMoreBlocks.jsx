import "./text-image-block.scss";
import TextImageBlock from "./TextImageBlock";
import me from "../../images/me.jpg";

const TextImageMoreBlocks = () => {
  return (
    <div className="projects__container">
      <TextImageBlock
        className="img__to__left"
        language="React | Javascript"
        title="1. To do list"
        src={me}
        type="btn btn__tertiary btn__green"
        to={`/to-do-project`}
      />
      <TextImageBlock
        className="img__to__right"
        language="React"
        title="2. Calculator"
        src={me}
        type="btn btn__tertiary btn__pink"
        to={`/calculator`}
      />
      <TextImageBlock
        className="img__to__left"
        language="Figma | Wordpress"
        title="3. Daikiri eCommerce"
        src={me}
        type="btn btn__tertiary btn__red"
        to={`/daikiri-project`}
      />
      <TextImageBlock
        className="img__to__right"
        language="React | Javascript"
        title="4. To do list"
        src={me}
        type="btn btn__tertiary btn__blue"
      />
      <TextImageBlock
        className="img__to__left"
        language="React | Javascript"
        title="5. To do list"
        src={me}
        type="btn btn__tertiary btn__green"
      />
    </div>
  );
};

export default TextImageMoreBlocks;
