import { IsNotEmpty, IsString } from 'class-validator';
import { ObjectId } from 'mongodb';
import { CreatePublicationDTO } from '../create.publication.dto';

export class CreateExercicePublicationDTO extends CreatePublicationDTO {
  exerciceId: ObjectId;

  howToRealise: { id: number; text: string }[];

  @IsNotEmpty()
  @IsString()
  description: string;

  advice: string[];

  @IsNotEmpty()
  @IsString()
  imageUrl: string;
}
