import "./text-image-block.scss";
import TextImageBlock from "./TextImageBlock";
import toDo from "../../images/todo.jpg";
import weatherApp from "../../images/weather-app-bn.jpg";
import daikiri from "../../images/daikiri-bn-2.jpg";

const TextImageLessBlocks = () => {
  return (
    <div className="projects__container">
      <TextImageBlock
        className="img__to__left"
        language="Javascript"
        title="1. To do list"
        src={toDo}
        type="btn btn__tertiary btn__green"
        to={`/to-do-project`}
      />
      <TextImageBlock
        className="img__to__right"
        language="React"
        title="2. Weather App"
        src={weatherApp}
        type="btn btn__tertiary btn__pink"
        to={`/weather-app`}
      />
      <TextImageBlock
        className="img__to__left"
        language="Figma | Wordpress"
        title="3. Daikiri eCommerce"
        src={daikiri}
        type="btn btn__tertiary btn__red"
        to={`/daikiri-project`}
      />
    </div>
  );
};

export default TextImageLessBlocks;
