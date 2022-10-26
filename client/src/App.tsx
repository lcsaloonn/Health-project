import { Session } from "inspector";
import { Routes, Route } from "react-router-dom";
import { LoginView } from "views/Login/login";
import NotFoundView from "views/notFind-view/notFindView";
import { ProgramListView } from "views/Programs/ProgramList-view/programListView";
import { ProgramStartInfoView } from "views/Programs/programStartInfo/programStartInfoView";
import { RegisterFormComposant } from "views/registerForm/registerForm.composant";
import { SessionListView } from "views/Sessions/SessionsList/sessionListView";
import { SessionStartInfoView } from "views/Sessions/sessionStartInfo/sessionStartInfoView";
import SingleExerciceView from "views/single-exercice-view/singleExerciceView";
import ExerciceView from "./views/exercice-view/exerciceView";
import Header from "./views/header/header";
import MainView from "./views/main-view/mainView";

function App() {
  return (
    <>
      <Header />

      <div className="app">
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="exercices">
            <Route index element={<ExerciceView />} />
            <Route path=":id" element={<SingleExerciceView />} />
          </Route>

          <Route path="programs">
            <Route index element={<ProgramListView />} />
            <Route path=":id" element={<ProgramStartInfoView />} />
          </Route>

          <Route path="session">
            <Route index element={<SessionListView />} />
            <Route path=":id" element={<SessionStartInfoView />} />
          </Route>

          <Route path="login" element={<LoginView />} />
          <Route path="register" element={<RegisterFormComposant />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
