import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRaitingCompponent from "components/starRaiting/starRaiting";
import { Link } from "react-router-dom";
import "./programCard.scss";

const mock = {
  bodypart: ["Bras", "Dos", "Pecs", "Pecs"],
};
export function ProgramCardComponent() {
  return (
    <Link className="program-card" to="#">
      <div className="program-card-img">
        <img src="./assets/img/programs/test.jpg" alt="#" />
      </div>
      <div className="program-card-title"> Programme Push Pull Leg</div>
      <div className="program-card-bodyPart grid gap-2 grid-cols-3">
        <div className="program-card-bodyPart-title col-span-3">
          Partie du corps:
        </div>
        {mock.bodypart.map((element: string, key: number) => (
          <div className="program-card-bodyPart-item" key={key}>
            {element}
          </div>
        ))}
      </div>
      <div className="program-card-time">
        <FontAwesomeIcon icon={faClock} className="program-card-time-icon" />
        2h30
      </div>
      <div className="program-card-stars">
        <span>Difficulté</span>
        <StarRaitingCompponent num={5} />
      </div>
    </Link>
  );
}
