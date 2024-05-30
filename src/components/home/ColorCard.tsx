import React from "react";
import { ChildrenProps, ClassNameProps } from "../../types";

interface ColorCardProps extends ChildrenProps, ClassNameProps {}

const ColorCard: React.FC<ColorCardProps> = ({ children, className }) => {
  return <td className={className}>{children}</td>;
};

export default ColorCard;
