import React from 'react';
import { ChildrenProps, ClassNameProps } from '../types';

interface FormProps extends ChildrenProps, ClassNameProps {
  onSubmit?: (e: React.FormEvent) => void;
}

const FormBase: React.FC<FormProps> = ({
  children,
  className,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  )
}

export default FormBase;
