interface Button {
  onClickHandler: () => void;
  text: string;
}

function Button({ text, onClickHandler }: Button) {
  return <button onClick={onClickHandler}>{text}</button>;
}

export default Button;
