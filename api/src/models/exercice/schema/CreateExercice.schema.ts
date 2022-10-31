import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';
import { BodyPartEnum } from '../interface/bodyPart.enum';
import { EquipmentEnum } from '../interface/equipment.enum';
import { WeightUnitEnum } from '../interface/weightUnit.enum';

/** DESCRIPTION */

class CreateExerciceDescriptionSchema {
  @ApiProperty({
    type: String,
    description: 'description',
    example: 'ceci est ma description',
  })
  description: string;

  @ApiProperty({ type: Number, description: 'raiting', example: '5' })
  raiting: number;

  @ApiProperty({
    enum: BodyPartEnum,
    description: 'bodyParts',
    example: [BodyPartEnum.BRAS],
    required: true,
    isArray: true,
  })
  bodyParts: BodyPartEnum[];

  @ApiProperty({
    enum: EquipmentEnum,
    description: 'equipment',
    example: [EquipmentEnum.SANS_MATERIEL],
    required: true,
    isArray: true,
  })
  equipment: EquipmentEnum[];

  @ApiProperty({
    type: String,
    description: 'urlImage',
    example: 'face-pull-exercice-epaules.jpg',
  })
  imageUrl: string;
}

/** REALISATION */
class CreateExerciceRealisationSchema {
  @ApiProperty({
    type: Number,
    description: 'recoveryTime',
    example: [11, 22, 55],
    isArray: true,
  })
  recoveryTime: number[];

  @ApiProperty({
    type: Number,
    description: 'series',
    example: 3,
  })
  series: number;

  @ApiProperty({
    type: Number,
    description: 'repetition',
    example: [11, 12, 13],
    isArray: true,
  })
  repetition: number[];

  @ApiProperty({
    type: String,
    description: 'weight',
    example: { number: 4, unit: WeightUnitEnum.KG },
    isArray: true,
  })
  weight: { number?: number; unit: WeightUnitEnum }[];
}

/**EXERCICE */
export class CreateExerciceSchema {
  @ApiProperty({ type: String, description: 'title', example: 'curl' })
  title: string;

  @ApiProperty({
    type: String,
    description: 'creationUser',
    example: '111144487',
  })
  creationUser?: ObjectId | null;

  @ApiProperty({
    type: CreateExerciceDescriptionSchema,
  })
  description: CreateExerciceDescriptionSchema;

  @ApiProperty({
    type: CreateExerciceRealisationSchema,
  })
  realisation: CreateExerciceRealisationSchema;
}
