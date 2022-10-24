import { IExerciceRealisation } from '../../interface/exercice.interface';
import { WeightUnitEnum } from '../../interface/weightUnit.enum';

export class ExerciceRealisationEntity implements IExerciceRealisation {
  recoveryTime: number[];
  series: number;
  repetition: number[];
  weight: { number?: number; unit: WeightUnitEnum }[];

  constructor(obj: {
    recoveryTime: number[];
    series: number;
    repetition: number[];
    weight: { number?: number; unit: WeightUnitEnum }[];
  }) {
    this.recoveryTime = obj.recoveryTime;
    this.series = obj.series;
    this.repetition = obj.repetition;
    this.weight = obj.weight;
  }
}
