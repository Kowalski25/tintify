import React from "react";
import { Tooltip } from "react-tooltip";

interface ThemeSwitcherProps {}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  return (
    <div>
      <label className='toggle' data-tooltip-id='theme-toggle'>
        <input type='checkbox' />
        <span></span>
        <span>Dark mode</span>
      </label>
      <Tooltip
        id='theme-toggle'
        content='Switch theme'
        style={{ padding: "0.25rem 0.5rem" }}
        place="bottom"
      />
    </div>
  );
};

export default ThemeSwitcher;
