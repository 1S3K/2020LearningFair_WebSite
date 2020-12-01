import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import './main.css';

import Footer from '../footer/footer';
import Header from '../header/header';
import Navbar from '../navbar/navbar';

class Main extends Component {
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
      <section className="main-page">
        <Header isLogin={this.state.isLogin} menuClicked={this.state.menuClicked} onMenu={this.handleMenu}/>
        <div className="middle-section">

          <Navbar propsInfo={this.props} menuClicked={this.state.menuClicked}/>
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
                    성균관대학교 신동렬 총장님
                  </div>
                  <div className="congrat_video_wrapper">
                    <ReactPlayer 
                      className="react-player" 
                      width="100%"
                      height="100%"
                      light='/images/dr-thumbnail.png'
                      url='/videos/main_video_01.mp4'
                      playing 
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
                    성균SW교육원 김재현 원장님
                  </div>
                  <div className="congrat_video_wrapper">
                    <ReactPlayer 
                      className="react-player" 
                      width="100%"
                      height="100%"
                      url='/videos/main_video_02.mp4' 
                      light='/images/jh-thumbnail.png'
                      playing
                      controls
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