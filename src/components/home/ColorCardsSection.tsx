import React from 'react';
import { ChildrenProps, ClassNameProps } from '../../types';
import TertiaryHeadingBase from '../TertiaryHeadingBase';

interface ColorsSectionProps extends ClassNameProps, ChildrenProps {
  title: string;
}

const ColorCardsSection: React.FC<ColorsSectionProps> = ({ children, title }) => {
  return (
    <div>
      <TertiaryHeadingBase>{title}</TertiaryHeadingBase>
      <div className='color-cards-section'>
        {children}
      </div>
    </div>
  );
};

export default ColorCardsSection;
