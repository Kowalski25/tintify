import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({ ...rest }) => {
  return (
    <footer className="site-footer | padding-block-6" {...rest}>
      
    </footer>
  );
};

export default Footer;
