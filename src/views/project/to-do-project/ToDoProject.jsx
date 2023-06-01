import "../../project/project.scss";
import "../../../components/text-image-block/text-image-block.scss";
import TextImageProjectBlock from "../../../components/text-image-block/TextImageProjectBlock";
import me from "../../../images/me.jpg";

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
          to={props.to}
          text="Github"
          src={me}
          alt="A photo of me"
        />
      </section>
    </>
  );
}

export default ToDoProject;
