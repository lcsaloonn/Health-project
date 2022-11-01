import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faChartSimple,
  faFireFlameCurved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sessionInfoHeader.scss";

export function SessionInfoHeaderComponent({
  time,
  level,
  calories,
}: {
  time: number;
  level: string[];
  calories: number;
}) {
  return (
    <div className="session-information-header">
      <div className="session-information-header-content">
        <FontAwesomeIcon
          className="session-information-header-content-icon"
          size="2x"
          icon={faClock}
        />
        <span className="session-information-header-content-main">
          {time} min
        </span>
        <span className="session-information-header-content-sub">Durée</span>
      </div>

      <div className="session-information-header-content">
        <FontAwesomeIcon
          className="session-information-header-content-icon"
          size="2x"
          icon={faChartSimple}
        />
        <span className="session-information-header-content-main">
          {level.map((item: string, key: number) => (
            <span key={key}>
              {item} {key !== level.length - 1 ? "-" : ""}{" "}
            </span>
          ))}
        </span>
        <span className="session-information-header-content-sub">Niveau</span>
      </div>

      <div className="session-information-header-content">
        <FontAwesomeIcon
          className="session-information-header-content-icon"
          size="2x"
          icon={faFireFlameCurved}
        />
        <span className="session-information-header-content-main">
          {calories}
        </span>
        <span className="session-information-header-content-sub">Calories</span>
      </div>
    </div>
  );
}
