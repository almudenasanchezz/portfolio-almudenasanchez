import "../../project/project.scss";
import "../../../components/text-image-block/text-image-block.scss";
import TextImageProjectBlock from "../../../components/text-image-block/TextImageProjectBlock";
import daikiri from "../../../images/daikiri-color.jpg";
import daikiri2 from "../../../images/daikiri-2.png";
import daikiriProducts from "../../../images/daikiri-products.jpg";
import ProcessPart from "../../../components/space-text-block/ProcessPart";

function DaikiriProject(props) {
  return (
    <>
      <section className="image__content__block landing">
        <TextImageProjectBlock
          title="DAIKIRI"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus nulla eleifend posuere feugiat. "
          category1="Languages"
          categoryContent1="Figma | Wordpress"
          category2="Year"
          categoryContent2="2023"
          to={`https://esatdev.com/2022/almudena/daikiri-fse/`}
          text="View project"
          src={daikiri}
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
            <img className="img" src={daikiri2} alt="" />
          </div>
          <div className="full__page__img">
            <img className="img" src={daikiriProducts} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default DaikiriProject;
