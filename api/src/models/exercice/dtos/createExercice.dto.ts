import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { ObjectId } from 'mongodb';
import { BodyPartEnum } from '../interface/bodyPart.enum';
import { WeightUnitEnum } from '../interface/weightUnit.enum';

export class CreateExerciceDTO {
  @IsNotEmpty()
  @IsString()
  // @Validate(DataExistRule)
  title: string;

  creationUser?: ObjectId | null;

  description: CreateExerciceDescriptionDTO;

  realisation: CreateExerciceRealisationDTO;
}

/** DESCRIPTION */
class CreateExerciceDescriptionDTO {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Max(5)
  raiting: number;

  @IsNotEmpty()
  @IsEnum(BodyPartEnum)
  bodyParts: BodyPartEnum[];

  @IsNotEmpty()
  @IsString()
  imageUrl: string;
}

/** REALISATION */
class CreateExerciceRealisationDTO {
  recoveryTime: number[];
  series: number;
  repetition: number[];
  weight: { number?: number; unit: WeightUnitEnum }[];
}
