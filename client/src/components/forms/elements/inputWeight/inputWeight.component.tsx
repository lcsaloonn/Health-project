import { useState } from "react";
import { WeightUnitEnum } from "utils/types/exercice/enum/weightUnit.enum";
import { InputNUmberComponent } from "../inputNumber/inputNumber.component";
import "./inputWeight.scss";

export function InputWeight() {
  const [weight, setWeigh] = useState(0);
  return (
    <div className="input-weight">
      <InputNUmberComponent />
      <select>
        {Object.values(WeightUnitEnum).map((element: string, id: number) => (
          <option value={element} key={id}>
            {element}
          </option>
        ))}
      </select>
    </div>
  );
}
