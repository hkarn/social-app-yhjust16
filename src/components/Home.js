import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewPost from './new-post.js';
import Article from './article.js';

class Home extends Component {
  render() {
    return (
      <div className="Home mx-auto w-75">
        <NewPost />
        <Article />
      </div>
    );
  }
}

export default connect(
  null, 
  null)(Home);
