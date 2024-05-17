import React from "react";

interface ThemeSwitcherProps {}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  return (
    <div>
      <label className="toggle">
        <input type='checkbox' />
        <span></span>
        <span>Dark mode</span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
