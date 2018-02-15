import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import firebase from '../config/firebase';

class Comment extends Component {
  constructor(props){
    super(props);
    this.state = {
      isDeletable: false,
    };
  }

  
  
  componentDidMount() {
    if (this.props.user.user.uid === this.props.uid || this.props.isAdmin) {
      this.setState({isDeletable: true});
    } else {
      this.setState({isDeletable: false});
    }
  }

  handleDelete = (e) => {
        let updates = {};
        updates['/comments/' + this.props.postId + '/' + this.props.commentId] = null;
        updates['/user-comments/' + firebase.auth().currentUser.uid+ '/' + this.props.postId + '/' + this.props.commentId] = null;
    
        firebase.database().ref().update(updates);
  }


  render() {

    const postedOn = new Date(this.props.timestamp);
    const postedOnDate = postedOn.toDateString();
    const postedOnTime = postedOn.toLocaleTimeString();

    
        
    return (
      <div className="p-1 mt-1 w-50 comment-wrapper" style={{marginRight: '0', marginLeft: 'auto'}}>
        <p className="m-1 small text-left">{this.props.commentBody}</p>
        <footer className="small font-italic text-right m-1 pr-2"><small>by {this.props.author} on {postedOnDate} at {postedOnTime}
          {this.state.isDeletable ?
            (<button onClick={this.handleDelete} className="btn btn-dark btn-outline-primary text-uppercase btn-sm p-0 pl-2 pr-2 ml-2"><small>DELETE</small></button>) : ('')}
        
        </small></footer>
      </div>
    );
  }
}
      
Comment.propTypes = {
  commentBody: PropTypes.string,
  timestamp: PropTypes.number,
  author: PropTypes.string,
  isAdmin: PropTypes.bool,
  user: PropTypes.object,
  commentId: PropTypes.string,
  postId: PropTypes.string,
};

const mapStateToProps = state => ({
  user: state.user,
});


export default connect(
  mapStateToProps, 
  null)(Comment);
