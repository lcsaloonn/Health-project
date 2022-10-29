import { BodyPartEnum } from "./bodyPart.enum";
import { WeightUnitEnum } from "./weightUnit.enum";

export interface IExercice {
  _id: string;
  title: string;
  creation?: { creationDate: Date; creationUser: string | null };
  description: IExerciceDescription;
  realisation: IExerciceRealisation;
}

export interface IExerciceDescription {
  description: string;
  raiting: number;
  bodyParts: BodyPartEnum[];
  imageUrl: string;
}

export interface IExerciceRealisation {
  recoveryTime: number[];
  series: number;
  repetition: number[];
  weight: { number?: number; unit: WeightUnitEnum }[];
}