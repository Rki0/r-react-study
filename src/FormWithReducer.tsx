import { useReducer } from "react";
import {
  validateEmailFormat,
  validatePasswordFormat,
} from "./utils/validation";

interface State {
  email: string;
  password: string;
  passwordForConfirm: string;
  isValidEmailFormat: boolean;
  isValidPasswordFormat: boolean;
  isPasswordMatched: boolean;
}

type Action =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_PASSWORD_CONFIRM"; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_EMAIL": {
      const email = action.payload;
      return {
        ...state,
        email,
        isValidEmailFormat: validateEmailFormat(email),
      };
    }

    case "SET_PASSWORD": {
      const password = action.payload;
      const isValidPasswordFormat = validatePasswordFormat(password);
      const isPasswordMatched = password === state.passwordForConfirm;
      return {
        ...state,
        password,
        isValidPasswordFormat,
        isPasswordMatched,
      };
    }

    case "SET_PASSWORD_CONFIRM": {
      const passwordForConfirm = action.payload;
      const isPasswordMatched = passwordForConfirm === state.password;
      return {
        ...state,
        passwordForConfirm,
        isPasswordMatched,
      };
    }

    default:
      return state;
  }
};

const initialState: State = {
  email: "",
  password: "",
  passwordForConfirm: "",
  isValidEmailFormat: false,
  isValidPasswordFormat: false,
  isPasswordMatched: false,
};

function FormWithState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onEmailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
  };

  const onPasswordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_PASSWORD", payload: e.target.value });
  };

  const onPasswordForConfirmChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({ type: "SET_PASSWORD_CONFIRM", payload: e.target.value });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!state.isValidEmailFormat || !state.isValidPasswordFormat) {
      alert("Invalid input.");
      return;
    }

    if (state.password !== state.passwordForConfirm) {
      alert("Please check password once again.");
      return;
    }

    console.log(
      "Sing up request from useReducer",
      state.email,
      state.password,
      state.passwordForConfirm
    );
  };

  return (
    <>
      <h2>useReducer</h2>

      <form onSubmit={onSubmitHandler}>
        <div>
          <input
            type="email"
            placeholder="Put in your e-mail"
            value={state.email}
            onChange={onEmailChangeHandler}
          />

          <p>
            {state.isValidEmailFormat
              ? "This is valid e-mail format."
              : "Invalid email format. Try again."}
          </p>
        </div>

        <div>
          <input
            type="password"
            placeholder="Put in your password"
            value={state.password}
            onChange={onPasswordChangeHandler}
          />

          <p>
            {state.isValidPasswordFormat
              ? "This is valid password."
              : "You can't use this format. Try again."}
          </p>
        </div>

        <div>
          <input
            type="password"
            placeholder="Put in your password once again"
            value={state.passwordForConfirm}
            onChange={onPasswordForConfirmChangeHandler}
          />
          <p>
            {state.isPasswordMatched ? "Matched" : "Not matched. Try again."}
          </p>
        </div>

        <button type="submit">Sign Up!</button>
      </form>
    </>
  );
}

export default FormWithState;
