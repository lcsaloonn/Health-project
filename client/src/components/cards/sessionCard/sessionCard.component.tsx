import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRaitingCompponent from "components/starRaiting/starRaiting";
import { Link } from "react-router-dom";
import "./sessionCard.scss";

const mock = {
  bodypart: ["Bras", "Dos", "Pecs", "Pecs"],
};
export function SessionCardComponent() {
  return (
    <Link className="session-card" to="#">
      <div className="session-card-img">
        <img src="./assets/img/programs/test.jpg" alt="#" />
      </div>
      <div className="session-card-title"> Session Test</div>
      <div className="session-card-bodyPart grid gap-2 grid-cols-3">
        <div className="session-card-bodyPart-title col-span-3">
          Partie du corps:
        </div>
        {mock.bodypart.map((element: string, key: number) => (
          <div className="session-card-bodyPart-item" key={key}>
            {element}
          </div>
        ))}
      </div>
      <div className="session-card-time">
        <FontAwesomeIcon icon={faClock} className="program-card-time-icon" />
        2h30
      </div>
      <div className="session-card-stars">
        <span>Difficulté</span>
        <StarRaitingCompponent num={5} />
      </div>
    </Link>
  );
}
