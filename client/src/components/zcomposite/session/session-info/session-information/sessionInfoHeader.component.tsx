import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faChartSimple,
  faFireFlameCurved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sessionInfoHeader.scss";

export function SessionInfoHeaderComponent() {
  return (
    <div className="session-information-header">
      <div className="session-information-header-content">
        <FontAwesomeIcon
          className="session-information-header-content-icon"
          size="2x"
          icon={faClock}
        />
        <span className="session-information-header-content-main">42 min</span>
        <span className="session-information-header-content-sub">Durée</span>
      </div>

      <div className="session-information-header-content">
        <FontAwesomeIcon
          className="session-information-header-content-icon"
          size="2x"
          icon={faChartSimple}
        />
        <span className="session-information-header-content-main">
          Débutant - Intermediaire
        </span>
        <span className="session-information-header-content-sub">Niveau</span>
      </div>

      <div className="session-information-header-content">
        <FontAwesomeIcon
          className="session-information-header-content-icon"
          size="2x"
          icon={faFireFlameCurved}
        />
        <span className="session-information-header-content-main">140</span>
        <span className="session-information-header-content-sub">Calories</span>
      </div>
    </div>
  );
}
