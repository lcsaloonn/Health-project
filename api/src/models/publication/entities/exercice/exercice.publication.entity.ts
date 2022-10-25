import { ObjectId } from 'mongodb';
import { IExercicePublication } from '../../interface/exercice.publication.interface';
import { PublicationEntity } from '../publicatition.entity';

export class ExercicePublicationEntity
  extends PublicationEntity
  implements IExercicePublication
{
  constructor(
    creationDate: Date,
    creationUser: ObjectId | null,
    public exerciceId: ObjectId,
    public howToRealise: { id: number; text: string }[],
    public description: string,
    public advice: string[],
    public imageUrl: string,
  ) {
    super(creationDate, creationUser);
  }
}
