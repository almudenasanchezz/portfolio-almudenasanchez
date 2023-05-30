import "./text-image-block.scss";

const ImageBlock = (props) => {
  return (
    <div className={props.columnImage}>
      <img className="img" src={props.src} alt={props.alt} />
    </div>
  );
};

export default ImageBlock;
