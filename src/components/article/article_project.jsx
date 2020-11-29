import React, { Component,useState,Fragment } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { BiPlusCircle,BiMinusCircle,BiSkipNextCircle,BiSkipPreviousCircle } from "react-icons/bi";
import {IoIosCloseCircleOutline} from "react-icons/io"
import { generateMedia } from 'styled-media-query';
import throttle from "lodash.throttle";



import ReactPlayer from 'react-player';
import myPDF from './../../sample-pdf2.pdf';
import Modal from 'react-modal';
import styled from 'styled-components';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const url =  "/sample.pdf"
const pdfUrl = "http://www.africau.edu/images/default/sample.pdf"
var array = new Uint8Array(pdfUrl);

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

const customMedia = generateMedia({
  lgDesktop: '1350px',
  mdDesktop: '1150px',
  tablet: '960px',
  mobile: '768px'
});


class ArticleProject extends Component {

  state = {
    pdfObject :  {url :'http://www.africau.edu/images/default/sample.pdf'},
    modalIsOpen: false,
    secondModalIsOpen: false,
    numPages: null,
    pageNumber: 1,
    firstNumber : 1,

    scale : 0.75,
    thumbnailScale : 0.4,

    videoModalIsOpen:false
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
    this.props.onLike(this.props.item, this.props.index);
  }



  render() {


    const { firstNumber,pageNumber, numPages,scale,thumbnailScale } = this.state;
    const classId = this.props.classId;
    const {title, group, groupName, members, description, likeCount, video, isClicked, isLike} = this.props.item;

    return (




      
      
      <article className="project-container">

      <div>



        <Modal style = {customStyles} isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <div className ="modal-Root-Screen">

                  <div className ="modal-PDF-area">
                    <Document
                        file="https://cors-anywhere.herokuapp.com/https://2020learningfair.s3.ap-northeast-2.amazonaws.com/static/proto.pdf"
                    // file = {this.state.pdfObject}
                    // file = {myPDF}
                    // file = {{data: JSON.parse("http://www.africau.edu/images/default/sample.pdf").data}}
                    // file = {{ url: 'http://www.africau.edu/images/default/sample.pdf', httpHeaders: { 'X-CustomHeader': '40359820958024350238508234' }, withCredentials: true }}

                      onLoadSuccess={this.onDocumentLoadSuccess}>
                      <Page scale = {scale} pageNumber={pageNumber} />
                    </Document>

                  </div>

                <div className = "modal-button-area">

                    <BiPlusCircle  color ="#174483" className ="modal-button" onClick={() => this.setState({scale : this.state.scale = this.state.scale + 0.05})}>

                    </BiPlusCircle>
              

                      <BiMinusCircle color ="#174483" className ="modal-button" onClick={() => this.setState({scale : this.state.scale = this.state.scale - 0.05})}>
                        
                      </BiMinusCircle>



                        <BiSkipPreviousCircle color ="#174483" className ="modal-button-navi" onClick={() => this.state.pageNumber > 1 ?
                          this.setState({numPages : this.state.numPages,
                            pageNumber : this.state.pageNumber-1}) : null}>
                        
                      </BiSkipPreviousCircle>

                      <BiSkipNextCircle color ="#174483" className ="modal-button" onClick={() => this.state.pageNumber < numPages ?
                          this.setState({numPages : this.state.numPages,
                            pageNumber : this.state.pageNumber+1}) : null}>
                          
                    </BiSkipNextCircle>

                    <span class = "page-index">{pageNumber} / {numPages}</span>
               

                </div>
                          
                 </div>
     

        </Modal>


      </div>




      {/* 아티클 컨테이너 (비디오 제외) - 컴포넌트로 분리하기 */}
      <div className="article-container"> 

      <div className ="thumbnail-area">

      <Document onClick={this.openModal} 
                    file="https://cors-anywhere.herokuapp.com/https://2020learningfair.s3.ap-northeast-2.amazonaws.com/static/proto.pdf"

                      onLoadSuccess={this.onDocumentLoadSuccess}>
                      <Page scale = {thumbnailScale} pageNumber={firstNumber} />
      </Document>
      </div>

        {/* 프로젝트 이미지 */}        
  

        {/* // 프로젝트 이미지 마무리 */}

        {/* 프로젝트 정보 */}
        <div className="project-info">
                          <div className="project-title">{classId.id}분반 {group}조</div>
          <div className="project-contents">
            
            {title}

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

  
     
  
            {/* 그룹 정보 컨테이너 */}
            <div className="group-info-container">
              <div className="teamname-area">
                <div className="groupname-label">팀명</div>
                <div className="groupname">{groupName}</div>
              </div>
              <div className="teammember-area">
                <div className="groupmember-label">팀원</div>
                <div className="groupmember">
                  {members}
                </div>
              </div>
            </div>
  
            {/* 동영상 버튼  */}
            
              <button className="show-video" onClick={this.handleClick}>시연 동영상 보기</button>
            
            
       
          {/* // 그룹 정보 마무리 */}
  
        </div>
        {/* // 아티클 컨테이너 마무리 */}
        
</div>
 

      {/* video part */}

      <div className="video_area_wrapper">
        <ReactPlayer 
          className="react-player" 
          url={video}
          width='100%'
          height='100%'
          style={{ display : (isClicked ? 'block' : 'none') }}
          // playing
          controls
        />
      </div> 

      {/* modal */}
      <ModalOverlay visible={isClicked} onClick={this.handleClick}>
      <ModalWrapper tabIndex="-1" visible={isClicked} >
        <ModalInner tabIndex="0" className="modal-inner">
        <div className="modal-header">
          <div className="modal-title">{title}</div>
          {/* <button className="close-btn" onClick={this.handleClick}><IoIosCloseCircleOutline size="36" color="#154483"/></button> */}
        </div>
        
        <ReactPlayer 
          className="react-player"  
          url={video}
          width='100%'
          height='100%'
          controls
          playing={isClicked}
        />
        </ModalInner>
      </ModalWrapper>
      </ModalOverlay>


    </article>
    );
  }
}

// modal style component (모달창 스타일 컴포넌트)
const ModalWrapper = styled.div`
  ${customMedia.lessThan('mobile')`
    display: none;
  `}
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`

const ModalOverlay = styled.div`
  ${customMedia.lessThan('mobile')`
  display: none;
  `}
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 999;
`

const ModalInner = styled.div`
  ${customMedia.lessThan('mobile')`
  display: none;
  `}
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 50vw;
  max-width: 1280px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 20px 10px 5px;
`

export default ArticleProject;

