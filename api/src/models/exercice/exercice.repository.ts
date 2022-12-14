import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { MongoDb } from 'src/Infrastructure/DataBase/db.connection';
import { GenericRepository } from 'src/Infrastructure/repository/abstract/generic-repository.abstract';
import { IExercice } from './interface/exercice.interface';

@Injectable()
export class ExerciceRepository implements GenericRepository<IExercice> {
  public connection = MongoDb.instance.db.collection('exercice');

  async findOneById(id: string): Promise<IExercice> {
    return await this.connection.findOne<IExercice>({
      _id: new ObjectId(id),
    });
  }

  async findOne(key: string, value: any): Promise<IExercice> {
    return await this.connection.findOne<IExercice>({ [key]: value });
  }

  async findOneByCondition(filterCondition: any): Promise<IExercice> {
    return await this.connection.findOne<IExercice>({ where: filterCondition });
  }

  async find(filter?: any, options?: any): Promise<IExercice[]> {
    filter = !filter ? {} : filter;
    return await this.connection.find<IExercice>(filter, options).toArray();
  }

  async update(id: string, item: any) {
    //   this.connection.updateOne({ _id: new ObjectId(id) }, { $set: item });
  }

  async create(exercice: IExercice): Promise<void> {
    await this.connection.insertOne(exercice);
  }
}
