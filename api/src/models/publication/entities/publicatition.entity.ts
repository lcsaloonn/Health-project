import { ObjectId } from 'mongodb';
import { BaseModel } from 'src/Infrastructure/base/base.entity';

export class PublicationEntity extends BaseModel {
  constructor(public creationDate: Date, public creationUser: ObjectId | null) {
    super();
  }
}
