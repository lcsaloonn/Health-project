import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';
import { CreatePublicationSchema } from 'src/models/publication/schema/create.publication.schema';

export class CreateExercicePublicationSchema extends CreatePublicationSchema {
  @ApiProperty({
    type: String,
    description: 'exerciceId',
    example: 'id',
  })
  exerciceId: ObjectId;

  @ApiProperty({
    description: 'howToRealise',
    example: [{ id: 1, text: 'courir' }],
    required: true,
    isArray: true,
  })
  howToRealise: { id: number; text: string }[];

  @ApiProperty({
    type: String,
    description: 'description',
    example: 'blablabla',
  })
  description: string;

  @ApiProperty({
    description: 'advice',
    example: ['advice1', 'advice2'],
    required: true,
    isArray: true,
  })
  advice: string[];

  @ApiProperty({
    type: String,
    description: 'imageUrl',
    example: '#',
  })
  imageUrl: string;
}
