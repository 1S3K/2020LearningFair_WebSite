import React, { Component } from "react";
import axios from "axios";
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import ArticleHeader from "./article_header";
import ArticleProject from "./article_project";

import "./article.css";
import "./article_header.css";
import "./article_project.css";

import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.js`;

const customMedia = generateMedia({
  lgDesktop: '1350px',
  mdDesktop: '1150px',
  tablet: '960px',
  mobile: '768px'
});

class Article extends Component {
  state = {
    data: [],
    page: 1,
    start: 0,
    end: 9,
    howmany:0
  };

  goNextPage = () => {
    const { page, start, end, howmany } = this.state;
    if(end > howmany) return;
    this.setState({
      page: page + 1,
      start: start + 9,
      end: end + 9,
    });
  };

  goPrevPage = () => {
    const { page, start, end } = this.state;
    if (start === 0) return;
    this.setState({
      page: page - 1,
      start: start - 9,
      end: end - 9,
    });
  };

  goSpecificPage = (i) => {
    this.setState({
      page: i,
      start: (i-1)*9,
      end: i*9,
    });
  }



  loadingData = async () => {
    try {
      const classId = this.props.classId;
      const url = "/api/lectures/" + classId.id + "/projects";
      const response = await axios.get(url, { validateStatus: false });

      console.log(response);

      const fetchData = response.data.data;

      fetchData.map((item, i) => {
        fetchData[i].isClicked = false;
        fetchData[i].isLike = false;
      });

      this.setState({
        data: fetchData,
        howmany: fetchData.length
      });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    const { loadingData } = this;
    loadingData();
  }

  handleClick = (item) => {
    const data = [...this.state.data];
    const index = data.indexOf(item);

    data[index].isClicked = !data[index].isClicked;

    this.setState({ data });
  };

  // 좋아요 이벤트
  handleLike = (item, groupNum) => {
    const classId = this.props.classId;
    const groupId =
      groupNum + 1 < 10 && groupNum + 1 >= 0
        ? "0" + (groupNum + 1)
        : groupNum + 1;
    const url = "/api/lectures/" + classId.id + "/groups/" + groupId + "/like";
    const data = [...this.state.data];
    const index = data.indexOf(item);

    data[index].isLike = !data[index].isLike;
    if (data[index].isLike) {
      axios.post(url).then((res) => {
        console.log(res.data);
      });
      data[index].likeCount++;
    } else {
      axios.delete(url).then((res) => {
        console.log(res.data);
      });
      data[index].likeCount--;
    }
    this.setState({ data });
  };

  render() {
    const selectedPart = this.props.data.selectedPart;
    const classId = this.props.classId;
    const howmany = this.state.howmany;
    let start = this.state.start;
    let end = this.state.end;
    let buttons = [];
    for(let i=1;i<parseInt((howmany-1)/9)+2;i++){
      buttons.push(<button onClick={()=>this.goSpecificPage(i)}>{i}</button>)
    }
    return (
      <section className="article">
        <ArticleHeader dataCount={howmany} classId={classId} />

        <section className="project-area">
          {this.state.data.slice(start, end).map((item, index) => {
            console.log(item, index);
            return (
              <ArticleProject
              key={item.id}
              item={item}
              onClick={this.handleClick}
              onLike={this.handleLike}
              selectedPart={selectedPart}
              classId={classId}
              index={index}
            />
            )
          }
            
          )}
        </section>

        <PageButtons className="page-buttons">
          <button onClick={this.goPrevPage}>◀︎ 이전</button>
          {buttons}
          <button onClick={this.goNextPage}>다음 ▶︎</button>
        </PageButtons>

      </section>
      
    );
  }
}

const PageButtons = styled.div`
  display: flex;
  justify-content: space-around;
  

  margin: 50px auto 0;

  width: 310px;
  // ${customMedia.lessThan('tablet')`
  //   display: ${(props) => (props.visible ? 'block' : 'none')};
  // `}
`

export default Article;
