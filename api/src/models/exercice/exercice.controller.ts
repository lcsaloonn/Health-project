import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateExerciceDTO } from './dtos/zindex';
import { ExerciceService } from './service/exercice.service';
import { BodyPartEnum } from './interface/bodyPart.enum';
import { IExercice } from './interface/exercice.interface';
import { CreateExerciceSchema } from './schema/createExercice.schema';

@Controller('exercices')
// @UseFilters(HttpExceptionFilter)
@ApiTags('exercices')
export class ExerciceController {
  constructor(private readonly _exerciceService: ExerciceService) {}

  /** ----GET---- */
  @Get()
  async getAllExercices(): Promise<IExercice[]> {
    return this._exerciceService.findAllExercice();
  }

  @Get('getById/:id')
  // @IsIdExist('exercice')
  async getById(@Param('id') id: string): Promise<IExercice> {
    return await this._exerciceService.findById(id);
  }

  @Get('getByBodyPart/:bodyPart')
  async getByBodyPart(
    @Param('bodyPart') bodyPart: BodyPartEnum,
  ): Promise<IExercice[]> {
    const response = await this._exerciceService.findByBodyPart(bodyPart);
    if (response.length > 0) return response;
    else throw new NotFoundException('aucun résultat');
  }

  @Get('getByTitle/:title')
  //@UsePipes(IsNotEmpty(), IsString())
  async getByTitle(@Param('title') title: string): Promise<IExercice> {
    return await this._exerciceService.findOneByTitle(title);
  }

  @Get('getByHyphenTitle/:hyphentitle')
  async getByHyphenTitle(@Param('title') title: string): Promise<IExercice> {
    return await this._exerciceService.findOneByHyphenTitle(title);
  }

  /** ----POST---- */
  @Post()
  @ApiBody({ type: CreateExerciceSchema })
  async postExercice(@Body() exerciceDto: CreateExerciceDTO): Promise<void> {
    this._exerciceService.createExercice(exerciceDto);
  }
}
