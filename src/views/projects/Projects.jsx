import "./projects.scss";
import TextImageBlocks from "../../components/text-image-block/TextImageBlocks";

function Projects() {
  return (
    <section className="landing">
      <h2 className="h2">PROJECTS</h2>
      <div className="projects__page__content">
        <div className="intro__container">
          <div className="intro__container__left"></div>
          <div className="intro__container__right">
            <p className="intro__container__right__paragraph">
              This is a showcase of my most recent and noteworthy projects.
              Here, you'll find a collection of projects that showcase my skills
              and expertise in areas such as web development, product designer
              and digital marketing. Each project features a brief description
              of the project, its objectives, and the technologies and tools
              used to complete it.
            </p>
          </div>
        </div>

        <TextImageBlocks />
      </div>
    </section>
  );
}

export default Projects;
