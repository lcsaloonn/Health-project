import { ObjectId } from 'mongodb';

export interface IExercicePublication {
  _id: ObjectId;
  creationDate: Date;
  creationUser: ObjectId | null;
  exerciceId: ObjectId;
  howToRealise: { id: number; text: string }[];
  description: string;
  advice: string[];
  imageUrl: string;
}
