import React from 'react';

import {BrowserRouter, Link, Redirect, Route, Switch} from 'react-router-dom';

import './components/header/header.css';


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


        <Route path='/contents/:id' exact component={Contents} />
          {/* <Contents />
        </Route> */}

      </Switch>
    </BrowserRouter>
  )
}

export default App;
