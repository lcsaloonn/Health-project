import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { get } from 'http';
import { CreateExercicePublicationDTO } from '../dtos/exercice/createExercice.publication.dto';
import { CreateExercicePublicationSchema } from '../schema/exercicePost/createExercice.publication.schema';
import { ExercicePublicationService } from '../services/exercice.publication.service';

@Controller('publication')
@ApiTags('Publication exercice')
export class ExercicePulicationController {
  constructor(
    private readonly _exercicePublicationService: ExercicePublicationService,
  ) {}

  /** GET */

  @Get()
  async getAllExercicePublication() {
    return this._exercicePublicationService.findAll();
  }

  /** CREATE */

  @Post()
  @ApiBody({ type: CreateExercicePublicationSchema })
  async postExercicePublication(
    @Body() exercicePublicationDTO: CreateExercicePublicationDTO,
  ) {
    this._exercicePublicationService.create(exercicePublicationDTO);
  }
}
