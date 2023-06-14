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
          paragraph="Daikiri is an online store of unique handmade jewelry at an affordable price that aims to reflect the personality of the user at all times."
          category1="Languages"
          categoryContent1="Figma | Wordpress"
          category2="Year"
          categoryContent2="2023"
          to={`https://esatdev.com/2022/almudena/daikiri-fse/`}
          text="View project"
          src={daikiri}
          alt="Desktop and mobile mockups of the web"
        />
      </section>
      <section className="trio__block landing">
        <ProcessPart
          showCategory="show__category"
          category="CHALLENGE"
          textBlock="trio__single__block"
          title="h3"
          titleText="ATRACTIVE WEB"
          text="The challenge is to design an attractive and easy-to-use platform that effectively showcases the uniqueness and beauty of handmade jewelry."
        />
        <ProcessPart
          showCategory="show__category"
          category="GOAL"
          textBlock="trio__single__block"
          title="h3"
          titleText="EASY NAVIGATION"
          text="Facilitate the browsing and shopping experience, allowing customers to easily find and purchase pieces that reflect their personality."
        />
        <ProcessPart
          showCategory="show__category"
          category="RESULT"
          textBlock="trio__single__block"
          title="h3"
          titleText="FUNCTIONAL PLATFORM"
          text="Functional and attractive online platform that effectively presents the variety of unique and handmade jewelry available. Plus, it provides a seamless browsing experience, making it easy for customers to find and buy the pieces that reflect their personality."
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
