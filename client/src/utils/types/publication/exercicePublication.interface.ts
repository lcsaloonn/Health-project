import { PublicationTypeEnum } from "./enum/publicaton.enum";

export interface IExercicePublication {
  _id: string;
  title: string;
  type: PublicationTypeEnum;
  isMainPublication: boolean;
  creationDate: Date;
  creationUser: string | "SITE";
  exerciceId: string;
  isVisible: boolean;
  howToRealise: { id: number; text: string }[];
  description: string;
  advice: string[];
  imageUrl: string;
}
