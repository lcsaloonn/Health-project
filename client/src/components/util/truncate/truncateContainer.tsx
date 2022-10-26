import { Link } from "react-router-dom";

const TruncateContainer = ({
  text,
  lengthMax,
  link,
}: {
  text: string;
  lengthMax: number;
  link?: string;
}) => {
  function truncate(text: string, lengthMax: number) {
    return (text = text.slice(0, lengthMax - 1));
  }

  return (
    <>
      {text.length > lengthMax ? (
        <p>
          {truncate(text, lengthMax)}&#160;
          {link === undefined ? (
            <span className="readmore-link"> read more </span>
          ) : (
            <Link className="readmore-link" to={link}>
              read more
            </Link>
          )}
        </p>
      ) : (
        <p>{text}</p>
      )}
    </>
  );
};
export default TruncateContainer;
