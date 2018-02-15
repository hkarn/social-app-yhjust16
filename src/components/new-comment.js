import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {createComment} from '../actions';
import PropTypes from 'prop-types';



class NewComment extends Component {
  constructor(props){
    super(props);
    this.state = {
      formFields: {
        body: '',
      },
      isSubmitting: false
    }
    
  }

  componentWillReceiveProps(next) {
    if (this.props.submitted_new_comment !== next.submitted_new_comment) { 
      //new key has been retrived and updated from successfull post submit. component should be reset. we could also use redux-form for this
      this.setState({ isSubmitting: false, formFields:{...this.state.formFields, body: ''}});
    }
  }

//eslint-disable-next-line
   onSubmit = e => {
    e.preventDefault();
    this.setState({ isSubmitting: true});
    this.props.createComment(this.state.formFields.body, this.props.postId);
  }

  
  onBodyChange = e => {
    this.setState({  formFields:{...this.state.formFields, body : e.target.value}});
  }

  render() {

    return (
      <form onSubmit={this.onSubmit} className="text-right w-50" style={{marginRight: '0', marginLeft: 'auto'}}>
        <textarea className="p-1 text-left w-100 form-control small" rows="2" placeholder="New comment..."
          onChange={this.onBodyChange}
          value={this.state.formFields.body}>
         
        </textarea>
        <input type="submit" value="Post" className="btn btn-dark mt-2 btn-sm bg-primary w-25 text-uppercase" disabled={this.state.isSubmitting} />
      </form>
    );
  }
}

NewComment.propTypes = {
  createComment: PropTypes.func,
  submitted_new_comment: PropTypes.string,
  postId: PropTypes.string,
};

const mapStateToProps = state => ({
  submitted_new_comment: state.postedComment.postkey,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  createComment
}, dispatch);
      
export default connect(
  mapStateToProps, 
  mapDispatchToProps)(NewComment);
      