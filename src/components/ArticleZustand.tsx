import { useThemeStore } from "../store/ThemeStore";

function ArticleZustand() {
  const convertTheme = useThemeStore((state) => state.convertTheme);

  return (
    <article>
      Hello, this component only uses setState.
      <button onClick={convertTheme}>Setter</button>
    </article>
  );
}

export default ArticleZustand;
