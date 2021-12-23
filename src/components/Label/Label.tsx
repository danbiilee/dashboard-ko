import React from 'react';
import { StyledLabel } from './Label.style';

interface LabelProps {
  name: string;
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ name, children }) => {
  return (
    <StyledLabel>
      <span className="label">{name}</span>
      {children}
    </StyledLabel>
  );
};

export default Label;
