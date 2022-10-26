import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IFormInput,
  InputFormComponent,
} from "components/forms/elements/formInput/formInput";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HttpService } from "services/http/http-native.service";
import "./registerForm.scss";

const userName_pram: IFormInput = {
  type: "text",
  inputAttribut: { id: "user_name" },
  error: {
    regex: /^[a-zA-Z][a-zA-Z-9-_]{3,23}$/,
    conditionsMessage: [
      "Doit faire entre 3 et 23 caractère",
      " Unniquement des lettre et chiffre",
    ],
  },
  label: "Pseudo",
};

const password_param: IFormInput = {
  type: "password",
  inputAttribut: { id: "user_pwd" },
  error: {
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*]).{8,24}$/,
    conditionsMessage: [
      "Le mot de passe doit contenir une majuscle, minuscule, un chiffre",
      " un caractère spéciale !@#$%*",
    ],
  },
  label: "Mot de Passe",
};
const secondPassword_param: IFormInput = {
  type: "password",
  inputAttribut: { id: "secondUser_pwd" },
  label: "Confirmez votre mot de Passe",
};
type SignUpError = {
  isError: boolean;
  msg?: string;
};

export function RegisterFormComposant() {
  const [isCorrectUSN, setIsCorrectUSN] = useState(false);
  const [isCorrectPWd, setIsCorrectPwd] = useState(false);
  const [inputUserValue, setUserValue] = useState("");
  const [inputPwdValue, setPwdValue] = useState("");
  const [inputSecondPwdValue, setSecondPwdValue] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<SignUpError>();
  const http = new HttpService();

  function checkData(): boolean {
    const iserror =
      isCorrectUSN && isCorrectPWd && inputPwdValue === inputSecondPwdValue
        ? true
        : false;
    setError({
      isError: !iserror,
      msg: " Les mots de passes ne se corespondent pas",
    });
    return iserror;
  }

  async function sendData(e: React.MouseEvent) {
    e.preventDefault();
    if (checkData()) {
      try {
        const response = await http.post("user/register", {
          username: inputUserValue,
          password: inputPwdValue,
        });
        if (response.isSuccess) setSuccess(true);
      } catch (e) {
        setError({ isError: true, msg: e as string });
      }
    }
  }
  return (
    <div className="register-form main-container grid gap-6 grid-cols-4 md:grid-cols-7 lg:grid-cols-9">
      {!success ? (
        <>
          <div className="register-form-input col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7">
            <InputFormComponent
              props={userName_pram}
              returnIsInputCorrect={(isCorrectUSN: boolean) =>
                setIsCorrectUSN(isCorrectUSN)
              }
              returnInputValue={(inputUserValue: string) =>
                setUserValue(inputUserValue)
              }
            />
          </div>

          <div className="register-form-input col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7">
            <InputFormComponent
              props={password_param}
              returnIsInputCorrect={(isCorrectUSN: boolean) =>
                setIsCorrectPwd(isCorrectUSN)
              }
              returnInputValue={(inputPwdValue: string) =>
                setPwdValue(inputPwdValue)
              }
            />
          </div>

          <div className="register-form-input col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7">
            <InputFormComponent
              props={secondPassword_param}
              returnInputValue={(inputSecondPwdValue: string) =>
                setSecondPwdValue(inputSecondPwdValue)
              }
            />
          </div>
          <div
            className={
              error?.isError
                ? "register-form-error col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7"
                : "hidden"
            }
          >
            {error?.msg}
          </div>
          <button
            className="register-form-btn col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7"
            onClick={(e) => sendData(e)}
          >
            Valider
          </button>
        </>
      ) : (
        <div className="register-form-success  col-span-9  text-center m-auto">
          <div className=" md:flex ">
            <FontAwesomeIcon
              className="text-green-400 register-form-success-icon"
              size="4x"
              icon={faCheckCircle}
            />
            <div className="register-form-success-text">Reussite</div>
          </div>
          <Link className="register-form-success-link" to="#">
            Connection
          </Link>
        </div>
      )}
    </div>
  );
}
