import "./contact.scss";
import Button from "../../components/buttons/Button";
import IconArrow from "../../components/icons/IconArrow";

function Contact() {
  return (
    <section className="landing contact__content">
      <div className="contact__text">
        <h2 className="h2 contact">
          LET'S WORK <br></br> TOGETHER
        </h2>
      </div>
      <div className="contact__buttons">
        <Button
          type="btn btn__primary btn__pink"
          to={`mailto:sanchezgallegoalmudena@gmail.com`}
          text="EMAIL ME"
          icon={<IconArrow />}
        />
        <Button
          type="btn btn__secondary"
          to={`https://www.linkedin.com/in/almudena-sánchez-gallego-0a0bb9213/`}
          newTab
          text="LINKEDIN"
          icon={<IconArrow />}
        />
        <Button
          type="btn btn__secondary"
          to={`https://www.behance.net/almudenasanchez?isa0=1`}
          newTab
          text="BEHANCE"
          icon={<IconArrow />}
        />
        <Button
          type="btn btn__secondary"
          to={`https://github.com/almudenasanchezz`}
          newTab
          text="GITHUB"
          icon={<IconArrow />}
        />
      </div>
      <svg
        className="circles"
        xmlns="http://www.w3.org/2000/svg"
        width="632"
        height="503"
        fill="none"
      >
        <path
          stroke="#D9D9D9"
          stroke-dasharray="20 20"
          d="M385.667 502.298c61.593-106.681 25.189-243.009-81.311-304.497-106.5-61.487-242.765-24.85-304.358 81.831"
        />
        <path
          stroke="#D9D9D9"
          d="M285 482c0-94.993 77.455-172 173-172s173 77.007 173 172M0 1c95.545 0 173 77.23 173 172.5C173 268.769 95.545 346 0 346"
        />
      </svg>
    </section>
  );
}

export default Contact;
