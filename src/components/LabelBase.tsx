import React from "react";
import { ChildrenProps, ClassNameProps } from "../types";

interface LabelProps extends ChildrenProps, ClassNameProps {
  htmlFor?: string;
}

const LabelBase: React.FC<LabelProps> = ({ className, children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default LabelBase;
