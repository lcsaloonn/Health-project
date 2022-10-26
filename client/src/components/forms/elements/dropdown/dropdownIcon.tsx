import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import "./dropdowicon.scss";

type Dropdown = {
  incon?: string;
  optionValue: string;
  optionText: string;
};

/**
 * improvements need a default value
 * improvement need disabled
 */
const DropDownListIcon = ({
  data,
  title,
  returnValue,
}: {
  data: Dropdown[];
  defaultValuePostion: number;
  title: string;
  returnValue: any;
}) => {
  const [optionvalue, setOptionValue] = useState("");
  const [optionText, setOptionText] = useState("");

  useEffect(() => {
    (document.querySelector(".textbox") as HTMLInputElement).value = optionText;
    returnValue(optionvalue);
  }, [optionvalue]);

  const dropdown = () => {
    (document.querySelector(".dropdown") as HTMLInputElement).classList.toggle(
      "active"
    );
  };

  return (
    <div className="dropdown" onClick={() => dropdown()}>
      <input type="text" className="textbox" placeholder={title} readOnly />
      <div className="option">
        {data.map((data: Dropdown, id: number) => (
          <div
            onClick={() => {
              setOptionValue(data.optionValue);
              setOptionText(data.optionText);
            }}
            id={data.optionValue}
            key={id}
          >
            <FontAwesomeIcon icon={faCheck} className="icon" />
            {data.optionText}
          </div>
        ))}
      </div>
    </div>
  );
};
export default DropDownListIcon;
