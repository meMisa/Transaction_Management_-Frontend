// node_modules
import React, { lazy, Suspense, memo } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
// components
import TransactionLayout from 'components/layouts/TransactionLayout';

const TransactionPage = lazy(
  () => import('pages/transactions/TransactionPage'),
);
const SettingPage = lazy(() => import('pages/settings/SettingPage'));

const App = () => (
  <>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <TransactionLayout>
            <Switch>
              <Route exact path="/transactions" component={TransactionPage} />
              <Route exact path="/settings" component={SettingPage} />

              <Redirect to="/transactions" />
            </Switch>
          </TransactionLayout>
        </Switch>
      </Suspense>
    </Router>
  </>
);

export default memo(App);
