import { Module } from '@nestjs/common';
import { ExerciceController } from './exercice.controller';
import { ExerciceRepository } from './exercice.repository';
import { ExerciceService } from './exercice.service';

@Module({
  controllers: [ExerciceController],
  providers: [ExerciceRepository, ExerciceService],
  imports: [],
})
export class ExerciceModule {}
