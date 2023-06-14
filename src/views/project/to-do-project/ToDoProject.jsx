import "../../project/project.scss";
import "../../../components/text-image-block/text-image-block.scss";
import TextImageProjectBlock from "../../../components/text-image-block/TextImageProjectBlock";
import toDo from "../../../images/todo-color.jpg";
import toDo2 from "../../../images/todo-imac.jpg";
import toDo3 from "../../../images/todo-active.jpg";
import toDo4 from "../../../images/todo-completed.jpg";
import ProcessPart from "../../../components/space-text-block/ProcessPart";

function ToDoProject(props) {
  return (
    <>
      <section className="image__content__block landing">
        <TextImageProjectBlock
          title="TO DO LIST"
          paragraph="This application consists of generating a list of tasks managed by the user. It includes features like adding tasks, viewing active and completed tasks, and removing tasks from the list. "
          category1="Languages"
          categoryContent1="Javascript"
          category2="Year"
          categoryContent2="2023"
          to={`https://github.com/almudenasanchezz/todo-list-almudena.git`}
          text="Github"
          src={toDo}
          alt="A photo of me"
        />
      </section>
      <section className="trio__block landing">
        <ProcessPart
          showCategory="show__category"
          category="CHALLENGE"
          textBlock="trio__single__block"
          title="h3"
          titleText="IMPLEMENT FUNCIONALITY"
          text="The challenge is to implement the functionality to add tasks, mark tasks complete, and remove tasks from the list, all using JavaScript and HTML and CSS for the layout and presentation of the list."
        />
        <ProcessPart
          showCategory="show__category"
          category="GOAL"
          textBlock="trio__single__block"
          title="h3"
          titleText="FUNCTIONAL AND PRACTICAL TOOL"
          text="The objective is to allow the user to create, organize and manage their tasks effectively, improving their productivity and helping them to stay organized."
        />
        <ProcessPart
          showCategory="show__category"
          category="RESULT"
          textBlock="trio__single__block"
          title="h3"
          titleText="INTERACTIVE APPLICATION"
          text="An interactive and easy to use application that helps the user to stay organized and manage their time effectively. "
        />
      </section>
      <section className="center__section landing">
        <p className="h1">GALLERY</p>
        <div className="full__page__container">
          <div className="full__page__img">
            <img className="img" src={toDo2} alt="" />
          </div>
          <div className="full__page__img">
            <img className="img" src={toDo3} alt="" />
          </div>
          <div className="full__page__img">
            <img className="img" src={toDo4} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ToDoProject;
