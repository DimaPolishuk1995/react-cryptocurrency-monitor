import * as React from 'react';
import { Route, Switch} from 'react-router-dom';

import Home from '../../pages/Home'

const Main = () => (
  <main>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </main>
);

export default Main;
