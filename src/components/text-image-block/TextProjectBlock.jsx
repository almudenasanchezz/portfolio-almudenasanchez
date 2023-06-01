import "./text-image-block.scss";
import Button from "../buttons/Button";
import IconArrow from "../icons/IconArrow";
import "../../scss/global.scss";

const TextProjectBlock = (props) => {
  return (
    <div className="content__block">
      <div className="project__title">
        <h2 className="h2">{props.title}</h2>
        <p className="description">{props.paragraph}</p>
      </div>
      <div className="small__description">
        <div className="small__description__part">
          <p className="small__description__part__category">
            {props.category1}
          </p>
          <p className="small__description__part__category__content">
            {props.categoryContent1}
          </p>
        </div>
        <div className="small__description__part">
          <p className="small__description__part__category">
            {props.category2}
          </p>
          <p className="small__description__part__category__content">
            {props.categoryContent2}
          </p>
        </div>
        <Button
          type="btn btn__tertiary"
          to={props.to}
          text={props.text}
          icon={<IconArrow />}
        />
      </div>
    </div>
  );
};

export default TextProjectBlock;
