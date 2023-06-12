import "./accordion.scss";
import { useState } from "react";

function AccordionAbout() {
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
    title: "ABILITY TO WORK IN A TEAM",
    content:
      "In most of the projects that I have participated in, they have been in teams. I believe that this practice is enriching for all those who participate in it, since ideas are shared and knowledge is acquired in a much more efficient way.",
  },
  {
    title: "EMPATHY",
    content:
      "Empathy is one of the values ​​that has always been present in me since I was very little. I have always understood and shared the emotions of others, showing concern for their well-being.",
  },
  {
    title: "ABILITY TO WORK UNDER PRESSURE",
    content:
      "I consider myself a person capable of working under pressure due to my ability to remain calm, make quick and efficient decisions, and maintain a productive approach even in difficult situations.",
  },
  {
    title: "GOOD TIME MANAGEMENT AND ORGANIZATION",
    content:
      "One of my priorities before starting a project is to plan the entire process, establishing priorities according to the time available. I always try to meet deadlines consistently, showing commitment and giving my all to each task.",
  },
  {
    title: "PROBLEM RESOLUTION",
    content:
      "Every time a problem arises, I put into practice my ability to analyze and address it, seeking practical solutions with initiative.",
  },
];

export default AccordionAbout;
