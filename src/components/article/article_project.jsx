import React, { Component,useState,Fragment } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { render } from 'react-dom';

import ReactPlayer from 'react-player';
import myPDF from './../../sample-pdf2.pdf';
import Modal from 'react-modal';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const url =  "/sample.pdf"

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
    
  }
};

class ArticleProject extends Component {

  state = {
    modalIsOpen: false,
    secondModalIsOpen: false,
    numPages: null,
    pageNumber: 1,
    scale : 1
  }


  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  openSecondModal = () => {
    this.setState({ secondModalIsOpen: true });
  };

  closeSecondModal = () => {
    this.setState({ secondModalIsOpen: false });
  };


  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  handleClick = () => {
    this.props.onClick(this.props.item);
  }

  handleLike = () => {
    this.props.onLike(this.props.item);
  }



  render() {


    const { pageNumber, numPages,scale } = this.state;
    const {title, groupName, members, description, likeCount, video, isClicked, isLike} = this.props.item;
    const selectedPart = this.props.selectedPart;
    // const [isOpen,setIsOpen] = useState(false);

    return (





      
      
      <article className="project-container">

      <div>



        <Modal style = {customStyles} isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <div className ="modal-Root-Screen">

                  <div className ="modal-PDF-area">
                    <Document
                    file={myPDF}

                      onLoadSuccess={this.onDocumentLoadSuccess}>
                      <Page scale = {scale} pageNumber={pageNumber} />
                    </Document>

                  </div>

                <div className = "modal-button-area">
                    <button className ="modal-button" onClick={() => this.setState({scale : this.state.scale = this.state.scale + 0.05})}>
                        확대하기
                      </button>

                      <button className ="modal-button" onClick={() => this.setState({scale : this.state.scale = this.state.scale - 0.05})}>
                        축소하기
                      </button>



                        <button className ="modal-button-navi" onClick={() => this.state.pageNumber > 1 ?
                          this.setState({numPages : this.state.numPages,
                            pageNumber : this.state.pageNumber-1}) : null}>
                        이전장
                      </button>

                      <button className ="modal-button" onClick={() => this.state.pageNumber < numPages ?
                          this.setState({numPages : this.state.numPages,
                            pageNumber : this.state.pageNumber+1}) : null}>
                          다음장
                    </button>

                    <span class = "page-index">{pageNumber} / {numPages}</span>
               

                </div>
                          
          </div>
     

        </Modal>


      </div>




      {/* 아티클 컨테이너 (비디오 제외) - 컴포넌트로 분리하기 */}
      <div className="article-container"> 

        {/* 프로젝트 이미지 */}        
        <img onClick={this.openModal} src="/images/test.jpg" alt="project-img" className="project-img"/>


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
            <button className="project-like-button" onClick={this.handleLike}><img src={ isLike ? 

            "/images/like-button.png" : "/images/unlike-button@3x.png"} alt=""/></button>
            
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

      <div className="video_area_wrapper">
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
      </div>  
    </article>
    );
  }
}

export default ArticleProject;

