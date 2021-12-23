import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SWRConfig } from 'swr';
import Header from '@layouts/Header';

const AlarmDashboard = loadable(() => import('@pages/AlarmDashboard'));
const CriticalWarningStatus = loadable(() => import('@pages/CriticalWarningStatus'));

const App = () => {
  return (
    <SWRConfig
      value={{
        errorRetryCount: ENV.ERROR_RETRY_COUNT,
      }}
    >
      <Header />
      <Switch>
        <Route exact path="/" component={AlarmDashboard} />
        <Route path="/status" component={CriticalWarningStatus} />
        <Redirect exact path="/" to="/" />
      </Switch>
    </SWRConfig>
  );
};

export default App;
