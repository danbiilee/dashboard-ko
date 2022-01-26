import React from 'react';
import { Alert as AntdAlert } from 'antd';
import { useAlert, useSetAlert, defaultAlert } from '@contexts/Alert';

const Alert = () => {
  const alert = useAlert();
  const setAlert = useSetAlert();

  return (
    <AntdAlert
      message="Warning"
      description={alert.message}
      type="warning"
      showIcon
      closable
      afterClose={() => setAlert(defaultAlert)}
    />
  );
};

export default Alert;
