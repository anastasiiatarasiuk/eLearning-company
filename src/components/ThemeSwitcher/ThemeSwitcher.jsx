import { useTheme } from "../ThemeProvider/ThemeProvider";
import { useEffect } from "react";
import "./ThemeSwitcher.scss";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme !== theme) {
      toggleTheme();
    }
  }, [theme, toggleTheme]);

  const handleToggleTheme = () => {
    toggleTheme();
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <label className="theme-toggle">
      <input
        className="theme-toggle__checkbox"
        type="checkbox"
        onChange={handleToggleTheme}
        checked={theme === "dark"}
      />
      <span className="theme-toggle__slider">
        <span className="theme-toggle__text">
          {theme === "light" ? "DAYMODE" : "NIGHTMODE"}
        </span>
      </span>
    </label>
  );
};

export default ThemeSwitcher;
