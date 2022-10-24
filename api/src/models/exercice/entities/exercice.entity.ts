import { ObjectId } from 'mongodb';
import { BaseModel } from 'src/Infrastructure/base/base.entity';
import {
  IExercice,
  IExerciceDescription,
  IExerciceRealisation,
} from '../interface/exercice.interface';

export class ExerciceEntiy extends BaseModel implements IExercice {
  title: string;
  creation?: { creationDate: Date; creationUser: ObjectId | null };
  description: IExerciceDescription;
  realisation: IExerciceRealisation;

  constructor(
    title: string,
    description: IExerciceDescription,
    realisation: IExerciceRealisation,
    creation?: { creationDate: Date; creationUser: ObjectId | null },
  ) {
    super();
    this.title = title;
    this.creation = creation;
    this.description = description;
    this.realisation = realisation;
  }
}
