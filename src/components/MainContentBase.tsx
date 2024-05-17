import React from "react";
import { ChildrenProps, ClassNameProps } from "../types";

interface MainContentProps extends ChildrenProps, ClassNameProps {}

const MainContentBase: React.FC<MainContentProps> = ({
  children,
  className,
}) => {
  return <main className={className}>{children}</main>;
};

export default MainContentBase;
