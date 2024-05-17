import React from "react";
import { ChildrenProps, ClassNameProps } from "../types";

interface ButtonBaseProps extends ChildrenProps, ClassNameProps {}

const ButtonBase: React.FC<ButtonBaseProps> = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};

export default ButtonBase;
