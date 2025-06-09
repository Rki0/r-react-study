import { useState } from "react";
import MainService from "./components/MainService";
import LeftNavi from "./components/LeftNavi";
import Article from "./components/Article";

function StateComponent() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onDarkModeChangeHandler = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div>
      <LeftNavi
        isDarkMode={isDarkMode}
        onDarkModeChangeHandler={onDarkModeChangeHandler}
      />

      <MainService isDarkMode={isDarkMode} />

      <Article setIsDarkMode={onDarkModeChangeHandler} />

      <footer>This footer will be re-rendered.</footer>
    </div>
  );
}

export default StateComponent;
