import React, { Component } from 'react';

import Footer from '../footer/footer';
import Header from '../header/header';

import axios from 'axios';

// css
import './login.css';

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      studentId: '',
      name: '',
      comment: '',
      major: '',
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()

    sessionStorage.setItem("username", this.state.name);
    axios.post('/api/login', this.state).then(res => {
      if (res.data.success)
      {
        console.log(res.data);
        console.log('login success');
        this.props.history.push('/main');
      }
      else
      {
        console.log('login failed');
      }
      
    }).catch(err => {
      console.log(err);
    })

  }


  render() {
    return (
      <section className="login">
        <Header isLogin={this.state.isLogin}/>

        {/* login form */}

        <form id="section" onSubmit={this.submitHandler}>
          {/* main banner area */}
          <div className="main_banner_area">
            <img className="main_banner_img" src="/images/main-banner.png" alt="성균SW교육원"/>
          </div>
          <div className="chrome_banner">
           <img className="chrome_banner_img" src="/images/chorme-banner.png" alt="성균SW교육원"/>
          </div>

          {/* login area */}
          <div className="login_area">

            {/* 학과 */}
            <div className="container">
              <div className="form-item">

                <input type="text" id="example" name="major" value={this.state.major} onChange={this.changeHandler} required/>
                <label htmlFor="example" data-label="학과"></label>
              </div>
              <p> ex) 컴퓨터교육과 | 외부인인 경우에는 '0000'이라고 기재해주세요. </p>
            </div>

            {/* 학번 */}
            <div className="container">
              <div className="form-item">

                <input type="text" id="example" name="studentId" value={this.state.studentId} onChange={this.changeHandler} required/>
                <label htmlFor="example" data-label="학번"></label>
              </div>
              <p> ex) 2020123123 | 외부인인 경우에는 '0000'을 사용해주세요. </p>
            </div>

            {/* 이름 */}
            <div className="container">
              <div className="form-item">

                <input type="text" id="example" name="name" value={this.state.name} onChange={this.changeHandler} required/>
                <label htmlFor="example" data-label="이름"></label>
              </div>
              <p> ex) 홍길동 </p>
            </div>

            {/* 방명록 */}
            <div className="container">
              <div className="form-item">

                <input type="text" id="example" name="comment" value={this.state.comment} onChange={this.changeHandler} required/>
                <label htmlFor="example" data-label="응원의 말"></label>
              </div>
              <p> 응원의 한마디를 남겨주세요!</p>
            </div>
          </div>
          {/* // login area */}

          <div className="login_button_area">

            <button type="submit" >
              {/* <Link to='/main' style={{color: 'white', all: 'unset'}}> */}
                입장
              {/* </Link> */}
            </button>
          </div>
        </form>
        {/* // #login section */}

        <Footer />
      </section>
    );
  }
}

export default Login;