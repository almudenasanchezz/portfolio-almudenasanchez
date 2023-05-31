import "./color-text-block.scss";

const ColorTextBlock = (props) => {
  return (
    <div className="block">
      <div className={props.colorBlock}></div>
      <div className="info__block">
        <p className="info__block__text">{props.text}</p>
        <p className="info__block__text">{props.text2}</p>
      </div>
    </div>
  );
};

export default ColorTextBlock;
