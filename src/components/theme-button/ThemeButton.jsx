import { useState } from "react";
import "./theme-button.scss";

const ThemeButton = () => {
  const [theme, setTheme] = useState("false");

  const handleClick = () => {
    const bodyClassName = theme === "dark" ? "dark-mode" : "light-mode";
    document.body.className = bodyClassName;
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="switch-checkbox">
      <label className="switch">
        <input type="checkbox" onClick={handleClick} />
        <span className="slider round"> </span>
      </label>
    </div>
  );
};

export default ThemeButton;
