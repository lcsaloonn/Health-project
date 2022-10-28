import { ObjectId } from 'mongodb';
import { PublicationTypeEnum } from '../../interface/enum/publication.type.enum';
import { IExercicePublication } from '../../interface/exercice.publication.interface';
import { PublicationEntity } from '../publicatition.entity';

export class ExercicePublicationEntity
  extends PublicationEntity
  implements IExercicePublication
{
  constructor(
    creationUser: ObjectId | 'SITE',
    isVisible: boolean,
    public exerciceId: ObjectId,
    public howToRealise: { id: number; text: string }[],
    public description: string,
    public advice: string[],
    public imageUrl: string,
    type = PublicationTypeEnum.EXERCICE,
  ) {
    super(creationUser, type, isVisible);
  }
}
