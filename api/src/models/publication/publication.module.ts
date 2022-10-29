import { Module } from '@nestjs/common';
import { ExercicePublicationRepository } from './repository/publication.repository';
import { ExercicePublicationService } from './sub/exercice/service/exercice.publication.service';
import { ExercicePulicationController } from './sub/exercice/controller/exercice.publication.controller';

@Module({
  controllers: [ExercicePulicationController],
  providers: [ExercicePublicationRepository, ExercicePublicationService],
  imports: [],
})
export class PulicationModule {}
