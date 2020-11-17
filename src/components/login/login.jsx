import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';

import {post} from 'axios';

// css
import './login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      major: '',
      sid: '',
      username: '',
      comment: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }


  

  handleFormSubmit(e) {

    e.preventDefault();
    this.loginUser().then((response) => {
      console.log(response.data);
    })
    
  }
  
  handleValueChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  loginUser = async() => {
    try {

      const url = '/api/login';
      const formData = new FormData();
      formData.append('studentId', this.state.sid);
      formData.append('name', this.state.name);
      formData.append('comment', this.state.comment);
      formData.append('major', this.state.major);

      const config = {
        header: {
          'content-type': 'application/json'
        }
      }

      console.log(formData);

      return post(url, formData, config);
    } catch (err) {
      throw err;
    }
  }

  render() {
    return (
      <section className="login">
        <Header isLogin={this.state.isLogin}/>

        {/* login form */}
        <form id="section" onSubmit={this.handleFormSubmit}>
          {/* main banner area */}
          <div className="main_banner_area">
            <img className="main_banner_img" src="/images/main-banner.png" alt="성균SW교육원"/>
          </div>

          {/* login area */}
          <div className="login_area">

            {/* 학과 */}
            <div className="container">
              <div className="form-item">
                <input type="text" id="example" name="major" value={this.state.major} onChange={this.handleValueChange} required/>
                <label htmlFor="example" data-label="학과"></label>
              </div>
              <p> ex) 컴퓨터교육과 | 외부인인 경우에는 '관람'이라고 기재해주세요. </p>
            </div>

            {/* 학번 */}
            <div className="container">
              <div className="form-item">
                <input type="text" id="example" name="sid" value={this.state.sid} onChange={this.handleValueChange} required/>
                <label htmlFor="example" data-label="학번"></label>
              </div>
              <p> ex) 2020012345 | 외부인인 경우에는 '2020123123'을 사용해주세요. </p>
            </div>

            {/* 이름 */}
            <div className="container">
              <div className="form-item">
                <input type="text" id="example" name="username" value={this.state.username} onChange={this.handleValueChange} required/>
                <label htmlFor="example" data-label="이름"></label>
              </div>
              <p> ex) 홍길동 </p>
            </div>

            {/* 방명록 */}
            <div className="container">
              <div className="form-item">
                <input type="text" id="example" name="comment" value={this.state.comment} onChange={this.handleValueChange} required/>
                <label htmlFor="example" data-label="방명록"></label>
              </div>
              <p> 방명록을 기재해주세요. </p>
            </div>
          </div>
          {/* // login area */}

          <div className="login_button_area">
            {/* <button><Link to='/main' style={{color: '#fff', all: 'unset'}}>이동하기</Link></button> */}
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