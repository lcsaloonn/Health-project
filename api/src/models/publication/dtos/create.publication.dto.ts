import { IsBoolean } from 'class-validator';
import { ObjectId } from 'mongodb';
import { PublicationTypeEnum } from '../interface/enum/publication.type.enum';

export class CreatePublicationDTO {
  //only "SITE" if user is admin always check if userID exists
  public creationUser: ObjectId | 'SITE';

  //Is part of enum
  public type: PublicationTypeEnum;

  @IsBoolean()
  public isVisible: boolean;
}
