import { ProgramCardComponent } from "components/cards/programCard/programCard.component";
import "./programListView.scss";

export function ProgramListView() {
  return (
    <div className="main-container programs">
      <div className="programs-title">Choisis ton Programme</div>
      <div className="programs-title">Et débute ton entrainement</div>
      <div className="programs-cards">
        <div>
          <ProgramCardComponent />;
        </div>
        <div>
          <ProgramCardComponent />;
        </div>
        <div>
          <ProgramCardComponent />;
        </div>
      </div>
    </div>
  );
}
