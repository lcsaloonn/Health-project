import { TruncateContainer } from "components/util";
import { Link } from "react-router-dom";
import { IExercice } from "utils/types/exercice/IExercice";
import StarRaitingCompponent from "../../starRaiting/starRaiting";
import "./exerciceCard.scss";

const ExerciceCard = ({ props }: { props: IExercice }) => {
  return (
    <Link
      className="exercice-card"
      data-testid="link"
      to={/*props.idTitle*/ "#"}
    >
      <div className="thumbnail">
        <img
          src={`../assets/img/${props.description.imageUrl}`}
          alt={props.title}
        />
      </div>
      <div className="title" data-testid="title">
        {props.title}
      </div>
      <div className="text">
        <TruncateContainer
          text={props.description.description}
          lengthMax={250}
        />
      </div>
      <div className="star-container">
        <span className="difficultyText">Difficulty:</span>
        <StarRaitingCompponent
          num={props.description.raiting}
        ></StarRaitingCompponent>
      </div>
    </Link>
  );
};
export default ExerciceCard;
