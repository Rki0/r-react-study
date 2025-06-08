import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function LeftNaviCtx() {
  const context = useContext(ThemeContext);

  return (
    <nav>
      {context?.theme === "dark" ? (
        <i id="dark_mode_icon" />
      ) : (
        <i id="light_mode_icon" />
      )}

      <button onClick={context?.toggleTheme}>Convert mode</button>
    </nav>
  );
}

export default LeftNaviCtx;
