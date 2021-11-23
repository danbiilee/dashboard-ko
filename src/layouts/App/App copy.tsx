import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '@layouts/Header';

const AlarmDashboard = loadable(() => import('@pages/AlarmDashboard'));
const CriticalWarningStatus = loadable(() => import('@pages/CriticalWarningStatus'));

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={AlarmDashboard} />
        <Route path="/status" component={CriticalWarningStatus} />
        <Redirect exact path="/" to="/" />
      </Switch>
    </>
  );
};

export default App;
