import "./space-text-block.scss";

const SpaceTextBlock = (props) => {
  return (
    <div className="space__text__block">
      <article className="text__block">
        <p className="text__block__paragraph">{props.text}</p>
      </article>
    </div>
  );
};

export default SpaceTextBlock;
