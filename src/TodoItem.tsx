import { useState } from "react";

interface Todo {
  id: number;
  text: string;
}

interface TodoItem {
  todo: Todo;
  deleteHandler: (id: number) => void;
  updateHandler: (id: number, newText: string) => void;
}

function TodoItem({ todo, deleteHandler, updateHandler }: TodoItem) {
  const [textForUpdate, setTextForUpdate] = useState(todo.text);
  const [isUpdate, setIsUpdate] = useState(false);

  const onUpdate = () => {
    setIsUpdate(true);
  };

  const offUpdate = () => {
    setIsUpdate(false);
  };

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextForUpdate(e.target.value);
  };

  const saveUpdate = () => {
    updateHandler(todo.id, textForUpdate);
    setIsUpdate(false);
  };

  return (
    <li>
      {isUpdate ? (
        <>
          <input
            type="text"
            value={textForUpdate}
            onChange={onInputChangeHandler}
          />

          <button onClick={saveUpdate}>Save</button>
          <button onClick={offUpdate}>Cancel</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>

          <button onClick={onUpdate}>Update</button>
          <button onClick={() => deleteHandler(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
