import React, { Component } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

// css
import './login.css' ;

class Login extends Component {
  render() {
    return (
      <section className="login">
        <Header />

        {/* login form */}
        <form id="section">
          {/* main banner area */}
          <div className="main_banner_area">
            <img src="/images/main-banner.png" alt="성균SW교육원"/>
          </div>

          {/* login area */}
          <div className="login_area">

            {/* 학과 */}
            <div className="container">
              <div className="form-item">
                <input type="text" id="example" placeholder=""/>
                <label htmlFor="example" data-label="학과"></label>
              </div>
              <p> ex) 사범대학 // 외부인인 경우에는 "관람"이라고 기재해주세요. </p>
            </div>

            {/* 학번 */}
            <div className="container">
              <div className="form-item">
                <input type="text" id="example" placeholder=""/>
                <label htmlFor="example" data-label="학번"></label>
              </div>
              <p> 외부인인 경우에는 2020123123을 사용해주세요. </p>
            </div>

            {/* 이름 */}
            <div className="container">
              <div className="form-item">
                <input type="text" id="example" placeholder=""/>
                <label htmlFor="example" data-label="이름"></label>
              </div>
              <p> ex) 홍길동 </p>
            </div>

            {/* 방명록 */}
            <div className="container">
              <div className="form-item">
                <input type="text" id="example" placeholder=""/>
                <label htmlFor="example" data-label="방명록"></label>
              </div>
              <p> 방명록을 기재해주세요. </p>
            </div>
          </div>
          {/* // login area */}

          <div className="login_button_area">
            <button>이동하기</button>
          </div>
        </form>
        {/* // #login section */}

        <Footer />
      </section>
    );
  }
}

export default Login;