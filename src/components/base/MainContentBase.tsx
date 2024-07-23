import React from "react";
import { ChildrenProps, ClassNameProps } from "../../types";

interface MainContentProps extends ChildrenProps, ClassNameProps {}

const MainContentBase: React.FC<MainContentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <main className={className} {...props}>
      {children}
    </main>
  );
};

export default MainContentBase;
