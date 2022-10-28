import { Module } from '@nestjs/common';
import { ExerciceModule } from './exercice/exercice.module';
import { PulicationModule } from './publication/publication.module';

@Module({
  imports: [ExerciceModule, PulicationModule],
})
export class SharedModule {}
