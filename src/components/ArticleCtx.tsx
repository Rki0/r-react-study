import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// NOTE: Even though, the component uses only setter, it'll be re-rendered.
function ArticleCtx() {
  const context = useContext(ThemeContext);

  return (
    <article>
      Hello, this component only uses setState.
      <button onClick={context?.toggleTheme}>Setter</button>
    </article>
  );
}

export default ArticleCtx;
