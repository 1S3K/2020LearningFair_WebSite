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

      console.log(response);

      this.setState({
        data: response.data.data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    const {loadingData} = this;
    loadingData();
  }

  handleClick = project => {
    const projects = [...this.state.projects];
    const index = projects.indexOf(project);

    projects[index].isClicked = !projects[index].isClicked;
  
    this.setState({projects});
  }

  // 좋아요 이벤트
  handleLike = project => {
    const projects = [...this.state.projects];
    const index = projects.indexOf(project);

    projects[index].isLike = !projects[index].isLike; 
    if (projects[index].isLike) {
      projects[index].likeCount++;
    } else {
      projects[index].likeCount--;
    }
  
    this.setState({projects});
  }

  render() {
    const {data} = this.state;
    
    return (
      <section className="article">
        <ArticleHeader 
          // testCount={this.state.tests.length}
          dataCount={this.state.data.length}
        />
        
        {this.state.data.map(item => (
        <ArticleProject 
          key={item.id} 
          item={item} 
          onClick = {this.handleClick}
          onLike = {this.handleLike}
        />
        ))}

      </section>
    );
  }
}

export default Article;