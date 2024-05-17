import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import LinkBase from "./LinkBase";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <div>
        <ThemeSwitcher />
        <nav className="cluster">
          <Link to='/about'>About</Link>
          <LinkBase
            href='https://github.com/Kowalski25/tintify'
            ariaLabel='View website source code'>
            <span>Source Code</span>
          </LinkBase>
        </nav>
      </div>

      <div className=''>
        <div className=''>
          <h1>
            <a href='/'>Tintify</a>
          </h1>
          <p>Tint and Shades Generator</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
