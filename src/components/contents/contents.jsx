import React, { Component } from 'react';

import './contents.css';


import Footer from '../footer/footer';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Article from '../article/article';

class Contents extends Component {
  state = {
    isLogin: true,
    menuClicked : false,
    campi: [
      {id: 1, name: '인문사회캠퍼스', isClicked: false, isShow: false, parts: [
        '1분반', '2분반', '3분반', '4분반', '5분반', '6분반', '7분반',
        '8분반', '9분반', '10분반', '11분반', '12분반', '13분반','I1분반', 'I2분반', 
      ]},
      {id: 2, name: '자연과학캠퍼스', isClicked: false, isShow: false, parts: [
        '42분반', '43분반', '44분반'
      ]},
      {id: 3, name: 'SW인재페스티벌', isClicked: false, isShow: false, parts: []},
    ],
  }

  handleMenu = menuState => {
    const state = this.state;
    state.menuClicked = !menuState;
    console.log(state);
    this.setState({isLogin: state.isLogin, menuClicked: state.menuClicked}); 
  }

  render() {
    const {params} = this.props.match;
    return (
      <section className="contents-page">
        <Header isLogin={this.state.isLogin} menuClicked={this.state.menuClicked} onMenu={this.handleMenu}/>
        <section className="contents-page-middle">
          <Navbar propsInfo={this.props} menuClicked={this.state.menuClicked}/>
          <Article data={this.state} classId={params}/>
        </section>
        <Footer />
      </section>

    );
  }
}

export default Contents;