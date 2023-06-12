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
            title="h3 font__green"
            titleText="Briefing"
            description="text__block__text"
            text="Understand your objectives, needs and vision of the project. I collect key information about your target audience and your specific requirements."
          />
          <ProcessPart
            showCategory="dont__show"
            textBlock="text__block__top__left"
            title="h3 font__pink"
            titleText="Analysis"
            description="text__block__text"
            text="Analysis of the competition, market trends and best design practices. I also conduct user research to understand their behaviors, needs and desires."
          />
        </div>
        <div className="text__block__bottom">
          <ProcessPart
            showCategory="dont__show"
            textBlock="text__block__top__left"
            title="h3 font__red"
            titleText="Prototyping"
            description="text__block__text"
            text="I use tools like wireframes and mockups to create an interactive visual representation of the proposed solution."
          />
          <ProcessPart
            showCategory="dont__show"
            textBlock="text__block__top__left"
            title="h3 font__blue"
            titleText="Final Part"
            description="text__block__text"
            text="I make sure that the design adapts smoothly to different devices and platforms, and that accessibility and performance standards are met"
          />
        </div>
      </article>
    </div>
  );
};

export default Space4TextBlock;
