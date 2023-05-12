import "./landing.scss";

function Landing() {
  return (
    <section className="landing">
      <h1 className="h1">FRONTEND DEVELOPER</h1>
      <div className="info">
        <p className="info-text">ALMUDENA SÁNCHEZ</p>
        <p className="info-text">BASED IN SPAIN</p>
      </div>
      <div className="buttons">
        <button className="primary-button">Contact now</button>
        <button className="secondary-button">Download CV</button>
      </div>
    </section>
  );
}

export default Landing;
