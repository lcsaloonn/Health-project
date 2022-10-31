import { BodyPartEnum } from '../../interface/bodyPart.enum';
import { EquipmentEnum } from '../../interface/equipment.enum';
import { IExerciceDescription } from '../../interface/exercice.interface';

export class ExerciceDescriptionEntity implements IExerciceDescription {
  description: string;
  raiting: number;
  bodyParts: BodyPartEnum[];
  imageUrl: string;
  equipment: EquipmentEnum[];

  constructor(obj: {
    description: string;
    raiting: number;
    bodyParts: BodyPartEnum[];
    imageUrl: string;
    equipment: EquipmentEnum[];
  }) {
    this.description = obj.description;
    this.raiting = obj.raiting;
    this.bodyParts = obj.bodyParts;
    this.imageUrl = obj.imageUrl;
    this.equipment = obj.equipment;
  }
}
