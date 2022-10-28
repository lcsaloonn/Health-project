import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { MongoDb } from 'src/Infrastructure/DataBase/db.connection';
import { GenericRepository } from 'src/Infrastructure/repository/abstract/generic-repository.abstract';
import { IExercicePublication } from '../interface/exercice.publication.interface';

@Injectable()
export class ExercicePublicationRepository
  implements GenericRepository<IExercicePublication>
{
  public connection = MongoDb.instance.db.collection('publication');

  async findOneById(id: string): Promise<IExercicePublication> {
    return await this.connection.findOne<IExercicePublication>({
      _id: new ObjectId(id),
    });
  }

  async findOneByCondition(filter: any): Promise<IExercicePublication> {
    return await this.connection.findOne<IExercicePublication>({
      where: filter,
    });
  }
  async findOne(key: string, value: any): Promise<IExercicePublication> {
    return await this.connection.findOne<IExercicePublication>({
      [key]: value,
    });
  }
  async find(filter?: any, options?: any): Promise<IExercicePublication[]> {
    filter = !filter ? {} : filter;
    return await this.connection
      .find<IExercicePublication>(filter, options)
      .toArray();
  }
  async create(publication: IExercicePublication): Promise<void> {
    await this.connection.insertOne(publication);
  }
  update(id: string, item: IExercicePublication): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
