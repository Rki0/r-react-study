import { useThemeStore } from "../store/ThemeStore";

function LeftNaviZustand() {
  const { isDarkMode, convertTheme } = useThemeStore((state) => state);

  return (
    <nav>
      {isDarkMode ? <i id="dark_mode_icon" /> : <i id="light_mode_icon" />}

      <button onClick={convertTheme}>Convert mode</button>
    </nav>
  );
}

export default LeftNaviZustand;
