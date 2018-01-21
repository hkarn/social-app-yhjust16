import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }from 'redux';
import NewPost from './new-post.js';
import NotSignedInNewPost from './notsignedin/newpost';
import Article from './article.js';
import PropTypes from 'prop-types';
import {readPosts} from '../actions';

class Home extends Component {

  componentDidMount() {
    this.props.readPosts();
  }

  render() {

    let posts = [];
    for (let key in this.props.posts) {
      console.log(this.props.posts[key])
      posts.push(<Article key={key} author={this.props.posts[key].author} subject={this.props.posts[key].subject} body={this.props.posts[key].body} timestamp={this.props.posts[key].timestamp} likeCount={this.props.posts[key].likeCount}/>);
    }
    posts = posts.reverse();
    return (
      <div className="Home mx-auto w-75">
        {this.props.signedin ? (
          <NewPost />
        ) : (
          <NotSignedInNewPost />
        )
        }

        {posts}
        
        
      </div>
    );
  }
}

Home.propTypes = {
  signedin: PropTypes.bool,
  readPosts: PropTypes.func,
  posts: PropTypes.object
};

const mapStateToProps = state => ({
  signedin: state.user.signin,
  posts: state.readPosts
});

const mapDispatchToProps = dispatch => bindActionCreators({
  readPosts
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(Home);
