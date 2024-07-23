import React from "react";
import { ClassNameProps, InputHTMLProps } from "../../types";

interface InputProps extends ClassNameProps, InputHTMLProps {
  id?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputBase: React.FC<InputProps> = ({
  className,
  id,
  name,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <input
      className={className}
      name={name}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default InputBase;
