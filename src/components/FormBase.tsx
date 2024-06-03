import React from "react";
import { ChildrenProps, ClassNameProps, FormHTMLProps } from "../types";

interface FormProps extends ChildrenProps, ClassNameProps, FormHTMLProps {
  onSubmit?: (e: React.FormEvent) => void;
}

const FormBase: React.FC<FormProps> = ({
  children,
  className,
  onSubmit,
  ...props
}) => {
  return (
    <form onSubmit={onSubmit} className={className} {...props}>
      {children}
    </form>
  );
};

export default FormBase;
