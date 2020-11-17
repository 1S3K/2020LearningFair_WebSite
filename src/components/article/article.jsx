import React, { Component } from 'react';
import axios from 'axios';
import ArticleHeader from './article_header';
import ArticleProject from './article_project';

import './article.css';
import './article_header.css';
import './article_project.css';

class Article extends Component {
  state = {
    data: [],
  };

  loadingData = async() => {
    try {

      const response = await axios.get(
        '/api/lectures/02/projects'
      );

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
  handleLike = item => {
    const data = [...this.state.data];
    const index = data.indexOf(item);

    data[index].isLike = !data[index].isLike; 
    if (data[index].isLike) {
      data[index].likeCount++;
    } else {
      data[index].likeCount--;
    }
  
    this.setState({data});
  }

  render() {
    const selectedPart = this.props.data.selectedPart;
    return (
      <section className="article">
        <ArticleHeader 
          dataCount={this.state.data.length}
        />
        
        {this.state.data.map(item => (
        <ArticleProject 
          key={item.id} 
          item={item} 
          onClick = {this.handleClick}
          onLike = {this.handleLike}
          selectedPart = {selectedPart}
        />
        ))}

      </section>
    );
  }
}

export default Article;