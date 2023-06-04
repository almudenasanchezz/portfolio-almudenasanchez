import "./about.scss";
import Button from "../../components/buttons/Button";
import IconArrow from "../../components/icons/IconArrow";
import TextImageAboutBlock from "../../components/text-image-block/TextImageAboutBlock";
import me from "../../images/me.jpg";
import ColorTextBlocks from "../../components/color-text-block/ColorTextBlocks";
import AccordionAbout from "../../components/accordion/AccordionAbout";

function About() {
  return (
    <>
      <section className="landing">
        <div className="intro__about">
          <div className="intro__about__left">
            <div className="intro__about__left__content">
              <p className="first__word">creative,</p>
              <p className="second__word">innovative</p>
              <p className="third__word">&</p>
              <p className="fourth__word">tech lover</p>
            </div>
          </div>
          <TextImageAboutBlock
            column="column__true"
            textColumn="about__content__column"
            text="about__content__column__text"
            columnImage="project__image__column"
            paragraph="I am a frontend web developer and ui designer with a background as
              an engineer. I have always been passionate about technology and
              design, which is why I enjoy creating attractive and accessible
              websites. I am passionate about learning new things and improving
              myself."
            type="btn__none"
            src={me}
            alt="a photo of me"
          />
        </div>
      </section>
      <section className="landing">
        <h2 className="h2">HARD SKILLS</h2>
        <ColorTextBlocks />
      </section>
      <section className="landing">
        <h2 className="h2">SOFT SKILLS</h2>
        <AccordionAbout />
      </section>
      <section className="landing">
        <p className="description__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet
          nisi erat, ac mollis elit ullamcorper nec. Nullam quis ex elit.
          Praesent in turpis sollicitudin, rutrum dolor a, rutrum ex. Morbi
          iaculis ultricies orci. Quisque ac elit nec sem vestibulum tristique
          quis a erat. Donec sapien nisi, lacinia quis lectus ac, sodales
          euismod arcu. Donec porta finibus est, eget consectetur dolor
          consectetur vel. Integer sed convallis neque.
        </p>
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

export default About;
