interface ArticleProps {
  setIsDarkMode: () => void;
}

function Article({ setIsDarkMode }: ArticleProps) {
  return (
    <article>
      Hello, this component only uses setState.
      <button onClick={setIsDarkMode}>Setter</button>
    </article>
  );
}

export default Article;
