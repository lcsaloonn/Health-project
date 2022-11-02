import { useEffect, useRef, useState } from "react";
import "./inputNumber.scss";

export function InputNUmberComponent() {
  const [number, setNumber] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  function inputNumber() {
    if (inputRef.current?.value != null) {
      if (
        /^[0-9]*$/.test(inputRef.current.value) &&
        parseInt(inputRef.current.value) <= 500
      ) {
        if (inputRef.current.value === " ") {
          setNumber(0);
        } else {
          setNumber(parseInt(inputRef.current.value));
        }
      } else {
        inputRef.current.value = "0";
      }
    }
  }

  function verifyNumber(number: number) {
    if (number <= 1) return 1;
    else return number;
  }
  useEffect(() => {
    if (inputRef.current != null) {
      inputRef.current.value = number.toString();
      // console.log(number); //here to return value
    }
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
        ref={inputRef}
        onInput={() => inputNumber()}
      />
      <button className="increment" onClick={() => setNumber(number + 1)}>
        +
      </button>
    </div>
  );
}
