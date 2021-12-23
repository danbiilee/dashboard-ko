import React from 'react';
import { SWRConfig } from 'swr';
import Header from '@layouts/Header';

const App = () => {
  return (
    <SWRConfig
      value={{
        errorRetryCount: ENV.ERROR_RETRY_COUNT,
      }}
    >
      <Header />
    </SWRConfig>
  );
};

export default App;
