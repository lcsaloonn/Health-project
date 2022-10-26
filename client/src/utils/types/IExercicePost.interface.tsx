export interface IExercicePost {
  _id: string;
  idExercice: string;
  idTitle: string;
  imgUrl: string;
  description: string;
  howToRealise: TextListType[];
  advice: string[];
}

export type TextListType = {
  id: number;
  text: string;
};
