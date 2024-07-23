import React from "react";
import { ChildrenProps, ClassNameProps } from "../../types";

interface ColorDetailsProps extends ClassNameProps, ChildrenProps {}

const ColorDetailLabel: React.FC<ColorDetailsProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <span className={className} {...rest}>
      {children}
    </span>
  );
};

export default ColorDetailLabel;
