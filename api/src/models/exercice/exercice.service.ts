import { Injectable } from '@nestjs/common';
import { ExerciceRepository } from './exercice.repository';
import { IExercice } from './interface/exercice.interface';

@Injectable()
export class ExerciceService {
  constructor(readonly _exerciceRepository: ExerciceRepository) {}

  /**
   *  FIND
   */

  async findAllExercice(): Promise<IExercice[]> {
    return this._exerciceRepository.find();
  }
  async findById(id: string): Promise<IExercice> {
    return this._exerciceRepository.findOneById(id);
  }

  //TRAVAIL ICI
  async findByBodyPart(bodyPart: string): Promise<IExercice[]> {
    const data = {
      bodyPart: bodyPart,
    };
    return this._exerciceRepository.find(data);
  }
}
