import { ExerciceDifficultyCardComponent } from "components/cards";
import { PartFrame } from "components/frame";
import { mockpremier } from "Mocks/pageSessionStartInfoView";
import "./exerciceDifficulty.scss";
//MOCK
const mock = mockpremier;

export function ExerciceDifficultyComponent({ number }: { number: number }) {
  return (
    <div className="session-info-parts">
      <div className="session-info-parts-number">N°{number}</div>
      {/* <div className="session-info-parts-title">Développé couché</div> */}
      <div className="session-info-parts-difficulty">
        <PartFrame title="Développé couché" />
        <div className="session-info-parts-difficulty-element hidde">
          <ExerciceDifficultyCardComponent props={mock} />
        </div>
        <div className="session-info-parts-difficulty-advice">
          * Si vous êtes alaise vous pouvez augmenter la charge progressivement
          vers le niveau du dessus
        </div>
      </div>
    </div>
  );
}
