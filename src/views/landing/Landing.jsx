import "./landing.scss";
import Accordion from "../../components/accordion/Accordion";
import Button from "../../components/buttons/Button";
import IconArrow from "../../components/icons/IconArrow";
import TextImageLessBlocks from "../../components/text-image-block/TextImageLessBlocks";
import TextImageAboutBlock from "../../components/text-image-block/TextImageAboutBlock";
import me from "../../images/me-homepage-2.jpg";
import Space4TextBlock from "../../components/space-text-block/Space4TextBlock";

function Landing() {
  return (
    <>
      <section className="landing">
        <h1 className="h1">
          <div className="inner__headings">
            <span>
              FRONTEND DEVELOPER <br /> UX/UI <br /> DESIGNER
            </span>
          </div>
        </h1>
        <div className="home__container">
          <div className="info">
            <p className="info-text">ALMUDENA SÁNCHEZ</p>
            <p className="info-text">BASED IN SPAIN</p>
          </div>
          <div className="buttons">
            <Button
              type="btn btn__primary"
              text="Contact now"
              to={`/contact`}
            />
            <Button type="btn btn__secondary" text="Download CV" />
          </div>
        </div>
      </section>
      <section className="landing">
        <h2 className="h2">SERVICES</h2>
        <Accordion />
      </section>
      <section className="landing">
        <h2 className="h2">PROCESS</h2>
        <Space4TextBlock />
      </section>
      <section className="landing">
        <h2 className="h2">PROJECTS</h2>
        <TextImageLessBlocks />
      </section>
      <section className="landing">
        <h2 className="h2">ABOUT ME</h2>
        <TextImageAboutBlock
          column="img__to__left"
          columnImage="project__image"
          textColumn="about__content"
          text="about__content__text"
          src={me}
          alt="A personal photo of me"
          paragraph="I am a frontend web developer and ui designer with a background as
              an engineer. I have always been passionate about technology and
              design, which is why I enjoy creating attractive and accessible
              websites. I am passionate about learning new things and improving
              myself."
          type="btn btn__secondary"
        />
      </section>
      <section className="centered__text">
        <p className="contact__text">LET'S CREATE TOGETHER</p>
        <Button
          type="btn btn__secondary"
          text="Get in touch"
          icon={<IconArrow />}
          to={`/contact`}
        />
      </section>
    </>
  );
}

export default Landing;
