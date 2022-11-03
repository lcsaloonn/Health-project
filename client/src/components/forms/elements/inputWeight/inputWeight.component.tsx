import { WeightUnitEnum } from "utils/types/exercice/enum/weightUnit.enum";
import { InputNUmberComponent } from "../inputNumber/inputNumber.component";
import "./inputWeight.scss";

export function InputWeight({
  maxValue,
  unit,
}: {
  maxValue: number;
  unit: WeightUnitEnum;
}) {
  return (
    <div className="input-weight">
      <InputNUmberComponent maxvalue={maxValue} />
      <span>{unit}</span>
    </div>
  );
}
