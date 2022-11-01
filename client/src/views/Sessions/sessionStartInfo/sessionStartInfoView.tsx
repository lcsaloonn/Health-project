import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SessionInfoHeaderComponent } from "components/zcomposite/session";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DifficultyEnum } from "utils/types/enums/difficulty.enum";
import { BodyPartEnum } from "utils/types/exercice/bodyPart.enum";
import "./sessionStartInfoView.scss";

const mock = {
  time: 45,
  level: [DifficultyEnum.DEBUTANT, DifficultyEnum.INTERMEDIAIRE], // 2 max
  calories: 145,
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio amet culpa eveniet itaque voluptatem autem et quam quod optio a, reiciendis laborum saepe tenetur error maxime magni aspernatur harum soluta?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quo saepe nisi in minus quasi aperiam at cumque nostrum, maiores aliquam debitis nesciunt, perferendis adipisci voluptatum facilis doloribus itaque quod.",
  bodyPart: [
    BodyPartEnum.BRAS,
    BodyPartEnum.DOS,
    BodyPartEnum.JAMBES,
    BodyPartEnum.EPAULE,
    BodyPartEnum.PEC,
  ],
  exercices: [
    {
      img: "developpe-couche-exercice-pectoraux.jpg",
      title: "Développer couché haltère",
      link: "#",
    },
    {
      img: "developpe-couche-exercice-pectoraux.jpg",
      title: "Développer couché haltère",
      link: "#",
    },
  ],
};

export function SessionStartInfoView() {
  const [isTrigger, setBtnTrigger] = useState(false);

  return (
    <div className="session-info main-container">
      <div className="session-info-header">
        <div className="session-info-header-title">Session test</div>
        <div className="session-info-header-subtitle">
          Cette session vous permet de développer
        </div>
        <button className="session-info-header-btn">Commencer</button>
      </div>

      <div className="session-info-content">
        <SessionInfoHeaderComponent
          time={mock.time}
          level={mock.level}
          calories={mock.calories}
        />
        <div className="session-info-content-text">{mock.description}</div>

        <div className="session-info-content-bodyPart">
          {mock.bodyPart.map((item: string, key: number) => (
            <span key={key} className="session-info-content-bodyPart-item">
              {item}
            </span>
          ))}
        </div>

        <div className="session-info-content-pop">
          Ce que vous allez faire
          <FontAwesomeIcon
            className="session-info-content-pop-icon"
            icon={isTrigger ? faAngleUp : faAngleDown}
            onClick={() => {
              setBtnTrigger(!isTrigger);
            }}
          />
        </div>

        <div className={isTrigger ? "session-info-exercices" : "hidden"}>
          <div className="session-info-exercices-title">
            Bloc d'entrainement
          </div>

          {mock.exercices.map(
            (
              item: { img: string; title: string; link: string },
              key: number
            ) => (
              <div className="session-info-exercices-item-container" key={key}>
                <div className="session-info-exercices-item">
                  <img src={"../assets/img/" + item.img} alt="#" />
                  <span className="session-info-exercices-item-title">
                    {item.title}
                    <Link
                      to={item.link}
                      className="session-info-exercices-item-title-link"
                    >
                      en savoir plus
                    </Link>
                  </span>
                </div>
                <div className="hr mt-5 mb-5"></div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
