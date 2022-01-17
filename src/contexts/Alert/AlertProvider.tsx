import React, { createContext, useContext, useState } from 'react';

interface AlertProvider {
  children: React.ReactNode;
}

export const defaultState = {
  status: false,
  message: '',
};

const AlertContext = createContext<typeof defaultState>(defaultState);
const AlertUpdateContext = createContext<React.Dispatch<React.SetStateAction<typeof defaultState>>>(() => {});

export const useAlert = () => {
  return useContext(AlertContext);
};

export const useSetAlert = () => {
  return useContext(AlertUpdateContext);
};

const AlertProvider: React.FC<AlertProvider> = ({ children }) => {
  const [alert, setAlert] = useState(defaultState);

  return (
    <AlertContext.Provider value={alert}>
      <AlertUpdateContext.Provider value={setAlert}>{children}</AlertUpdateContext.Provider>
    </AlertContext.Provider>
  );
};

export default AlertProvider;
