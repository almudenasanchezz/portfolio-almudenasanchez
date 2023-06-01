import ImageBlock from "./ImageBlock";
import TextProjectBlock from "./TextProjectBlock";

const TextImageProjectBlock = (props) => {
  return (
    <>
      <TextProjectBlock
        title={props.title}
        paragraph={props.paragraph}
        category1={props.category1}
        categoryContent1={props.categoryContent1}
        category2={props.category2}
        categoryContent2={props.categoryContent2}
        to={props.to}
        text={props.text}
      />
      <ImageBlock columnImage="image__block" src={props.src} alt={props.alt} />
    </>
  );
};

export default TextImageProjectBlock;
