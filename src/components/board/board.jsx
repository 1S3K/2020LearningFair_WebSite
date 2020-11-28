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
              <img src="/images/sw-festival.png" alt="4차 산업혁명인재양성 연합페스티벌"/>  
            </div>
            <div className="board-info">
              <h1>2020년도 4차 산업혁명인재양성 <br/> 연합페스티벌 공모전 안내</h1>
                <p id="info1">2020년도 4차 산업혁명인재양성 연합페스티벌 공모전을 안내합니다.</p><br/>
              <p className="board-info-detail">
                <p><strong>✓ 참가교</strong> : 계명대 / 명지대 / 상명대 / 선문대 / 성균관대 <br/></p>
                <p><strong>✓ 주 제</strong> : “4차 산업혁명시대의 창의융합형 인재 양성” <br/></p>
                <p><strong>✓ 일 시</strong> : 2020년 11월 27일(금) <br/></p>
                <p><strong>✓ 주 최</strong> : 계명대학교 LINC+사업단, 명지대학교 LINC+사업단, 상명대학교 LINC+사업단, <br />선문대학교 LINC+사업단, 성균관대학교 LINC+사업단, 한국정보통신보안윤리학회 <br/></p>
                <p>
                  <strong>✓ 공모전 세부 주제 및 시상분야</strong><br/>
                  💡 <strong>창업아이디어</strong> : 최신 ICT 기술 또는 4차산업혁명 관련 기술을 활용한 창업아이디어 <br/>
                  📝 <strong>논문</strong> : 정보통신활용, 정보통신윤리, 정보보안 등과 관련된 연구 <br/>
                  👨🏻‍💻 <strong>코딩</strong>  : 대학 1학년 과정에서 습득한 기술로 구현한 기초코딩 결과물 <br/>
                  📹 <strong>UCC 및 카드뉴스</strong>  : 정보통신윤리, 정보보안, 산업보안과 관련된 주제 <br/>
                </p>
                <p><br/>참가방법 및 세부 일정 등에 관한 자세한 내용은 첨부파일을 참고 바랍니다.</p>
                <p>감사합니다.</p>
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