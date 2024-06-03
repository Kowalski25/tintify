import React from "react";
import { Link } from "react-router-dom";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="site-footer | padding-block-5">
      <Link to='/about'>About</Link>
    </footer>
  );
};

export default Footer;
