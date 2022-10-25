import { IsNotEmpty } from 'class-validator';
import { IsIdExist } from 'src/common/pipes/validation/isIdExist.pipe';

export class ReadExerciceByIdDTO {
  @IsNotEmpty()
  @IsIdExist('exercice')
  id: string;
}
