import { ObjectId } from 'mongodb';
import { PublicationEntity } from 'src/models/publication/entities/publicatition.entity';
import { PublicationTypeEnum } from 'src/models/publication/interface/enum/publication.type.enum';
import { IExercicePublication } from 'src/models/publication/interface/exercice.publication.interface';

export class ExercicePublicationEntity
  extends PublicationEntity
  implements IExercicePublication
{
  constructor(
    creationUser: ObjectId | 'SITE',
    isVisible: boolean,
    title: string,
    public exerciceId: ObjectId,
    public howToRealise: { id: number; text: string }[],
    public description: string,
    public advice: string[],
    public imageUrl: string,
    type = PublicationTypeEnum.EXERCICE,
  ) {
    super(title, creationUser, type, isVisible);
  }
}
