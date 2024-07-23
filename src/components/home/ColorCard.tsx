import React from "react";
import { ChildrenProps, ClassNameProps } from "../../types";

interface ColorCardProps extends ChildrenProps, ClassNameProps {
  key?: string | number;
  backgroundColor: React.CSSProperties["backgroundColor"];
}

const ColorCard: React.FC<ColorCardProps> = ({
  className,
  key,
  backgroundColor,
  children,
}) => {
  return (
    <div className={className} key={key} style={{ backgroundColor}}>
      {children}
    </div>
  );
};

export default ColorCard;
