import "./color-text-block.scss";
import ColorTextBlock from "./ColorTextBlock";

const ColorTextBlocks = () => {
  return (
    <div className="blocks__container">
      <ColorTextBlock colorBlock="color__block-red" text="HTML" />
      <ColorTextBlock colorBlock="color__block-green" text="CSS" text2="SCSS" />
      <ColorTextBlock
        colorBlock="color__block-pink"
        text="JAVASCRIPT"
        text2="REACT"
      />
      <ColorTextBlock
        colorBlock="color__block-blue"
        text="FIGMA"
        text2="ADOBE"
      />
    </div>
  );
};

export default ColorTextBlocks;
