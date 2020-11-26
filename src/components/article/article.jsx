import React, { Component } from 'react';
import axios from 'axios';
import ArticleHeader from './article_header';
import ArticleProject from './article_project';

import './article.css';
import './article_header.css';
import './article_project.css';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Article extends Component {
  state = {
    data: [],
  };

  loadingData = async() => {
    try {
      const classId = this.props.classId;
      const url = '/api/lectures/' + classId.id + '/projects'
      const response = await axios.get(
        url, {validateStatus: false}
      );

      console.log(response);

      const fetchData = response.data.data;

      fetchData.map((item, i)=>{
        fetchData[i].isClicked = false;
        fetchData[i].isLike = false;
      })

      this.setState({
        data: fetchData,
      });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    const {loadingData} = this;
    loadingData();
  }

  handleClick = item => {
    const data = [...this.state.data];
    const index = data.indexOf(item);

    data[index].isClicked = !data[index].isClicked;
  
    this.setState({data});
  }

  // 좋아요 이벤트
  handleLike = (item, groupNum) => {
    const classId = this.props.classId;
    const groupId = groupNum+1 < 10 && groupNum+1 >= 0 ? "0"+ (groupNum+1) : groupNum+1;
    const url = '/api/lectures/' + classId.id + '/groups/' + groupId + '/like'
    const data = [...this.state.data];
    const index = data.indexOf(item);

    data[index].isLike = !data[index].isLike; 
    if (data[index].isLike) {
      axios.post(url).then(res => {console.log(res.data)});
      data[index].likeCount++;
    } else {
      axios.delete(url).then(res => {console.log(res.data)});
      data[index].likeCount--;
    }
    this.setState({data});
  }

  render() {
    const selectedPart = this.props.data.selectedPart;
    const classId = this.props.classId;
    return (
      <section className="article">
        <ArticleHeader 
          dataCount={this.state.data.length}
          classId = {classId}
        />
        
        <section className="project-area">
          {this.state.data.map((item, index) => (
        <ArticleProject 
          key={item.id} 
          item={item} 
          onClick = {this.handleClick}
          onLike = {this.handleLike}
          selectedPart = {selectedPart}
          classId = {classId}
          index = {index}
        />
        ))}
        </section>
      </section>
    );
  }
}

export default Article;