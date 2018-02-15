import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }from 'redux';
import PropTypes from 'prop-types';
import {readComments} from '../actions';
import Comment from './comment';
import NewComment from './new-comment';
import {unsubComments} from '../actions';

class Comments extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  

  componentWillMount() {
    this.props.readComments(this.props.postId);
  }

  componentWillUnmount() {
    this.props.unsubComments(this.props.postId);
  }

  componentWillReceiveProps(nextProps) {
    let comments = [];
    if (nextProps.comments !== undefined) {
      if (nextProps.postId in nextProps.comments) {
        for (let key in nextProps.comments[nextProps.postId]) {
          comments.push(<Comment key={key} commentId={key} postId={this.props.postId} isAdmin={nextProps.isAdmin} timestamp={nextProps.comments[nextProps.postId][key].timestamp} author={nextProps.comments[nextProps.postId][key].author} uid={nextProps.comments[nextProps.postId][key].uid} commentBody={nextProps.comments[nextProps.postId][key].body} />);    
        }}
        
      comments = comments.reverse();
      this.setState({comments: comments});
    }
  }

    

  render() {
    
    return (
      <div className="p-1 mt-5 comment-wrapper">
        <NewComment postId={this.props.postId}/>
        {this.state.comments}
      </div>
    );
  }
}
      
Comments.propTypes = {
  body: PropTypes.string,
  readComments: PropTypes.func,
  unsubComments: PropTypes.func,
  postId: PropTypes.string,
  comments: PropTypes.object,
  isAdmin: PropTypes.bool,
};

const mapStateToProps = state => ({
  comments: state.commentStream,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  readComments,
  unsubComments,
}, dispatch);

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(Comments);
