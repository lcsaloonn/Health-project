import { IsNotEmpty } from 'class-validator';

export class ReadExerciceByIdDTO {
  @IsNotEmpty()
  //rajouter if id exist
  id: string;
}
