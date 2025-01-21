import { useTheme } from "../ThemeProvider/ThemeProvider";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "DAYMODE" : "NIGHTMODE"}
    </button>
  );
};

export default ThemeSwitcher;
