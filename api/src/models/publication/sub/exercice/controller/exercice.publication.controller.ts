import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ExercicePublicationService } from 'src/models/publication/sub/exercice/service/exercice.publication.service';

import { CreateExercicePublicationDTO } from '../dtos/createExercice.publication.dto';
import { CreateExercicePublicationSchema } from '../schema/createExercice.publication.schema';

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
  @Get('getByHyphenTitle/:title')
  async getByHyphenTitle(@Param('title') title: string) {
    return this._exercicePublicationService.findByHypenTitlte(title);
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
