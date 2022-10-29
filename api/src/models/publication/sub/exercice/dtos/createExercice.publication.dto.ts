import { IsNotEmpty, IsString } from 'class-validator';
import { ObjectId } from 'mongodb';
import { CreatePublicationDTO } from 'src/models/publication/dtos/create.publication.dto';

export class CreateExercicePublicationDTO extends CreatePublicationDTO {
  // ISexerciceId exist
  exerciceId: ObjectId;

  //correct form
  howToRealise: { id: number; text: string }[];

  @IsNotEmpty()
  @IsString()
  description: string;

  //Is array of string
  advice: string[];

  @IsNotEmpty()
  @IsString()
  imageUrl: string;
}
