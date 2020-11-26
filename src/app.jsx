import React from 'react';

import {BrowserRouter, Link, Router, Route, Switch} from 'react-router-dom';

import './components/header/header.css';


import Login from './components/login/login';
import Main from './components/main/main';
import Contents from './components/contents/contents';
import Board from './components/board/board';

function App() {

  
  return (
    <BrowserRouter>
      
        <Route exact path='/' component={Login} />

        <Route exact path='/main' component={Main} />
  
        <Route path='/contents/:id' exact component={Contents} />

        <Route path='/board' exact component={Board} />

    </BrowserRouter>
  )
}

export default App;
