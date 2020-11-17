import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './reset.css';

import Login from './components/login/login';
import Main from './components/main/main';
import Contents from './components/contents/contents';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>

        <Route path='/main' exact>
          <Main />
        </Route>

        <Route path='/contents' exact>
          <Contents />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App;
