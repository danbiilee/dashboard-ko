import React from 'react';
import { StyledMain } from './Main.style';
import { useAlert } from '@contexts/Alert';
import Alert from '@components/Alert';

export interface MainProps {
  type: string;
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ type, children }) => {
  const alert = useAlert();

  return (
    <>
      {alert.status && <Alert />}
      <StyledMain type={type}>{children}</StyledMain>
    </>
  );
};

export default Main;
