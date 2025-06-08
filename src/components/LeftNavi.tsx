interface LeftNavi {
  isDarkMode: boolean;
  onDarkModeChangeHandler: () => void;
}

function LeftNavi({ isDarkMode, onDarkModeChangeHandler }: LeftNavi) {
  return (
    <nav>
      {isDarkMode ? <i id="dark_mode_icon" /> : <i id="light_mode_icon" />}

      <button onClick={onDarkModeChangeHandler}>Convert mode</button>
    </nav>
  );
}

export default LeftNavi;
