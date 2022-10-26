import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./buttonGoBack.scss";

const ButtonGoBack = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link className="button-go-back" to={link}>
      <FontAwesomeIcon className="button-go-back-icon" icon={faArrowLeft} />
      {text}
    </Link>
  );
};
export default ButtonGoBack;
