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
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus nulla eleifend posuere feugiat. "
          category1="Languages"
          categoryContent1="React"
          category2="Year"
          categoryContent2="2023"
          to={props.to}
          text="Github"
          src={weather}
          alt="A photo of me"
        />
      </section>
      <section className="trio__block landing">
        <ProcessPart
          showCategory="show__category"
          category="CHALLENGE"
          textBlock="trio__single__block"
          title="h3"
          titleText="LOREM IPSUM DOLOR SIT AMET"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus nulla eleifend posuere feugiat. Duis imperdiet sed odio a semper. In hac habitasse platea dictumst. Sed pellentesque accumsan tortor a pretium. Mauris lobortis enim eu ipsum mollis dictum. Nulla varius nisl erat, eget pharetra risus viverra sit. "
        />
        <ProcessPart
          showCategory="show__category"
          category="GOAL"
          textBlock="trio__single__block"
          title="h3"
          titleText="LOREM IPSUM DOLOR SIT AMET"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus nulla eleifend posuere feugiat. Duis imperdiet sed odio a semper. In hac habitasse platea dictumst. Sed pellentesque accumsan tortor a pretium. Mauris lobortis enim eu ipsum mollis dictum. Nulla varius nisl erat, eget pharetra risus viverra sit. "
        />
        <ProcessPart
          showCategory="show__category"
          category="RESULT"
          textBlock="trio__single__block"
          title="h3"
          titleText="LOREM IPSUM DOLOR SIT AMET"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus nulla eleifend posuere feugiat. Duis imperdiet sed odio a semper. In hac habitasse platea dictumst. Sed pellentesque accumsan tortor a pretium. Mauris lobortis enim eu ipsum mollis dictum. Nulla varius nisl erat, eget pharetra risus viverra sit. "
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
