import "./landing.scss";
import Accordion from "../../components/accordion/Accordion";

function Landing() {
  return (
    <>
      <section className="landing">
        <h1 className="h1">FRONTEND DEVELOPER</h1>
        <div className="home__container">
          <div className="info">
            <p className="info-text">ALMUDENA SÁNCHEZ</p>
            <p className="info-text">BASED IN SPAIN</p>
          </div>
          <div className="buttons">
            <button className="primary-button">Contact now</button>
            <button className="secondary-button">Download CV</button>
          </div>
        </div>
      </section>
      <section className="landing">
        <h2 className="h2">SERVICES</h2>
        <Accordion />
      </section>
      <section className="landing">
        <h2 className="h2">PROCESS</h2>
        <div className="containers">
          <div className="empty__container"></div>
          <div className="content__container">
            <div className="content__container__top">
              <div className="content__text">
                <h4 className="h4">Briefing</h4>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque ac malesuada dolor, quis laoreet purus.
                </p>
              </div>
              <div className="content__text">
                <h4 className="h4">Analysis</h4>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque ac malesuada dolor, quis laoreet purus.
                </p>
              </div>
            </div>
            <div className="content__container__bottom">
              <div className="content__text">
                <h4 className="h4">Prototyping</h4>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque ac malesuada dolor, quis laoreet purus.
                </p>
              </div>
              <div className="content__text">
                <h4 className="h4">Final Part</h4>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque ac malesuada dolor, quis laoreet purus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="landing">
        <h2 className="h2">PROJECTS</h2>
        <div className="projects__container">
          <div className="project">
            <div className="project__image"></div>
            <div className="project__content">
              <div className="project__title">
                <p className="project__title__language">Javascript | React</p>
                <p className="project__title__exercise">1. To do list</p>
                <div className="project__btn__container">
                  <p className="project__btn__container__icon">icono</p>
                  <button className="project__btn__container__btn">
                    View project
                  </button>
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
                  <p className="project__btn__container__icon">icono</p>
                  <button className="project__btn__container__btn">
                    View project
                  </button>
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
                  <p className="project__btn__container__icon">icono</p>
                  <button className="project__btn__container__btn">
                    View project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
