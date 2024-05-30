import React from "react";
import { ChildrenProps, ClassNameProps } from "../types";

interface ButtonBaseProps extends ChildrenProps, ClassNameProps {
  type: "button" | "submit" | "reset";
}

const ButtonBase: React.FC<ButtonBaseProps> = ({
  children,
  className,
  type,
}) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};

export default ButtonBase;
