import React from "react";
import { ChildrenProps, ClassNameProps } from "../../types";

interface ListItemProps extends ChildrenProps, ClassNameProps {}

const ListItemBase: React.FC<ListItemProps> = ({ children, className }) => {
  return <li className={className}>{children}</li>;
};

export default ListItemBase;
