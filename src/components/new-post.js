import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }from 'redux';
import PropTypes from 'prop-types';

class NewPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      formFields: {
        subject: 'test',
        body: 'test2',
      }
    }
  }

  onSubjectChange = e => {
    this.setState({ formFields:{...this.state.formFields, subject : e.target.value}});
  }

  onBodyChange = e => {
    this.setState({  formFields:{...this.state.formFields, body : e.target.value}});
  }

  render() {

    return (
      <form>
        <h5>Create new post</h5>
        <input className="p-1 text-left w-75 form-control mx-auto" placeholder="Subject..."
          type="text"
          onChange={this.onSubjectChange}
          value={this.state.formFields.subject}/>
        <textarea className="p-1 mt-2 text-left w-75 form-control mx-auto" rows="4" placeholder="Your post..."
          onChange={this.onBodyChange}
          value={this.state.formFields.body}>
         
        </textarea>
        <button className="btn btn-dark btn-lg my-4 bg-primary w-50 text-uppercase">Post</button>
      </form>
    );
  }
}

NewPost.propTypes = {
  createPost: PropTypes.func,
};


const mapDispatchToProps = dispatch => bindActionCreators({
  //createPost
}, dispatch);
      
export default connect(
  null, 
  mapDispatchToProps)(NewPost);
      