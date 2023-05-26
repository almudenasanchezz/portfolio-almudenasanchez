import "./landing.scss";
import Accordion from "../../components/accordion/Accordion";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import IconArrow from "../../components/icons/IconArrow";
import IconArrowBlack from "../../components/icons/IconArrowBlack";
import TertiaryButton from "../../components/buttons/TertiaryButton";
import TextImageBlocks from "../../components/text-image-block/TextImageBlocks";

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
            <PrimaryButton text="Contact now" route={`/contact`} />
            <SecondaryButton text="Download CV" />
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
        <TextImageBlocks />
      </section>
      <section className="landing">
        <h2 className="h2">ABOUT ME</h2>
        <div className="about__container">
          <div className="about__container__img"></div>
          <div className="about__container__content">
            <p className="about__container__content__text">
              I am a frontend web developer and ui designer with a background as
              an engineer. I have always been passionate about technology and
              design, which is why I enjoy creating attractive and accessible
              websites. I am passionate about learning new things and improving
              myself.
            </p>
            <SecondaryButton
              text="Know more"
              icon={<IconArrow />}
              route={`/about`}
            />
          </div>
        </div>
      </section>
      <section className="centered__text">
        <p className="contact__text">LET'S CREATE TOGETHER</p>
        <SecondaryButton
          text="Get in touch"
          icon={<IconArrow />}
          route={`/contact`}
        />
      </section>
    </>
  );
}

export default Landing;
