import React, { Component } from 'react';

import './header.css'; // header-web css

class Header extends Component {
  render() {
    return (
    <header>
      <div className="header-container">
        <img src="/images/logo.png" alt="로고" className="header-logo"/>
        <div className="header-profile">
          <span className="header-profile-name">김재현님</span> 
          <span className="header-profile-msg">환영합니다.</span>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;