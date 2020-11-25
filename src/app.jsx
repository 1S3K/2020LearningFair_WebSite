import React from 'react';

import {BrowserRouter, Link, Router, Route, Switch} from 'react-router-dom';

import './components/header/header.css';


import Login from './components/login/login';
import Main from './components/main/main';
import Contents from './components/contents/contents';

function App() {

  
  return (
    <BrowserRouter>
      {/* <Switch> */}
        {/* <Router> */}
        <Route exact path='/' component={Login} />
          {/* <Login />
        </Route> */}


        <Route exact path='/main' component={Main} />
          {/* <Main />
        </Route> */}


        <Route path='/contents/:id' exact component={Contents} />
          {/* <Contents />
        </Route> */}
        {/* </Router> */}
      {/* </Switch> */}
    </BrowserRouter>
  )
}

export default App;
