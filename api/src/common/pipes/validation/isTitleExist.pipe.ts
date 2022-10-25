import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ObjectId } from 'mongodb';
import { MongoDb } from 'src/Infrastructure/DataBase/db.connection';

export function IsTitleExist(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [property],
      validator: IsTtitleExistRule,
    });
  };
}

@ValidatorConstraint({ name: 'isIdExist', async: true })
export class IsTtitleExistRule implements ValidatorConstraintInterface {
  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const response = await MongoDb.instance.db
      .collection(validationArguments.constraints[0])
      .findOne(
        { title: validationArguments.value },
        { projection: { title: 1 } },
      );
    if (response) return false;
    else return true;
  }
  defaultMessage?(validationArguments?: ValidationArguments): string {
    return 'title already exist';
  }
}
