import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SWRConfig } from 'swr';
import Header from '@layouts/Header';
import RelationProvider from '@contexts/Relation';

const AlarmDashboard = loadable(() => import('@pages/AlarmDashboard'));
const CriticalWarningStatus = loadable(() => import('@pages/CriticalWarningStatus'));

const App = () => {
  return (
    <RelationProvider>
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
    </RelationProvider>
  );
};

export default App;
