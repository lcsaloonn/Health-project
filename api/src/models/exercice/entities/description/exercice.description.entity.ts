import { BodyPartEnum } from '../../interface/bodyPart.enum';
import { IExerciceDescription } from '../../interface/exercice.interface';

export class ExerciceDescriptionEntity implements IExerciceDescription {
  description: string;
  raiting: number;
  bodyPart: BodyPartEnum[];
  imageUrl: string;

  constructor(
    description: string,
    raiting: number,
    bodyPart: BodyPartEnum[],
    imageUrl: string,
  ) {
    this.description = description;
    this.raiting = raiting;
    this.bodyPart = bodyPart;
    this.imageUrl = imageUrl;
  }
}
