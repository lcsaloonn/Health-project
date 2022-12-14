import { Injectable } from '@nestjs/common';
import { CreateExerciceDTO } from '../dtos/createExercice.dto';
import { ExerciceDescriptionEntity } from '../entities/description/exercice.description.entity';
import { ExerciceEntiy } from '../entities/exercice.entity';
import { ExerciceRealisationEntity } from '../entities/realisation/exercice.realisation.entity';
import { ExerciceRepository } from '../exercice.repository';
import { IExercice } from '../interface/exercice.interface';

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
    return this._exerciceRepository.find(
      {
        'description.bodyParts': bodyPart,
      },
      { projection: { realisation: 0 } },
    );
  }

  async findOneByHyphenTitle(hyphenTitle: string): Promise<IExercice> {
    const title = hyphenTitle.replace(/-/g, ' ');
    return this.findOneByTitle(title);
  }

  async findOneByTitle(title: string): Promise<IExercice> {
    return this._exerciceRepository.findOne('title', title);
  }

  async findExerciceDescription(): Promise<IExercice[]> {
    return this._exerciceRepository.find(
      {},
      { projection: { realisation: 0 } },
    );
  }

  /** ---CREATE ---*/
  async createExercice(exerciceDto: CreateExerciceDTO): Promise<void> {
    this._exerciceRepository.create(
      new ExerciceEntiy(
        exerciceDto.title,
        {
          creationDate: new Date(),
          creationUser: exerciceDto.creationUser,
        },
        new ExerciceDescriptionEntity(exerciceDto.description),
        new ExerciceRealisationEntity(exerciceDto.realisation),
      ),
    );
  }
}
