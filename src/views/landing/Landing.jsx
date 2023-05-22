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
    </>
  );
}

export default Landing;
