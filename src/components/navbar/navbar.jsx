import React, { Component } from 'react';
import NavbarButtons from './navbar_buttons';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import './navbar.css';

const customMedia = generateMedia({
  lgDesktop: '1350px',
  mdDesktop: '1150px',
  tablet: '960px',
  mobile: '768px'
});

class Navbar extends Component {
  state = {
    campi: [
      {id: 1, name: '인문사회캠퍼스', isClicked: false, isShow: false, parts: [
        '1분반', '2분반', '3분반', '4분반', '5분반', '6분반', '7분반',
        '8분반', '9분반', '10분반', '11분반', '12분반', '13분반','I1분반', 'I2분반', 

      ] ,classNum: [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12', '13','i1','i2'
      ]},
      {id: 2, name: '자연과학캠퍼스', isClicked: false, isShow: false, parts: [
        '42분반', '43분반', '44분반'
      ],classNum: [
        '42', '43', '44'
      ]},
      {id: 3, name: 'SW인재페스티벌', isClicked: false, isShow: false, parts: [],classNum: []},
    ],
  };

  handleClick = campus => {
    console.log(campus);
    const campi = [...this.state.campi];
    const index = campi.indexOf(campus);

    campi[index].isClicked = !campi[index].isClicked;
    campi[index].isShow = !campi[index].isShow;

    this.setState({campi});

    if(campus.id == 3)
    {
      this.props.propsInfo.history.push('/board');
    }
  };

  render() {
    const menuClicked = this.props.menuClicked;
    
    return (
    <NavWrapper visible={menuClicked}>
      {/* style={{display: displayState}} */}
      <nav className = "sidenav" >
        {this.state.campi.map(campi => (
        <NavbarButtons key={campi.id} campi={campi} onClick={this.handleClick}/>
        ))}
      </nav>
    </NavWrapper>
    );
  }
}

const NavWrapper = styled.div`
  display: block;
  ${customMedia.lessThan('tablet')`
    display: ${(props) => (props.visible ? 'block' : 'none')};
  `}
`

export default Navbar;