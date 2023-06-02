import "./space-text-block.scss";

const ProcessPart = (props) => {
  return (
    <>
      <div className={props.textBlock}>
        <p className={props.showCategory}>{props.category}</p>
        <h4 className={props.title}>{props.titleText}</h4>
        <p className="text__block__text">{props.text}</p>
      </div>
    </>
  );
};

export default ProcessPart;
