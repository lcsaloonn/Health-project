import { BodyPartEnum } from '../../interface/bodyPart.enum';
import { IExerciceDescription } from '../../interface/exercice.interface';

export class ExerciceDescriptionEntity implements IExerciceDescription {
  description: string;
  raiting: number;
  bodyParts: BodyPartEnum[];
  imageUrl: string;

  constructor(obj: {
    description: string;
    raiting: number;
    bodyParts: BodyPartEnum[];
    imageUrl: string;
  }) {
    this.description = obj.description;
    this.raiting = obj.raiting;
    this.bodyParts = obj.bodyParts;
    this.imageUrl = obj.imageUrl;
  }
}
