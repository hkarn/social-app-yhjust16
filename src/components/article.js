import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }from 'redux';
import PropTypes from 'prop-types';
import {sendLike} from '../actions';
import firebase from '../config/firebase';
import Comments from './comments';
import EditControls from './edit-controls';

class Article extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayComments: false
    };
    
  }
//eslint-disable-next-line
  sendAlert = (message) => {
    this.props.onAlert(message);
  }

  handleLike = (e) => {
    if (this.props.authorId === this.props.userId) {
      this.sendAlert('Narcissism is not allowed!');
    } else {
      firebase.database().ref('likes/' + this.props.postId).once('value', (snapshot) => {
        if (!snapshot.hasChild(firebase.auth().currentUser.uid)) {
          this.props.sendLike(this.props.postId, this.props.likeCount);
        } else {
          this.sendAlert('You already liked this post.');
        }
      });
   
    }
  }

  handleCommentToggle = (e) => {
    if (this.state.displayComments) {
      this.setState({displayComments: false});
    } else {
      this.setState({displayComments: true});
    }
  }

  render() {

    const postedOn = new Date(this.props.timestamp);
    const postedOnDate = postedOn.toDateString();
    const postedOnTime = postedOn.toLocaleTimeString();

    return (
      <article className="p-1 mt-5">
        <header className="m-1 mt-4 text-center"><h3>{this.props.subject}</h3></header>
        <main className="m-1 text-left">{this.props.body}</main>
        <footer className="small font-italic text-right m-1 pr-4">by {this.props.author} on {postedOnDate} at {postedOnTime}</footer>
        
        <div className='float-right mt-1'>
          <button onClick={this.handleCommentToggle} className="btn btn-dark btn-outline-primary text-uppercase btn-sm mr-3">Toogle comments</button>
          <button onClick={this.handleLike} className="btn btn-dark btn-outline-primary text-uppercase btn-sm">Like {this.props.likeCount}</button>
          
        </div>
        {(this.props.authorId === this.props.userId || this.props.isAdmin) &&
        <EditControls key={'edit-' + this.props.postId} postId={this.props.postId} isAdmin={this.props.isAdmin}/>
        }
        {this.state.displayComments ? (
        <Comments postId={this.props.postId} isAdmin={this.props.isAdmin}/>
        ): ( '' )}
      </article>
    );
  }
}
      
Article.propTypes = {
  subject: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
  timestamp: PropTypes.number,
  postId: PropTypes.string,
  sendLike: PropTypes.func,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  sendLike,
}, dispatch);

export default connect(
  null, 
  mapDispatchToProps)(Article);
      