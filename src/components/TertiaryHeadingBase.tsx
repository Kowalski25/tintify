import React from "react";
import { ChildrenProps, ClassNameProps } from "../types";

interface TertiaryHeadingProps extends ClassNameProps, ChildrenProps {}

const TertiaryHeadingBase: React.FC<TertiaryHeadingProps> = ({
  children,
  className,
}) => {
  return <h3 className={className}>{children}</h3>;
};

export default TertiaryHeadingBase;
