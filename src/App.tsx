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

  const onAddButtonClickHandler = () => {
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

  const onDeleteButtonClickHandler = (id: number) => {
    const deletedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(deletedTodos);
  };

  return (
    <>
      <div>
        <input type="text" value={value} onChange={onInputChangeHandler} />

        <button onClick={onAddButtonClickHandler}>Add</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>

            <button onClick={() => onDeleteButtonClickHandler(todo.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
