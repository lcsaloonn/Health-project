import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ExerciceService } from './exercice.service';
import { IExercice } from './interface/exercice.interface';

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
}
