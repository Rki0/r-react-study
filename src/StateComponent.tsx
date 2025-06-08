import { useState } from "react";
import MainService from "./components/MainService";
import LeftNavi from "./components/LeftNavi";

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

      <footer>This footer will be re-rendered.</footer>
    </div>
  );
}

export default StateComponent;
