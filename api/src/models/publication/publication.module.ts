import { Module } from '@nestjs/common';
import { ExercicePulicationController } from './controllers/exercice.publication.controller';
import { ExercicePublicationRepository } from './repository/publication.repository';
import { ExercicePublicationService } from './services/exercice.publication.service';

@Module({
  controllers: [ExercicePulicationController],
  providers: [ExercicePublicationRepository, ExercicePublicationService],
  imports: [],
})
export class PulicationModule {}
