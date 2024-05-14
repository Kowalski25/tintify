import React, { ReactNode } from "react";

interface LinkProps {
  href?: string;
  ariaLabel?: string;
  className?: string;
  children?: ReactNode;
}

const LinkBase: React.FC<LinkProps> = ({
  href,
  ariaLabel,
  className,
  children,
}) => {
  return (
    <a
      href={href}
      className={className}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={ariaLabel}>
      {children}
    </a>
  );
};

export default LinkBase;
