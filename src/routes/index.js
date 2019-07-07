import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routeData from './routesData';

const Routes = () => (
  <Switch>
    <Route>
      {routeData.default.map(({ exact, path, component }, index) => (
        <Route key={index} exact={exact} path={path} component={component} />
      ))}
    </Route>
  </Switch>
);
export default Routes;
