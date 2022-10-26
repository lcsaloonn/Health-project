import { ExerciceDifficultyType } from "components/cards/exerciceDificultyCard/exerciceDifficultyCard.component";
import { BodyPartEnum } from "./enums/bodyPart.enum";

export interface ISession {
  id: string;
  name: string;
  bodyParts: BodyPartEnum;
  img: string;
  time: Date;
  difficulty: number;
  exercices: IExerciceRealisation[];
}

export interface IExerciceRealisation {
  exerciceID: string;
  exerciceName: string;
  exerciceAdvice: string;
  exerciceDifficulty: ExerciceDifficultyType;
}
