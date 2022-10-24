import { Module } from '@nestjs/common';
import { ExerciceModule } from './exercice/exercice.module';

@Module({
  imports: [ExerciceModule],
})
export class SharedModule {}
