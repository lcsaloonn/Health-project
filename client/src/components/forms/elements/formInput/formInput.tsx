import { HTMLInputTypeAttribute, useEffect, useState } from "react";
import "./formInput.scss";

export interface IFormInput {
  type: HTMLInputTypeAttribute;
  label?: string;
  error?: {
    regex: RegExp;
    conditionsMessage: string[];
  };

  arialAttribut?: React.AriaAttributes;
  inputAttribut: React.HTMLAttributes<HTMLInputElement>;
}

export function InputFormComponent({
  props,
  returnIsInputCorrect,
  returnInputValue,
}: {
  props: IFormInput;
  returnIsInputCorrect?: (value: boolean) => void;
  returnInputValue?: (value: string) => void;
}) {
  const [validInput, setValidInput] = useState<boolean>();
  const [input, setInput] = useState<string | undefined>();
  const [errorPanel, setErrorPanel] = useState<boolean>();

  useEffect(() => {
    if (props.error && input !== undefined)
      setValidInput(props.error.regex.test(input));
    if (returnInputValue !== undefined && input !== undefined)
      returnInputValue(input);
  }, [input]);

  useEffect(() => {
    if (validInput) {
      setErrorPanel(false);
      if (returnIsInputCorrect !== undefined) returnIsInputCorrect(true);
    } else {
      if (returnIsInputCorrect !== undefined) returnIsInputCorrect(false);
      if (input !== undefined) setErrorPanel(true);
    }
  }, [validInput]);

  return (
    <div className="formInput">
      {props.label && props.inputAttribut.id ? (
        <label htmlFor={props.inputAttribut.id}>{props.label}</label>
      ) : null}

      <input
        type={props.type}
        {...props.inputAttribut}
        {...props.arialAttribut}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onFocus={() => {
          if (props.error)
            validInput ? setErrorPanel(false) : setErrorPanel(true);
        }}
        onBlur={() => {
          if (props.error) {
            validInput ? setErrorPanel(false) : setErrorPanel(true);
          }
        }}
      />

      {props.error ? (
        <div
          className={(errorPanel ? "invalid" : "hidden") + " errorPanel"}
          data-testid="errorPanel"
        >
          <span className={validInput ? "hidden" : "invalid"}>
            <ul>
              {props.error.conditionsMessage.map(
                (element: string, key: number) => (
                  <li key={key}>{element}</li>
                )
              )}
            </ul>
          </span>
        </div>
      ) : null}
    </div>
  );
}
