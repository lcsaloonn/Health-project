import { ExerciceDifficultyCardComponent } from "components/cards";
import { ExerciceDifficultyType } from "components/cards/exerciceDificultyCard/exerciceDifficultyCard.component";
import { PartFrame } from "components/frame";
import "./sessionStartInfoView.scss";

const mockdiff: ExerciceDifficultyType[] = [
  {
    level: "Débutant",
    recovery: 2,
    sets: 4,
    repetition: 8,
    weight: "10kg - 12kg",
  },
  {
    level: "Intermédiaire",
    recovery: 2,
    sets: 4,
    repetition: 8,
    weight: "10kg - 12kg",
  },
  {
    level: "Confirmé",
    recovery: 2,
    sets: 4,
    repetition: 8,
    weight: "10kg - 12kg",
  },
];

const mock =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugarem porro neque iure libero culpa maiores veritatis, ducimus tenetur a at nulla corporis explicabo accusantium facilis perspiciatis? Totam, suscipit quisquam";
export function SessionStartInfoView() {
  return (
    <div className="session-info main-container">
      <div className="session-info-title">Session test</div>
      <div className="session-info-bodyPart">
        <div className="session-info-bodyPart-title">
          Cette session vous permet de développer
        </div>
        <div className="session-info-bodyPart-list">
          <span className="session-info-bodyPart-list-item">bras</span>
          <span className="session-info-bodyPart-list-item">dos</span>
          <span className="session-info-bodyPart-list-item">pecs</span>
          <span className="session-info-bodyPart-list-item">jambe</span>
        </div>
      </div>
      <button className="session-info-btn">Commencer</button>
      <div className="session-info-parts">
        <div className="session-info-parts">
          <PartFrame title="Développé couché" />
          <div className="session-info-parts-element">
            <ExerciceDifficultyCardComponent props={mockdiff} />
          </div>
          <div className="session-info-parts-advice">
            * Vous pouvez augmenter la charge progressivement vers le niveau du
            dessus
          </div>
        </div>
      </div>
    </div>
  );
}
