import { useState } from "react";
import {
  validateEmailFormat,
  validatePasswordFormat,
} from "./utils/validation";

function FormWithState() {
  // input value
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordForConfirm, setPasswordForConfirm] = useState("");

  // validation
  const [isValidEmailFormat, setIsValidEmailFormat] = useState(false);
  const [isValidPasswordFormat, setIsValidPasswordFormat] = useState(false);
  const [isPasswordMatched, setIsPasswordMatched] = useState(false);

  const onEmailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setEmail(value);

    if (validateEmailFormat(value)) {
      setIsValidEmailFormat(true);
    } else {
      setIsValidEmailFormat(false);
    }
  };

  const onPasswordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setPassword(value);

    if (validatePasswordFormat(value)) {
      setIsValidPasswordFormat(true);
    } else {
      setIsValidPasswordFormat(false);
    }

    if (value !== passwordForConfirm) {
      setIsPasswordMatched(false);
    } else {
      setIsPasswordMatched(true);
    }
  };

  const onPasswordForConfirmChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;

    setPasswordForConfirm(value);

    if (value !== password) {
      setIsPasswordMatched(false);
    } else {
      setIsPasswordMatched(true);
    }
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmailFormat || !isValidPasswordFormat) {
      alert("Invalid input.");
      return;
    }

    if (password !== passwordForConfirm) {
      alert("Please check password once again.");
      return;
    }

    console.log(
      "Sing up request from useState",
      email,
      password,
      passwordForConfirm
    );
  };

  return (
    <>
      <h2>useState</h2>

      <form onSubmit={onSubmitHandler}>
        <div>
          <input
            type="email"
            placeholder="Put in your e-mail"
            value={email}
            onChange={onEmailChangeHandler}
          />

          <p>
            {isValidEmailFormat
              ? "This is valid e-mail format."
              : "Invalid email format. Try again."}
          </p>
        </div>

        <div>
          <input
            type="password"
            placeholder="Put in your password"
            value={password}
            onChange={onPasswordChangeHandler}
          />

          <p>
            {isValidPasswordFormat
              ? "This is valid password."
              : "You can't use this format. Try again."}
          </p>
        </div>

        <div>
          <input
            type="password"
            placeholder="Put in your password once again"
            value={passwordForConfirm}
            onChange={onPasswordForConfirmChangeHandler}
          />
          <p>{isPasswordMatched ? "Matched" : "Not matched. Try again."}</p>
        </div>

        <button type="submit">Sign Up!</button>
      </form>
    </>
  );
}

export default FormWithState;
