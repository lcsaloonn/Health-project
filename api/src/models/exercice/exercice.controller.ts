import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateExerciceDTO } from './dtos/createExercice.dto';
import { ExerciceService } from './exercice.service';
import { BodyPartEnum } from './interface/bodyPart.enum';
import { IExercice } from './interface/exercice.interface';
import { CreateExerciceSchema } from './schema/createExercice.schema';

@Controller('exercices')
// @UseFilters(HttpExceptionFilter)
@ApiTags('exercices')
export class ExerciceController {
  constructor(private readonly _exerciceService: ExerciceService) {}
  @Get()
  async getAllExercices(): Promise<IExercice[]> {
    return this._exerciceService.findAllExercice();
  }

  @Get('getById/:id')
  async getById(@Param('id') id: string): Promise<IExercice> {
    return await this._exerciceService.findById(id);
  }

  //IN Work
  @Get('getByBodyPart/:bodyPart')
  async getByBodyPart(
    @Param('bodyPart') bodyPart: BodyPartEnum,
  ): Promise<IExercice[]> {
    return await this._exerciceService.findByBodyPart(bodyPart);
  }

  @Post()
  @ApiBody({ type: CreateExerciceSchema })
  async postExercice(@Body() exerciceDto: CreateExerciceDTO): Promise<void> {
    this._exerciceService.createExercice(exerciceDto);
  }
}
