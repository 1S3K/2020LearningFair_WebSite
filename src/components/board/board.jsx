import React, { Component } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Iframe from 'react-iframe';

import './board.css';

class Board extends Component {
  state = {
    isLogin: true,
    menuClicked : false,
  }

  handleMenu = menuState => {
    const state = this.state;
    state.menuClicked = !menuState;
    console.log(state);
    this.setState({isLogin: state.isLogin, menuClicked: state.menuClicked});
  }

  

  render() {
    return (
      <section className="board-page">
        <Header isLogin={this.state.isLogin} menuClicked={this.state.menuClicked} onMenu={this.handleMenu}/>
        {/* <section className="board-page-middle">
          <Navbar propsInfo={this.props} menuClicked={this.state.menuClicked}/> */}

          <section className="board-contents">
            <img src="/images/poster-1.png" alt="시상 내역-1"/>
            <img src="/images/poster-2.png" alt="시상 내역-2"/>
          </section>

        {/* </section> */}
        <Footer />
        <Iframe src="/silence.mp3" allow="autoplay" id="audio" width='0' height='0'></Iframe>
        <audio id='player' autoPlay loop>
          <source src='/bgm.mp3' type='audio/mp3'></source>
        </audio>
        
        
        
        
      </section>
    );
  }
}

export default Board;