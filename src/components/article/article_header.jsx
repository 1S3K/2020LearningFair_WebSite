import React, { Component } from 'react';

class ArticleHeader extends Component {

  render() {
    return (
      <div className="section-header">
        {/* 분반 정보 */}
      <div className="class-name">인문사회캠퍼스 {this.props.classId.id}분반</div>

        {/* 교수 정보 */}
        {/* <div className="prof-name">교수님</div> */}

        {/* 프로젝트 개수 정보 */}
        <div className="end-line-container">
          <div className="project-count">총 <strong>{this.props.dataCount}</strong>개의 작품이 등록되었습니다.</div>
        </div>
        
      </div>


    );
  }
}

export default ArticleHeader;