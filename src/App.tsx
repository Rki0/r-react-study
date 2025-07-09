import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Hello from "./components/Hello";
import MemoizedComponent from "./components/MemoizedComponent";

const todos = [
  { id: 1, user: "Kiyoung", text: "Buy milk", completed: false },
  { id: 2, user: "Saki", text: "Call mom", completed: true },
  { id: 3, user: "Marina", text: "Finish React task", completed: false },
  { id: 4, user: "Kiyoung", text: "Walk the dog", completed: true },
  { id: 5, user: "Saki", text: "Send email to client", completed: false },
  { id: 6, user: "Marina", text: "Book dentist appointment", completed: true },
  { id: 7, user: "Kiyoung", text: "Practice coding", completed: false },
  { id: 8, user: "Saki", text: "Check bank account", completed: false },
  { id: 9, user: "Marina", text: "Review resume", completed: false },
];

function App() {
  const [isReRender, setIsReRender] = useState(false);
  const [user, setUser] = useState("Kiyoung");
  // const prev = useRef<(() => Promise<void>) | undefined>(undefined);

  const onSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUser(e.target.value);
  };

  const makeReRender = () => {
    setIsReRender((prev) => !prev);
  };

  // NOTE: The constant will be re-evaluated when the "user" is changed.
  // NOTE: That is, if the user isn't changed, it will return same value without evaluation.
  const memoizedGetTodoList = useMemo(() => {
    console.log("Re-render: memoizedGetTodoList(useMemo)");
    return todos.filter((todo) => todo.user === user);
  }, [user]);

  // NOTE: If we include a function into the dependency, we should use useCallback to prevent re
  // const fetchSomething = async () => {
  //   await Promise.resolve();
  // };

  const fetchSomething = useCallback(async () => {
    await Promise.resolve();
  }, []);

  useEffect(() => {
    // console.log("Is same function?", prev.current === fetchSomething);
    // prev.current = fetchSomething;
    console.log("Re-Render: useEffect");

    fetchSomething();
  }, [fetchSomething]); // NOTE: We should include a function into the dependency to prevent using outdated function.

  return (
    <>
      <Hello />

      {/* NOTE: This component will re-render when the "isReRender" state changes. */}
      <MemoizedComponent isReRender={isReRender} />

      <button onClick={makeReRender}>ReRender</button>

      <select onChange={onSelectHandler}>
        <option value="Kiyoung">Kiyoung</option>
        <option value="Saki">Saki</option>
        <option value="Marina">Marina</option>
      </select>

      <p>{user}'s Todo List</p>

      <ul>
        {memoizedGetTodoList.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
