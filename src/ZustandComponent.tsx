import ArticleZustand from "./components/ArticleZustand";
import LeftNaviZustand from "./components/LeftNaviZustand";
import MainServiceZustand from "./components/MainServiceZustand";

function ZustandComponent() {
  return (
    <div>
      <LeftNaviZustand />
      <MainServiceZustand />
      <ArticleZustand />

      <footer>This footer will be re-rendered.</footer>
    </div>
  );
}

export default ZustandComponent;
