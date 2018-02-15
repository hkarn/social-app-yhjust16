import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }from 'redux';
import NewPost from './new-post';
import NotSignedInNewPost from './notsignedin/newpost';
import Article from './article';
import UnlockedArticle from './unlocked-article';
import AlertPopup from './alert-popup';
import PropTypes from 'prop-types';
import {readPosts} from '../actions';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      alertText: 'hi',
      alertDisplay: false,
      alertTimer: null
    };
    this.alertTimer = null;
    
  }
  

  componentDidMount() {
    this.props.readPosts();
  }

  //eslint-disable-next-line
  onAlert = (message) => {
    clearTimeout(this.alertTimer);
    this.setState({alertText: message, alertDisplay: true});
    this.alertTimer = setTimeout(() => {
      this.setState({alertText: '', alertDisplay: false});
      clearTimeout(this.alertTimer);
      }, 2000);
  }


  render() {
    let posts = [];
    for (let key in this.props.posts) {
      if (key !== this.props.unlockedPost) {
        posts.push(<Article key={key} onAlert={this.onAlert} isAdmin={this.props.isAdmin} userId={this.props.userId} authorId={this.props.posts[key].uid} postId={key} author={this.props.posts[key].author} subject={this.props.posts[key].subject} body={this.props.posts[key].body} timestamp={this.props.posts[key].timestamp} likeCount={this.props.posts[key].likeCount}/>);    
      } else {
        posts.push(<UnlockedArticle key={key} postId={key} author={this.props.posts[key].author} subject={this.props.posts[key].subject} body={this.props.posts[key].body} timestamp={this.props.posts[key].timestamp} likeCount={this.props.posts[key].likeCount}/>);
      }
    }
    posts = posts.reverse();
    return (
      <div className="Home mx-auto w-75">
        <AlertPopup alertMessage={this.state.alertText} displayToggle={this.state.alertDisplay}/>
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
