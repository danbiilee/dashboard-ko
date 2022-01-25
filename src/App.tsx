import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SWRConfig } from 'swr';
import Header from '@layouts/Header';
import RelationProvider from '@contexts/Relation';
import AlertProvider from '@contexts/Alert';

const AlarmDashboard = loadable(() => import(/* webpackChunkName: "alarm" */ '@pages/AlarmDashboard'));
const CriticalWarningStatus = loadable(() => import(/* webpackChunkName: "status" */ '@pages/CriticalWarningStatus'));

const App = () => {
  return (
    <SWRConfig
      value={{
        errorRetryCount: ENV.SWR_CONFIG.ERROR_RETRY_COUNT,
      }}
    >
      <RelationProvider>
        <AlertProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={AlarmDashboard} />
            <Route path="/status" component={CriticalWarningStatus} />
            <Redirect exact path="/" to="/" />
          </Switch>
        </AlertProvider>
      </RelationProvider>
    </SWRConfig>
  );
};

export default App;
