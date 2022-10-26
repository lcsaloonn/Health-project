import { useState } from "react";
import { sendLoginData } from "services/Login/login.service";
import "./login.scss";

export function LoginView() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<{ error: boolean; msg?: string }>();

  function verifyData() {
    if (username && password) {
      setError({ error: false });
      return true;
    } else {
      setError({ error: true, msg: "Il faut remplir tous les champs" });
      return false;
    }
  }
  async function login() {
    if (verifyData()) {
      const response = await sendLoginData(username, password);
      if (response?.success) {
        //envoyer..
        console.log("c'est bon");
      } else {
        setError({ error: true, msg: response?.response.message });
      }
    }
  }

  return (
    <div className="login-form main-container grid gap-6 grid-cols-4 md:grid-cols-7 lg:grid-cols-9">
      <div className="login-form-title col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7">
        Connection
      </div>
      <div className="login-form-input col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7">
        <label htmlFor="username">Nom d'utilisateur</label>
        <input
          id="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          autoComplete="off"
        />
      </div>

      <div className="login-form-input col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7">
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          autoComplete="off"
        />
      </div>

      <div
        className={
          error?.error
            ? "login-form-error col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7"
            : "hidden"
        }
      >
        {error?.msg}
      </div>

      <button
        className="login-form-btn col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7"
        onClick={() => login()}
      >
        Valider
      </button>
    </div>
  );
}
