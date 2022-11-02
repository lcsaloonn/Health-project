import { useEffect, useRef, useState } from "react";
import "./inputNumber.scss";

export function InputNUmberComponent() {
  const [number, setNumber] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  function isNumber() {
    if (inputRef.current?.value != null) {
      if (/^[1-9][0-9]?$|^100$/.test(inputRef.current.value)) {
        setNumber(parseInt(inputRef.current.value));
      } else {
        inputRef.current.value = number.toString();
      }
    }
  }

  function verifyNumber(number: number) {
    if (number <= 1) return 1;
    else return number;
  }
  useEffect(() => {
    if (inputRef.current != null) inputRef.current.value = number.toString();
  }, [number]);

  return (
    <div className="input-number">
      <button
        className="decrement"
        onClick={() => setNumber(verifyNumber(number - 1))}
      >
        -
      </button>
      <input
        type="text"
        size={4}
        min={1}
        ref={inputRef}
        onInput={() => isNumber()}
      />
      <button className="increment" onClick={() => setNumber(number + 1)}>
        +
      </button>
    </div>
  );
}
