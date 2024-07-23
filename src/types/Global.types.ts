import React from "react";

export interface CommonProps {
  children?: React.ReactNode;
  className?: string;
}

export interface ChildrenProps {
  children?: React.ReactNode;
}

export interface ClassNameProps {
  className?: string;
}

export interface InputHTMLProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface FormHTMLProps
  extends React.FormHTMLAttributes<HTMLFormElement> {}
