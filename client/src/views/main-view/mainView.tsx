import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BasicButton } from "components/buttons";
import { GalleryCategory } from "components/gallery";
import { galleryMock } from "Mocks/galleryCategory.mock";
import { ButtonStyleEnum } from "utils/types/enums/buttonStyleEnum";
import "./mainView.scss";

const MainView = () => {
  const statsArray = [
    {
      number: 140,
      title: "EXPERT COACHES",
    },
    {
      number: 978,
      title: "Members joined",
    },
    {
      number: 50,
      title: "fitness programs",
    },
  ];
  const dataGallery = galleryMock;

  const checkIcon = (
    <FontAwesomeIcon icon={faCheck} size="2x" className="icon" />
  );

  return (
    <div className="home main-container">
      <div className="slogan">
        <span className="transparent">Shape</span>
        <span className="full"> Your</span>
        <div className="full">Ideal Body</div>
      </div>

      <div className="cummon-text">
        In here we will help you to shape and build your ideal body and live up
        your life to fullest
      </div>

      <div className="stats-container">
        {statsArray.map(
          (stat: { number: number; title: string }, i: number) => (
            <div className="stats" key={i}>
              <div className="stats-number">+ {stat.number}</div>
              <div className="stats-text">{stat.title}</div>
            </div>
          )
        )}
      </div>

      <div className="hero-button">
        <BasicButton
          children="Get started"
          onClick={() => {
            console.log("click");
          }}
          buttonStyle={ButtonStyleEnum.PRIMARY}
        ></BasicButton>
        <BasicButton
          children="Learn more"
          onClick={() => {
            console.log("click");
          }}
          buttonStyle={ButtonStyleEnum.SECONDARY}
        ></BasicButton>
      </div>

      <div className="programs-header">
        <span className="transparent">Explore our</span>
        <span className="full">Programs</span>
        <span className="transparent"> to share you</span>
      </div>

      <GalleryCategory data={dataGallery}></GalleryCategory>

      <div className="reasons">
        <span>Some Reasons</span>
        <div>
          <span className="transparent">Why </span>
          <span className="full">Choose us?</span>
        </div>
        <div className="details">
          <div>
            {checkIcon}
            <span>Over 140+ expert coaches</span>
          </div>
          <div>
            {checkIcon}
            <span>train smarter and faster than before</span>
          </div>
          <div>
            {checkIcon}
            <span>1 free program for new member</span>
          </div>
          <div>
            {checkIcon}
            <span>reliable partners</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainView;
