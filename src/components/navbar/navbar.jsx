import React, { Component } from 'react';
import NavbarButtons from './navbar_buttons';

import './navbar.css';

class Navbar extends Component {
  state = {
    campi: [
      {id: 1, name: '인문사회캠퍼스', isClicked: false, isShow: false, parts: [
        '1분반', '2분반', '3분반', '4분반', '5분반', '6분반', '7분반',
        '8분반', '9분반', '10분반', '11분반', '12분반', '13분반',
      ]},
      {id: 2, name: '자연과학캠퍼스', isClicked: false, isShow: false, parts: [
        '42분반', '43분반', '44분반', 'I1분반', 'I2분반', 
      ]},
      {id: 3, name: 'SW인재페스티벌', isClicked: false, isShow: false, parts: []},
    ],
  };

  handleClick = campus => {
    const campi = [...this.state.campi];
    const index = campi.indexOf(campus);

    campi[index].isClicked = !campi[index].isClicked;
    campi[index].isShow = !campi[index].isShow;

    this.setState({campi});
  };

  render() {
    return (
      <nav className = "sidenav">
        {this.state.campi.map(campi => (
        <NavbarButtons key={campi.id} campi={campi} onClick={this.handleClick}/>
        ))}
      </nav>
    );
  }
}

export default Navbar;