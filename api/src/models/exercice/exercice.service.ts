import { Injectable } from '@nestjs/common';
import { CreateExerciceDTO } from './dtos/createExercice.dto';
import { ExerciceDescriptionEntity } from './entities/description/exercice.description.entity';
import { ExerciceEntiy } from './entities/exercice.entity';
import { ExerciceRealisationEntity } from './entities/realisation/exercice.realisation.entity';
import { ExerciceRepository } from './exercice.repository';
import { IExercice } from './interface/exercice.interface';

@Injectable()
export class ExerciceService {
  constructor(readonly _exerciceRepository: ExerciceRepository) {}

  /** ---FIND--- */

  async findAllExercice(): Promise<IExercice[]> {
    return this._exerciceRepository.find();
  }
  async findById(id: string): Promise<IExercice> {
    return this._exerciceRepository.findOneById(id);
  }

  async findByBodyPart(bodyPart: string): Promise<IExercice[]> {
    return this._exerciceRepository.find({
      'description.bodyParts': bodyPart,
    });
  }

  // WORK IN PROGRESS
  async findByHyphenTitle(hyphenTitle: string): Promise<IExercice> {
    // disHyphen the title
    return this._exerciceRepository.findOneByCondition(hyphenTitle);
  }

  /** ---CREATE ---*/
  async createExercice(exerciceDto: CreateExerciceDTO): Promise<void> {
    const creation = exerciceDto.creationUser
      ? { creationDate: new Date(), creationUser: exerciceDto.creationUser }
      : undefined;

    this._exerciceRepository.create(
      new ExerciceEntiy(
        exerciceDto.title,
        new ExerciceDescriptionEntity(exerciceDto.description),
        new ExerciceRealisationEntity(exerciceDto.realisation),
        creation,
      ),
    );
  }
}
