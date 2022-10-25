import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ObjectId } from 'mongodb';
import { MongoDb } from 'src/Infrastructure/DataBase/db.connection';

export function IsIdExist(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [property],
      validator: IsIdExistRule,
    });
  };
}

@ValidatorConstraint({ name: 'isIdExist' })
export class IsIdExistRule implements ValidatorConstraintInterface {
  validate(value: any, validationArguments?: ValidationArguments): boolean {
    const connection = MongoDb.instance.db
      .collection(validationArguments.constraints[0])
      .findOne({ _id: new ObjectId('dd') });

    console.log(validationArguments.constraints[0]);
    console.log(validationArguments);
    return false; // test
  }
  defaultMessage?(validationArguments?: ValidationArguments): string {
    return "id doesn't exist";
  }
}
