import "./space-text-block.scss";
import ProcessPart from "./ProcessPart";

const Space4TextBlock = (props) => {
  return (
    <div className="space__text__block">
      <article className="text__block">
        <div className="text__block__top">
          <ProcessPart
            h4="Briefing"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque ac malesuada dolor, quis laoreet purus."
          />
          <ProcessPart
            h4="Analysis"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque ac malesuada dolor, quis laoreet purus."
          />
        </div>
        <div className="text__block__bottom">
          <ProcessPart
            h4="Prototyping"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque ac malesuada dolor, quis laoreet purus."
          />
          <ProcessPart
            h4="Final Part"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque ac malesuada dolor, quis laoreet purus."
          />
        </div>
      </article>
    </div>
  );
};

export default Space4TextBlock;
