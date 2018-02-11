import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }from 'redux';
import {editPost} from '../actions';
import PropTypes from 'prop-types';

class UnlockedArticle extends Component {
  constructor(props){
    super(props);
    this.state = {
      formFields: {
        subject: this.props.subject,
        body: this.props.body,
      },
      isSubmitting: false
    }
    
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({ isSubmitting: true});
    this.props.editPost(this.props.postId, this.state.formFields.subject, this.state.formFields.body, this.props.likeCount);
  }

  onSubjectChange = e => {
    this.setState({ formFields:{...this.state.formFields, subject : e.target.value}});
  }

  onBodyChange = e => {
    this.setState({  formFields:{...this.state.formFields, body : e.target.value}});
  }

  render() {

    const postedOn = new Date(this.props.timestamp);
    const postedOnDate = postedOn.toDateString()
    const postedOnTime = postedOn.toLocaleTimeString();

    return (
      <article className="p-1 mt-3">
        <form onSubmit={this.onSubmit}>
          <h5>Edit post</h5>
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
        <footer className="text-small font-italic text-right m-1 pr-4">by {this.props.author} on {postedOnDate} at {postedOnTime}</footer>
        </article>
    );



  }
}
      
UnlockedArticle.propTypes = {
  subject: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
  timestamp: PropTypes.number
};

const mapDispatchToProps = dispatch => bindActionCreators({
  editPost,
}, dispatch);

export default connect(
  null, 
  mapDispatchToProps)(UnlockedArticle);
      