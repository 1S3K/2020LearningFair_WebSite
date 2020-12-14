import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './header.css'; // header-web css

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {width: props.width};
  }

  handleMenu = () => {
    this.props.onMenu(this.props.menuClicked);
  }

  render() {
    
    // 로그인 상태에 따라 헤더의 프로필 표시
    const isLogin = this.props.isLogin;
    const name = sessionStorage.getItem("username");
    // const url = name ? '/main' : '/'

    return (
    <header style={{display: (isLogin ? '' : 'flex')}} className="header-container">
    
    <Link to='/' style={{all: 'unset'}}><img src="/images/logo.png" className="header-logo" alt=""/></Link>
    

        {
          isLogin && 
          <div className="header-profile">
            {/* <span className="header-profile-name">{name}님</span> 
            <span className="header-profile-msg">환영합니다.</span> */}

            <button className="header-menu-btn" onClick={this.handleMenu}><img src="/images/menu.png" alt="메뉴"/></button>
            
          </div>
        }
      
    </header>
    );
  }
}

export default Header;