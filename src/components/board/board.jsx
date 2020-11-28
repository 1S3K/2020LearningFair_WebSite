import React, { Component } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Navbar from '../navbar/navbar';

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
        <section className="board-page-middle">
          <Navbar propsInfo={this.props} menuClicked={this.state.menuClicked}/>

          <section className="board-contents">
            <div className="board-img-container">
              <img src="/images/foster.png" alt="4차 산업혁명인재양성 연합페스티벌"/>  
            </div>
            <div className="board-info">
              <h1>2020 SW인재페스티벌</h1>
              <p id="info1">2020년도 SW인재페스티벌을 안내합니다.</p><br/>
              <p className="board-info-detail">
                <p id="board-info01"><strong>✓ 주 제</strong> : SW중심대학 · 혁신성장청년인재 집중양성 사업 우수성과 전시 <br/></p>
                <p><strong>✓ 일 시</strong> : 2020년 12월 3일(목) ~ 2020년 12월 4일(금) 2일간<br/></p>
                <p><strong>✓ 주 최</strong> : 과학기술정보통신부 <br/></p>
                <p><strong>✓ 주 관</strong> : 정보통신기획평가원, 소프트웨어중심대학협의회 <br/></p>
                <p>
                  <strong>✓ 프로그램</strong><br/><br/>
                  💡 <strong>12월 3일(목)</strong> <br/>
                  10:00 ~ 11:00 개막식 <br/><span style={{fontSize: "0.8em"}}>(개회사, 환영사, 축하영상)</span><br/>   11:00 ~ 16:00 예비대학 강연 <br/><span style={{fontSize: "0.8em"}}>(4차산업혁명과 직업의 미래, 창의적사고와 코딩, 모두의 인공지능 - 정의와 역사, 게임프로그래밍 개론)</span> <br/>14:00 ~ 16:00 '20년도 교육생 수료식 <br/><span style={{fontSize: "0.8em"}}>(4차산업 혁명, 변화에 주목하고 대응하는 사람들, IT업계 취업 전략, 미니토크콘서트)</span><br/><br/>
                  💡 <strong>12월 4일(금)</strong><br/>
                  10:00 ~ 12:00 토크콘서트 <br/><span style={{fontSize: "0.8em"}}>(SW창업 A to Z, SW 전공자 취업 전략?)</span>  <br/>   13:30 ~ 15:30 명사 특강 <br/><span style={{fontSize: "0.8em"}}>(데이터의 힘, SW스타트업 스케일업 성공 전략)</span><br/>   15:30 ~ 16:00 우수작품 시상식 <br/><span style={{fontSize: "0.8em"}}>(SW중심대학, 혁신성장청년인재집중양성)</span><br/>
                </p>
                <p><br/>▶︎ SW인재페스티벌 바로가기: <a href="http://www.swhrfestival.kr/swhr/index.do" target="_blank">http://www.swhrfestival.kr/swhr/index.do</a></p>
              </p>
            </div>
          </section>

        </section>
        <Footer />
      </section>
    );
  }
}

export default Board;