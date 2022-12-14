import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateExercicePublicationDTO } from '../sub/exercice/dtos/createExercice.publication.dto';
import { CreateExercicePublicationSchema } from '../sub/exercice/schema/createExercice.publication.schema';
import { ExercicePublicationService } from '../sub/exercice/service/exercice.publication.service';

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
