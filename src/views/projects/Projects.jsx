import "./projects.scss";
import IconArrowBlack from "../../components/icons/IconArrowBlack";
import TertiaryButton from "../../components/buttons/TertiaryButton";

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

        <div className="projects__container">
          <div className="project">
            <div className="project__image"></div>
            <div className="project__content">
              <div className="project__title">
                <p className="project__title__language">Javascript | React</p>
                <p className="project__title__exercise">1. To do list</p>
                <div className="project__btn__container">
                  <TertiaryButton
                    text="View project"
                    icon={<IconArrowBlack />}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project__content">
              <div className="project__title">
                <p className="project__title__language">React</p>
                <p className="project__title__exercise">2. Calculator</p>
                <div className="project__btn__container">
                  <TertiaryButton
                    text="View project"
                    icon={<IconArrowBlack />}
                  />
                </div>
              </div>
            </div>
            <div className="project__image"></div>
          </div>
          <div className="project">
            <div className="project__image"></div>
            <div className="project__content">
              <div className="project__title">
                <p className="project__title__language">Figma</p>
                <p className="project__title__exercise">3. Web redesign</p>
                <div className="project__btn__container">
                  <TertiaryButton
                    text="View project"
                    icon={<IconArrowBlack />}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project__content">
              <div className="project__title">
                <p className="project__title__language">React</p>
                <p className="project__title__exercise">4. To do list</p>
                <div className="project__btn__container">
                  <TertiaryButton
                    text="View project"
                    icon={<IconArrowBlack />}
                  />
                </div>
              </div>
            </div>
            <div className="project__image"></div>
          </div>
          <div className="project">
            <div className="project__image"></div>
            <div className="project__content">
              <div className="project__title">
                <p className="project__title__language">Javascript</p>
                <p className="project__title__exercise">5. To do list</p>
                <div className="project__btn__container">
                  <TertiaryButton
                    text="View project"
                    icon={<IconArrowBlack />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
