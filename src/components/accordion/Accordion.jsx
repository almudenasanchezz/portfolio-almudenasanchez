import "./accordion.scss";
import { useState } from "react";

function Accordion() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="accordion">
      {data.map((item, i) => (
        <div className="item">
          <div className="title" onClick={() => toggle(i)}>
            <h3 className="h3">{item.title}</h3>
            <span className="plus__icon">{selected === i ? "-" : "+"}</span>
          </div>
          <div className={selected === i ? "content show" : "content"}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}

const data = [
  {
    title: "UX/UI DESIGN",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis eros in metus sagittis consectetur. Curabitur lorem dolor, placerat nec tempus et, pellentesque et arcu. Praesent at maximus diam. Integer tempor pellentesque magna, vitae interdum urna semper eget. Sed arcu mauris, laoreet sed efficitur quis, luctus a felis.",
  },
  {
    title: "WEB DEVELOPMENT",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis eros in metus sagittis consectetur. Curabitur lorem dolor, placerat nec tempus et, pellentesque et arcu. Praesent at maximus diam. Integer tempor pellentesque magna, vitae interdum urna semper eget. Sed arcu mauris, laoreet sed efficitur quis, luctus a felis.",
  },
];

export default Accordion;
