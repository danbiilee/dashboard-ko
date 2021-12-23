import React from 'react';
import { StyledMain } from './Main.style';

export interface MainProps {
  type: string;
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ type, children }) => {
  return <StyledMain type={type}>{children}</StyledMain>;
};

export default Main;
