import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {createPost} from '../actions';
import PropTypes from 'prop-types';



class NewPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      formFields: {
        subject: '',
        body: '',
      },
      isSubmitting: false
    }
    
  }

  componentWillReceiveProps(next) {
    if (this.props.submitted_new_post !== next.submitted_new_post) { 
      //new key has been retrived and updated from successfull post submit. component should be reset. we could also use redux-form for this
      this.setState({ isSubmitting: false, formFields:{...this.state.formFields, subject : '', body: ''}});
    }
  }


   onSubmit = e => {
    e.preventDefault();
    this.setState({ isSubmitting: true});
    this.props.createPost(this.state.formFields.subject, this.state.formFields.body);
    //this.setState({ isSubmitting: false, formFields:{...this.state.formFields, subject : '', body: ''}});
  }

  onSubjectChange = e => {
    this.setState({ formFields:{...this.state.formFields, subject : e.target.value}});
  }

  onBodyChange = e => {
    this.setState({  formFields:{...this.state.formFields, body : e.target.value}});
  }

  render() {

    return (
      <form onSubmit={this.onSubmit}>
        <h5>Create new post</h5>
        <input className="p-1 text-left w-75 form-control mx-auto" placeholder="Subject..."
          type="text"
          onChange={this.onSubjectChange}
          value={this.state.formFields.subject}/>
        <textarea className="p-1 mt-2 text-left w-75 form-control mx-auto" rows="4" placeholder="Your post..."
          onChange={this.onBodyChange}
          value={this.state.formFields.body}>
         
        </textarea>
        <input type="submit" value="Post" className="btn btn-dark btn-lg my-4 bg-primary w-50 text-uppercase" disabled={this.state.isSubmitting} />
      </form>
    );
  }
}

NewPost.propTypes = {
  createPost: PropTypes.func,
  submitted_new_post: PropTypes.string,
  editPost: PropTypes.func,
};

const mapStateToProps = state => ({
  submitted_new_post: state.posted.postkey
});

const mapDispatchToProps = dispatch => bindActionCreators({
  createPost
}, dispatch);
      
export default connect(
  mapStateToProps, 
  mapDispatchToProps)(NewPost);
      