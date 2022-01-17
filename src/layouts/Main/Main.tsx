import React from 'react';
import { Alert } from 'antd';
import { StyledMain } from './Main.style';
import { useAlert, useSetAlert, defaultAlert } from '@contexts/Alert';

export interface MainProps {
  type: string;
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ type, children }) => {
  const alert = useAlert();
  const setAlert = useSetAlert();

  return (
    <>
      {alert.status && (
        <Alert
          message="Warning"
          description={alert.message}
          type="warning"
          showIcon
          closable
          afterClose={() => setAlert(defaultAlert)}
        />
      )}
      <StyledMain type={type}>{children}</StyledMain>
    </>
  );
};

export default Main;
