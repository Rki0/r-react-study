import { useState } from "react";

interface Todo {
  id: number;
  text: string;
}

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onButtonClickHandler = () => {
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: todos.length + 1,
          text: value,
        },
      ];
    });
  };

  return (
    <>
      <div>
        <input type="text" value={value} onChange={onInputChangeHandler} />

        <button onClick={onButtonClickHandler}>Add</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
