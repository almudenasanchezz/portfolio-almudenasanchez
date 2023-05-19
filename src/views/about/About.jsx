import "./about.scss";

function About() {
  return (
    <section className="landing">
      <h2 className="h2">ABOUT</h2>
      <div className="intro__about">
        <div className="intro__about__left"></div>
        <div className="intro__about__right">
          <div className="intro__about__right__photo"></div>
          <div className="intro__about__right__text">
            I am a frontend web developer and ui designer with a background as
            an engineer. I have always been passionate about technology and
            design, which is why I enjoy creating attractive and accessible
            websites. I am passionate about learning new things and improving
            myself.
          </div>
        </div>
      </div>

      <h2 className="h2">HARD SKILLS</h2>
      <div className="hs__container">
        <div className="hskill">
          <div className="hskill__color-red"></div>
          <div className="hskill__info">
            <p className="hskill__info__text">HTML</p>
          </div>
        </div>
        <div className="hskill">
          <div className="hskill__color-green"></div>
          <div className="hskill__info">
            <p className="hskill__info__text">CSS</p>
            <p className="hskill__info__text">SCSS</p>
          </div>
        </div>
        <div className="hskill">
          <div className="hskill__color-pink"></div>
          <div className="hskill__info">
            <p className="hskill__info__text">JAVASCRIPT</p>
            <p className="hskill__info__text">REACT</p>
          </div>
        </div>
        <div className="hskill">
          <div className="hskill__color-blue"></div>
          <div className="hskill__info">
            <p className="hskill__info__text">FIGMA</p>
            <p className="hskill__info__text">ADOBE</p>
          </div>
        </div>
      </div>
      <h2 className="h2">SOFT SKILLS</h2>
    </section>
  );
}

export default About;
