import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }from 'redux';
import {editPost} from '../actions';
import {unlockPost} from '../actions';
import PropTypes from 'prop-types';


class EditControls extends Component {



  handleDelete = (e) => {
    this.props.editPost(this.props.postId, null, null);
  }

  handleEdit = (e) => {
    this.props.unlockPost(this.props.postId);
  }

  render() {

    return (
      <div className="post-edit-controls float-left text-left mt-1">
        <button onClick={this.handleEdit} className="btn btn-dark btn-outline-primary text-uppercase btn-sm mr-3">Edit</button>
        <button onClick={this.handleDelete} className="btn btn-dark btn-outline-primary text-uppercase btn-sm">Delete</button>
      </div>
    );
  }
}
      
EditControls.propTypes = {
  postId: PropTypes.string,
  editPost: PropTypes.func,
  isAdmin: PropTypes.bool,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  editPost,
  unlockPost
}, dispatch);

export default connect(
  null, 
  mapDispatchToProps)(EditControls);
      
