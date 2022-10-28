import { ObjectId } from 'mongodb';
import { PublicationTypeEnum } from './enum/publication.type.enum';

export interface IExercicePublication {
  _id: ObjectId;
  type: PublicationTypeEnum;
  isMainPublication: boolean;
  creationDate: Date;
  creationUser: ObjectId | 'SITE';
  exerciceId: ObjectId;
  isVisible: boolean;
  howToRealise: { id: number; text: string }[];
  description: string;
  advice: string[];
  imageUrl: string;
}
