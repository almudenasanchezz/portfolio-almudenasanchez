import "./projects.scss";
import TextImageBlocks from "../../components/text-image-block/TextImageBlocks";
import SpaceTextBlock from "../../components/space-text-block/SpaceTextBlock";

function Projects() {
  return (
    <section className="landing">
      <h2 className="h2">PROJECTS</h2>
      <div className="projects__page__content">
        <SpaceTextBlock
          text="This is a showcase of my most recent and noteworthy projects.
              Here, you'll find a collection of projects that showcase my skills
              and expertise in areas such as web development, product designer
              and digital marketing. Each project features a brief description
              of the project, its objectives, and the technologies and tools
              used to complete it."
        />
        <TextImageBlocks />
      </div>
    </section>
  );
}

export default Projects;
