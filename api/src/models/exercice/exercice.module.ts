import { Module } from '@nestjs/common';
import { IsIdExistRule } from 'src/common/pipes/validation/isIdExist.pipe';
import { IsTtitleExistRule } from 'src/common/pipes/validation/isTitleExist.pipe';
import { ExerciceController } from './exercice.controller';
import { ExerciceRepository } from './exercice.repository';
import { ExerciceService } from './exercice.service';

@Module({
  controllers: [ExerciceController],
  providers: [
    ExerciceRepository,
    ExerciceService,
    IsIdExistRule,
    IsTtitleExistRule,
  ],
  imports: [],
})
export class ExerciceModule {}
