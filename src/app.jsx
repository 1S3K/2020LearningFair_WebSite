import React, { Component } from 'react';


import {BrowserRouter, Route} from 'react-router-dom';

import './components/header/header.css';


import Login from './components/login/login';
import Main from './components/main/main';
import Contents from './components/contents/contents';
import Board from './components/board/board';

class App extends Component {
  // state = {
  //   menuClicked : false,
  // };

  // handleMenu() {
  //   console.log(this.state.menuClicked);
  //   const menuClicked = this.state.menuClicked;
  //   menuClicked = !menuClicked;
  //   this.setState({menuClicked}); 
  // }

  render() {
    // console.log(this.state.menuClicked);
    return (
      <BrowserRouter>
        
          {/* <Route exact path='/' component={Login} /> */}

          <Route exact path='/' component={Board} />
    
          {/* <Route path='/contents/:id' exact component={Contents} /> */}

          <Route path='/board' exact component={Board} />

      </BrowserRouter>
    )
  }
}
export default App;
