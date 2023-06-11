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
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus nulla eleifend posuere feugiat. "
          category1="Languages"
          categoryContent1="React | Javascript"
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
          titleText="LOREM IPSUM DOLOR SIT AMET"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus nulla eleifend posuere feugiat. Duis imperdiet sed odio a semper. In hac habitasse platea dictumst. Sed pellentesque accumsan tortor a pretium. Mauris lobortis enim eu ipsum mollis dictum. Nulla varius nisl erat, eget pharetra risus viverra sit. "
        />
        <ProcessPart
          showCategory="show__category"
          category="GOAL"
          textBlock="trio__single__block"
          title="h3"
          titleText="LOREM IPSUM DOLOR SIT AMET"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus nulla eleifend posuere feugiat. Duis imperdiet sed odio a semper. In hac habitasse platea dictumst. Sed pellentesque accumsan tortor a pretium. Mauris lobortis enim eu ipsum mollis dictum. Nulla varius nisl erat, eget pharetra risus viverra sit. "
        />
        <ProcessPart
          showCategory="show__category"
          category="RESULT"
          textBlock="trio__single__block"
          title="h3"
          titleText="LOREM IPSUM DOLOR SIT AMET"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus nulla eleifend posuere feugiat. Duis imperdiet sed odio a semper. In hac habitasse platea dictumst. Sed pellentesque accumsan tortor a pretium. Mauris lobortis enim eu ipsum mollis dictum. Nulla varius nisl erat, eget pharetra risus viverra sit. "
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
