import React from "react";
import { ClassNameProps } from "../types";

interface InputProps extends ClassNameProps {
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
}) => {
  return (
    <input
      className={className}
      name={name}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default InputBase;
