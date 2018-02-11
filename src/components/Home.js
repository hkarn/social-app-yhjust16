import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }from 'redux';
import NewPost from './new-post';
import NotSignedInNewPost from './notsignedin/newpost';
import Article from './article';
import EditControls from './edit-controls';
import UnlockedArticle from './unlocked-article';
import PropTypes from 'prop-types';
import {readPosts} from '../actions';


class Home extends Component {

  componentDidMount() {
    this.props.readPosts();
  }

  render() {
    let posts = [];
    for (let key in this.props.posts) {
      if (key !== this.props.unlockedPost) {
        if(this.props.posts[key].uid === this.props.userId || this.props.isAdmin) {
          posts.push(<EditControls key={'edit-' + key} postId={key} isAdmin={this.props.isAdmin}/>);
        }
        posts.push(<Article key={key} postId={key} author={this.props.posts[key].author} subject={this.props.posts[key].subject} body={this.props.posts[key].body} timestamp={this.props.posts[key].timestamp} likeCount={this.props.posts[key].likeCount}/>);    
      } else {
        posts.push(<UnlockedArticle key={key} postId={key} author={this.props.posts[key].author} subject={this.props.posts[key].subject} body={this.props.posts[key].body} timestamp={this.props.posts[key].timestamp} likeCount={this.props.posts[key].likeCount}/>);
      }
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
  posts: PropTypes.object,
  userId: PropTypes.string,
  isAdmin: PropTypes.bool,
  unlockedPost: PropTypes.string,
};

const mapStateToProps = state => ({
  signedin: state.user.signin,
  posts: state.readPosts,
  userId: state.user.user.uid,
  isAdmin: state.user.isAdmin,
  unlockedPost: state.unlocked.unlock,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  readPosts
}, dispatch);

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(Home);
