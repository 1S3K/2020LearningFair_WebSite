import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class ArticleProject extends Component {

  handleClick = () => {
    this.props.onClick(this.props.item);
  }

  handleLike = () => {
    this.props.onLike(this.props.project);
  }

  render() {
    const {title, groupName, members, description, likeCount, video, isClicked, isLike} = this.props.item;
    const selectedPart = this.props.selectedPart;

    return (
      
      <article className="project-container">

      {/* 아티클 컨테이너 (비디오 제외) - 컴포넌트로 분리하기 */}
      <div className="article-container"> 

        {/* 프로젝트 이미지 */}        
        <img src="/images/test.jpg" alt="project-img" className="project-img"/>
        

        {/* // 프로젝트 이미지 마무리 */}

        {/* 프로젝트 정보 */}
        <div className="project-info">
          <div className="project-title">{title}</div>
          <div className="project-contents">
            
            {description}
            {/* {selectedPart} */}

          </div>
          <div className="project-like">
          {/* <img src="/images/unlike-button.png" alt=""/> */}
            <button className="project-like-button" onClick={this.handleLike}><img src={ 1 ? 
            "/images/like-button.png" : "/images/unlike-button.png"} alt=""/></button>
            
            <span className="project-like-count">{likeCount}</span>
          </div>
        </div>
        {/* // 프로젝트 정보 마무리 */}

        {/* 그룹 정보 */}
        <div className="group-info">

          {/* 그룹 정보 컨테이너 */}
          <div className="group-info-container">
            <div className="groupname-label">팀명</div>
            <div className="groupname">{groupName}</div>
            <div className="groupmember-label">팀원</div>
            <div className="groupmember">
              {members}
            </div>
          </div>

          {/* 동영상 버튼  */}
          <button className="show-video" onClick={this.handleClick}>시연 동영상 보기</button>
        </div>
        {/* // 그룹 정보 마무리 */}

      </div>
      {/* // 아티클 컨테이너 마무리 */}

      {/* video part */}
      <ReactPlayer 
        className="react-player" 
        // url='https://www.youtube.com/watch?v=7C2z4GqqS5E' 
        url={video}
        width='100%'
        height='100%'
        style={{ display : (isClicked ? 'block' : 'none') }}
        // playing
        controls
      />
      

    </article>
    );
  }
}

export default ArticleProject;

