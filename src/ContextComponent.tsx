// import { ThemeProvider } from "./context/ThemeContext";
// import LeftNaviCtx from "./components/LeftNaviCtx";
// import MainServiceCtx from "./components/MainServiceCtx";

// function ContextComponent() {
//   return (
//     <ThemeProvider>
//       <LeftNaviCtx />
//       <MainServiceCtx />

//       <footer>This footer will be re-rendered.</footer>
//     </ThemeProvider>
//   );
// }

// export default ContextComponent;

// NOTE: This case is to check the case of non-re-rendered.
import { ThemeProvider } from "./context/ThemeContext";
import LeftNaviCtx from "./components/LeftNaviCtx";
import MainServiceCtx from "./components/MainServiceCtx";
import ArticleCtx from "./components/ArticleCtx";

function ContextComponent() {
  return (
    <>
      <ThemeProvider>
        <LeftNaviCtx />
        <MainServiceCtx />
        <ArticleCtx />
      </ThemeProvider>

      <footer>This footer won't be re-rendered.</footer>
    </>
  );
}

export default ContextComponent;
