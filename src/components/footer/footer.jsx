import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
  render() {
    return (
    <footer>
      <div id="footer_divider"></div>
      <div id="footer_contents">
        <div id="info">
          <img src="/images/skku.png" alt="" className="footer-logo"/>
          <p id="school_info">
            인문사회과학캠퍼스 (03063) 서울특별시 종로구 성균관로 25-2 / TEL.02.760.0114 <br/>
            자연과학캠퍼스 (16419) 경기도 수원시 장안구 서부로 2066 / TEL.031.290.5114 <br/>
            COPYRIGHT ⓒ 2014 SUNGKYUNKWAN UNIVERSITY ALL RIGHTS RESERVED.
          </p>
        </div>
      </div> 
    </footer>
    );
  }
}

export default Footer;