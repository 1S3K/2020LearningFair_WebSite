import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import './contents.css';


import Footer from '../footer/footer';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Article from '../article/article';

class Contents extends Component {
  state = {
    isLogin: true,
  }

  render() {
    return (

      <section className="contents-page">
        <Header isLogin={this.state.isLogin} />
        <section className="contents-page-middle">
          <Navbar />
          <Article />
        </section>
        <Footer />
      </section>

    );
  }
}

export default Contents;