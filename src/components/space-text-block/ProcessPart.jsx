import "./space-text-block.scss";

const ProcessPart = (props) => {
  return (
    <div className="text__block__top__left">
      <h4 className="h4">{props.h4}</h4>
      <p className="text__block__text">{props.text}</p>
    </div>
  );
};

export default ProcessPart;
