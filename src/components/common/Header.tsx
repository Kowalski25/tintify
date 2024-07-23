import React from "react";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import LinkBase from "../base/LinkBase";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className='site-header | flex-group mx-auto padding-block-6'>
      <div>
        <h1>
          <Link to='/'>Tintify</Link>
        </h1>
      </div>
      <div className='flex-group'>
        <nav className='cluster'>
          <ThemeToggle />
          <LinkBase
            href='https://github.com/Kowalski25/tintify'
            ariaLabel='View website source code'>
            <img
              src='/src/assets/images/github_logo.svg'
              className='github-logo'
              data-tooltip-id='github'
              alt='Github logo'
            />
          </LinkBase>
          <Link to='/about' className='page-link'>
            About
          </Link>
        </nav>
        <Tooltip
          id='github'
          place='bottom'
          content='View source code'
          style={{ padding: "0.25rem 0.5rem" }}
        />
      </div>
    </header>
  );
};

export default Header;
