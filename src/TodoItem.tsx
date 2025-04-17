import { useState } from "react";
import Button from "./components/Button";

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

          <Button onClickHandler={saveUpdate} text="Save" />
          <Button onClickHandler={offUpdate} text="Cancel" />
        </>
      ) : (
        <>
          <span>{todo.text}</span>

          <Button onClickHandler={onUpdate} text="Update" />
          <Button onClickHandler={() => deleteHandler(todo.id)} text="Delete" />
        </>
      )}
    </li>
  );
}

export default TodoItem;
