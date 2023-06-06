import "./space-text-block.scss";
import ProcessPart from "./ProcessPart";

const Space4TextBlock = () => {
  return (
    <div className="space__text__block">
      <article className="text__block">
        <div className="text__block__top">
          <ProcessPart
            showCategory="dont__show"
            textBlock="text__block__top__left"
            title="h3"
            titleText="Briefing"
            description="text__block__text"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque ac malesuada dolor, quis laoreet purus."
          />
          <ProcessPart
            showCategory="dont__show"
            textBlock="text__block__top__left"
            title="h3"
            titleText="Analysis"
            description="text__block__text"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque ac malesuada dolor, quis laoreet purus."
          />
        </div>
        <div className="text__block__bottom">
          <ProcessPart
            showCategory="dont__show"
            textBlock="text__block__top__left"
            title="h3"
            titleText="Prototyping"
            description="text__block__text"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque ac malesuada dolor, quis laoreet purus."
          />
          <ProcessPart
            showCategory="dont__show"
            textBlock="text__block__top__left"
            title="h3"
            titleText="Final Part"
            description="text__block__text"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque ac malesuada dolor, quis laoreet purus."
          />
        </div>
      </article>
    </div>
  );
};

export default Space4TextBlock;
