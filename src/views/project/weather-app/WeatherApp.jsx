import "../../project/project.scss";
import "../../../components/text-image-block/text-image-block.scss";
import TextImageProjectBlock from "../../../components/text-image-block/TextImageProjectBlock";
import weather from "../../../images/weather-color.jpg";
import weather2 from "../../../images/weather-mobile.png";
import weather3 from "../../../images/weather-mac-mobile.png";
import weather4 from "../../../images/weather-writing.png";
import ProcessPart from "../../../components/space-text-block/ProcessPart";

function WeatherApp(props) {
  return (
    <>
      <section className="image__content__block landing">
        <TextImageProjectBlock
          title="WEATHER APP"
          paragraph="The weather app I developed is a user-friendly web application that provides weather information for any location around the world. It allows users to quickly access weather data, including temperature, humidity, real feel... The app's intuitive design and seamless user experience make it a valuable tool for anyone who wants to stay informed about the weather conditions. "
          category1="Languages"
          categoryContent1="React"
          category2="Year"
          categoryContent2="2023"
          to={`https://github.com/almudenasanchezz/weather-app-react.git`}
          text="Github"
          src={weather}
          alt="A photo of weather app"
        />
      </section>
      <section className="trio__block landing">
        <ProcessPart
          showCategory="show__category"
          category="CHALLENGE"
          textBlock="trio__single__block"
          title="h3"
          titleText="API INTEGRATION & RETRIEVAL"
          text="I have researched and selected an API that will provide me with the information you need. Plus, analyze and display data in a visually appealing and easily understandable format."
        />
        <ProcessPart
          showCategory="show__category"
          category="GOAL"
          textBlock="trio__single__block"
          title="h3"
          titleText="WEATHER APP DEVELOPMENT"
          text="Provide users with accurate and up-to-date information about weather conditions for a specific location "
        />
        <ProcessPart
          showCategory="show__category"
          category="RESULT"
          textBlock="trio__single__block"
          title="h3"
          titleText="TOTALLY USEFUL APP"
          text="The weather app I developed using React and JavaScript provides users with weather data for any location. "
        />
      </section>
      <section className="center__section landing">
        <p className="h1">GALLERY</p>
        <div className="full__page__container">
          <div className="full__page__img">
            <img className="img" src={weather2} alt="" />
          </div>
          <div className="full__page__img">
            <img className="img" src={weather3} alt="" />
          </div>
          <div className="full__page__img">
            <img className="img" src={weather4} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default WeatherApp;
