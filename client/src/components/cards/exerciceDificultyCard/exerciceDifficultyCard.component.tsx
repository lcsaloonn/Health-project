import {
  faChartLine,
  faChartSimple,
  faClock,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./exerciceDifficultyCard.scss";

export type ExerciceDifficultyType = {
  level: string;
  recovery: number;
  sets: number;
  repetition: number;
  weight: string;
};

export function ExerciceDifficultyCardComponent({
  props,
}: {
  props: ExerciceDifficultyType[];
}) {
  if (props.length !== 3) {
    return null;
  } else {
    return (
      <div className="ex-difficulty-card">
        {props.map((element: ExerciceDifficultyType, key: number) => (
          <div
            className="ex-difficulty-card-second"
            key={key}
            data-testid={"card" + key}
          >
            <div className="ex-difficulty-card-second-title">
              {element.level}
            </div>
            <div className="ex-difficulty-card-second-element">
              <FontAwesomeIcon
                icon={faClock}
                className="ex-difficulty-card-second-icon"
              />
              récupération {element.recovery} minutes
            </div>
            <div className="ex-difficulty-card-second-element">
              <FontAwesomeIcon
                icon={faChartLine}
                className="ex-difficulty-card-second-icon"
              />
              série : {element.sets}
            </div>
            <div className="ex-difficulty-card-second-element">
              <FontAwesomeIcon
                icon={faChartSimple}
                className="ex-difficulty-card-second-icon"
              />
              répétition: {element.repetition}
            </div>
            <div className="ex-difficulty-card-second-element">
              <FontAwesomeIcon
                icon={faDumbbell}
                className="ex-difficulty-card-second-icon"
              />
              poid: {element.weight}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
