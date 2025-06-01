import { useRef, useState } from "react";
import {
  validateEmailFormat,
  validatePasswordFormat,
} from "./utils/validation";

function FormWithRef() {
  // input value
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordForConfirmRef = useRef<HTMLInputElement>(null);

  // validation
  const [isValidEmailFormat, setIsValidEmailFormat] = useState(false);
  const [isValidPasswordFormat, setIsValidPasswordFormat] = useState(false);
  const [isPasswordMatched, setIsPasswordMatched] = useState(false);

  const onEmailChangeHandler = () => {
    const value = emailRef.current?.value || "";
    setIsValidEmailFormat(validateEmailFormat(value));
  };

  const onPasswordChangeHandler = () => {
    const password = passwordRef.current?.value || "";
    const confirm = passwordForConfirmRef.current?.value || "";

    setIsValidPasswordFormat(validatePasswordFormat(password));
    setIsPasswordMatched(password === confirm);
  };

  const onPasswordForConfirmChangeHandler = () => {
    const password = passwordRef.current?.value || "";
    const confirm = passwordForConfirmRef.current?.value || "";

    setIsPasswordMatched(password === confirm);
  };

  const onCreateRandomEmailHandler = () => {
    if (!emailRef.current) {
      return;
    }

    const random = Math.round(Math.random() * 100);

    const randomEmail = `random${random}@test.com`;

    emailRef.current.value = randomEmail;
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const confirm = passwordForConfirmRef.current?.value || "";

    if (!validateEmailFormat(email) || !validatePasswordFormat(password)) {
      alert("Invalid input.");
      return;
    }

    if (password !== confirm) {
      alert("Please check password once again.");
      return;
    }

    console.log("Sign up request from useRef", email, password, confirm);
  };

  return (
    <>
      <h2>useRef</h2>

      <form onSubmit={onSubmitHandler}>
        <div>
          <input
            type="email"
            placeholder="Put in your e-mail"
            ref={emailRef}
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
            ref={passwordRef}
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
            ref={passwordForConfirmRef}
            onChange={onPasswordForConfirmChangeHandler}
          />
          <p>{isPasswordMatched ? "Matched" : "Not matched. Try again."}</p>
        </div>

        <button type="submit">Sign Up!</button>
        <button type="button" onClick={onCreateRandomEmailHandler}>
          Create random email
        </button>
      </form>
    </>
  );
}

export default FormWithRef;
