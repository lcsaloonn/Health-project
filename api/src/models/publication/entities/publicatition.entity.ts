import { ObjectId } from 'mongodb';
import { BaseModel } from 'src/Infrastructure/base/base.entity';
import { PublicationTypeEnum } from '../interface/enum/publication.type.enum';

export class PublicationEntity extends BaseModel {
  isMainPublication: boolean;
  creationDate: Date;

  constructor(
    public creationUser: ObjectId | 'SITE',
    public type: PublicationTypeEnum,
    public isVisible: boolean,
  ) {
    super();
    this.isMainPublication = creationUser === 'SITE' ? true : false;
    this.creationDate = new Date();
  }
}
