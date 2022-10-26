import { SessionCardComponent } from "components/cards";
import { SessionProvider } from "state/session.context";
import "./sessionListView.scss";

export function SessionListView() {
  return (
    <SessionProvider data={}>
      <div className="main-container sessions">
        <div className="sessions-title">Choisis une Session</div>
        <div className="sessions-title">Et débute ton entrainement</div>
        <div className="sessions-cards">
          <div>
            <SessionCardComponent />;
          </div>
          <div>
            <SessionCardComponent />;
          </div>
          <div>
            <SessionCardComponent />;
          </div>
        </div>
      </div>
    </SessionProvider>
  );
}
