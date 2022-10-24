import { IExerciceRealisation } from '../../interface/exercice.interface';
import { WeightUnitEnum } from '../../interface/weightUnit.enum';

export class ExerciceRealisationEntity implements IExerciceRealisation {
  recoveryTime: number[];
  series: number;
  repetition: number[];
  weight: { number?: number; unit: WeightUnitEnum }[];

  constructor(
    recovoryTime: number[],
    series: number,
    repetition: number[],
    weight: { number?: number; unit: WeightUnitEnum }[],
  ) {
    this.recoveryTime = recovoryTime;
    this.series = series;
    this.repetition = repetition;
    this.weight = weight;
  }
}
