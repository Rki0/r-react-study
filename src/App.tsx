import { useState } from "react";
import FormWithReducer from "./FormWithReducer";
import FormWithState from "./FormWithState";
import FormWithHook from "./FormWithHook";
import FormWithRef from "./FormWithRef";

function App() {
  const [version, setVersion] = useState("state");

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVersion(e.target.value);
  };

  return (
    <>
      <select name="version" id="version" onChange={onChangeHandler}>
        <option value="state">useState</option>
        <option value="reducer">useReducer</option>
        <option value="hook">React-Hook-Form</option>
        <option value="ref">useRef</option>
      </select>

      <h1>Sign Up</h1>

      {version === "state" && <FormWithState />}
      {version === "reducer" && <FormWithReducer />}
      {version === "hook" && <FormWithHook />}
      {version === "ref" && <FormWithRef />}
    </>
  );
}

export default App;
