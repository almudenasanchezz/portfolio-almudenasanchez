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
            <span className="h3">{selected === i ? "-" : "+"}</span>
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
      "I offer high-quality UX/UI design services to create impactful digital experiences. My approach is focused on understanding the needs of users and designing intuitive and attractive interfaces. From research and wireframing to visual design and implementation.",
  },
  {
    title: "WEB DEVELOPMENT",
    content:
      "As a frontend developer, I offer modern and responsive website and application creation services. Using technologies like HTML, CSS and JavaScript, I make sure that your project has an attractive design and impeccable functionality. From layout to performance optimization.",
  },
];

export default Accordion;
