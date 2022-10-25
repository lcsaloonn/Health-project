import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { ObjectId } from 'mongodb';
import { IsTitleExist } from 'src/common/pipes/validation/isTitleExist.pipe';
import { BodyPartEnum } from '../interface/bodyPart.enum';
import { WeightUnitEnum } from '../interface/weightUnit.enum';

export class CreateExerciceDTO {
  @IsNotEmpty()
  @IsString()
  // @Validate(DataExistRule) //can have only one title equals
  @IsTitleExist('exercice')
  title: string;

  //need when user will be created
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
  @IsNotEmpty()
  @IsArray()
  @IsNumber({}, { each: true })
  recoveryTime: number[];

  @IsNumber()
  series: number;

  @IsNotEmpty()
  @IsArray()
  @IsNumber({}, { each: true })
  repetition: number[];

  //custom
  weight: { number?: number; unit: WeightUnitEnum }[];
}
