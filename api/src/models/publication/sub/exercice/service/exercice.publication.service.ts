import { Injectable } from '@nestjs/common';
import { ExercicePublicationRepository } from '../../../repository/publication.repository';
import { CreateExercicePublicationDTO } from '../dtos/createExercice.publication.dto';
import { ExercicePublicationEntity } from '../entities/exercice.publication.entity';

@Injectable()
export class ExercicePublicationService {
  constructor(
    readonly _exercicePublicationRepository: ExercicePublicationRepository,
  ) {}

  /** ---CREATE--- */

  async create(publication: CreateExercicePublicationDTO) {
    this._exercicePublicationRepository.create(
      new ExercicePublicationEntity(
        publication.creationUser,
        publication.isVisible,
        publication.exerciceId,
        publication.howToRealise,
        publication.description,
        publication.advice,
        publication.imageUrl,
      ),
    );
  }

  /** ---GET---  */
  async findAll() {
    return this._exercicePublicationRepository.find({});
  }

  async findOneById(id: string) {
    return this._exercicePublicationRepository.findOneById(id);
  }
}