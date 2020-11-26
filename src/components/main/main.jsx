import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import './main.css';

import Footer from '../footer/footer';
import Header from '../header/header';
import Navbar from '../navbar/navbar';

import { Redirect } from 'react-router-dom';

class Main extends Component {
  state = {
    isLogin: true,
  }


  render() {
    return (

      <section className="main-page">
        <Header isLogin={this.state.isLogin} />
        <div className="middle-section">

          <Navbar propsInfo={this.props}/>
            <div className="contents">

              {/* main banner */}
              <div className="main_banner_area">
                <img src="/images/main-banner.png" alt="성균SW교육원" className="main_banner_img"/>
              </div>
              {/* // main banner */}

              {/* video contents X 2 */}
              <div className="video_area_wrapper">

                {/* video contents #1 */}
                <div className="congrat_video_area">
                  <div id="congrat_video_area_title">
                    <strong> 축사 동영상 </strong>
                  </div>
                  <div id="congrat_video_area_subtitle">
                    성균SW교육원 김재현 원장님
                  </div>
                  <div className="congrat_video_wrapper">
                    <ReactPlayer 
                      className="react-player" 
                      width="100%"
                      height="100%"
                      url='/videos/test.mp4' 
                      controls
                    />
                  </div>
                </div>
                {/* // video contents #1 */}

                {/* video contents #2 */}
                <div className="congrat_video_area">
                  <div id="congrat_video_area_title">
                    <strong style={{color: '#fff'}}> 축사 동영상 </strong>
                  </div>
                  <div id="congrat_video_area_subtitle">
                    외부초청 홍길동님
                  </div>
                  <div className="congrat_video_wrapper">
                    <ReactPlayer 
                      className="react-player" 
                      width="100%"
                      height="100%"
                      url='https://www.youtube.com/watch?v=7C2z4GqqS5E' controls
                    />
                  </div>
                </div>
                {/* // video contents #2 */}
              </div>
              {/* // video contents X 2 */}

              </div>

          </div>
        

        <Footer />
      </section>
    );
  }
}

export default Main;