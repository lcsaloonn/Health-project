import { IsBoolean } from 'class-validator';
import { ObjectId } from 'mongodb';
import { PublicationTypeEnum } from '../interface/enum/publication.type.enum';

export class CreatePublicationDTO {
  public creationUser: ObjectId | 'SITE';

  public type: PublicationTypeEnum;

  @IsBoolean()
  public isVisible: boolean;
}
