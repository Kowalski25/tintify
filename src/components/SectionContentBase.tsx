import React from "react";
import { ChildrenProps, ClassNameProps } from "../types";

interface SectionContentProps extends ChildrenProps, ClassNameProps {
  title: string;
}

const SectionContentBase: React.FC<SectionContentProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <section className={className}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default SectionContentBase;
