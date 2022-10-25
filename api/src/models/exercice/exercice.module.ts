import { Module } from '@nestjs/common';
import { IsIdExistRule } from 'src/common/pipes/validation/isIdExist.pipe';
import { ExerciceController } from './exercice.controller';
import { ExerciceRepository } from './exercice.repository';
import { ExerciceService } from './exercice.service';

@Module({
  controllers: [ExerciceController],
  providers: [ExerciceRepository, ExerciceService, IsIdExistRule],
  imports: [],
})
export class ExerciceModule {}
