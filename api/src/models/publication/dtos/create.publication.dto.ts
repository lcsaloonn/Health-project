import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { ObjectId } from 'mongodb';
import { PublicationTypeEnum } from '../interface/enum/publication.type.enum';

export class CreatePublicationDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  //only "SITE" if user is admin always check if userID exists
  public creationUser: ObjectId | 'SITE';

  //Is part of enum
  public type: PublicationTypeEnum;

  @IsNotEmpty()
  @IsBoolean()
  public isVisible: boolean;
}
