import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';
import { PublicationTypeEnum } from '../interface/enum/publication.type.enum';

export class CreatePublicationSchema {
  @ApiProperty({
    type: String,
    description: 'creationUser',
    example: 'id',
  })
  creationUser: ObjectId | 'SITE';

  @ApiProperty({
    description: 'title',
    example: 'curl-d',
    required: true,
  })
  title: string;

  @ApiProperty({
    enum: PublicationTypeEnum,
    description: 'type',
    example: [PublicationTypeEnum.EXERCICE],
    required: true,
  })
  public type?: PublicationTypeEnum;

  @ApiProperty({
    type: Boolean,
    description: 'isVisible',
    example: 'true',
  })
  public isVisible: boolean;
}
