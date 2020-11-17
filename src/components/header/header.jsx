import React, { Component } from 'react';

import './header.css'; // header-web css

class Header extends Component {

  render() {
    // 로그인 상태에 따라 헤더의 프로필 표시
    const isLogin = this.props.isLogin;
    
    return (
    <header style={{display: (isLogin ? '' : 'flex')}}>
      <div className="header-container">
        <img src="/images/logo.png" alt="로고" className="header-logo"/>
        {
          isLogin && 
          <div className="header-profile">
            <span className="header-profile-name">김재현님</span> 
            <span className="header-profile-msg">환영합니다.</span>
          </div>
        }
      </div>
    </header>
    );
  }
}

export default Header;