import ThemeSwitcher from "./ThemeSwitcher";
import LinkBase from "./LinkBase";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <ThemeSwitcher />
        <nav>
          <Link to='/about'>About</Link>
          <LinkBase
            href='https://github.com/Kowalski25/tintify'
            ariaLabel='View website source code'>
            <span>Source Code</span>
          </LinkBase>
        </nav>
      </div>

      <header className=''>
        <div className=''>
          <h1>
            <a href='/'>Tintify</a>
          </h1>
          <p>Generate tint and shade</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
