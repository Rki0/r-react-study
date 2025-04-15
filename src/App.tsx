import { useState } from "react";
import TodoItem from "./TodoItem";

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

  const onUpdateButtonClickHandler = (id: number, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <>
      <div>
        <input type="text" value={value} onChange={onInputChangeHandler} />

        <button onClick={onAddButtonClickHandler}>Add</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteHandler={onDeleteButtonClickHandler}
            updateHandler={onUpdateButtonClickHandler}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
