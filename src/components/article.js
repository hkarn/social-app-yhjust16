import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Article extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayComments: false
    };
    
  }

  render() {

    const postedOn = new Date(this.props.timestamp);
    const postedOnDate = postedOn.toDateString();
    const postedOnTime = postedOn.toLocaleTimeString();

    return (
      <article className="p-1 mt-5">
        <header className="m-1 mt-4 text-center"><h3>{this.props.subject}</h3></header>
        <main className="m-1 text-left">{this.props.body}</main>
        <footer className="text-small font-italic text-right m-1 pr-4">by {this.props.author} on {postedOnDate} at {postedOnTime}</footer>
        
        {/*<Likes likes={this.props.likeCount}/>*/}
        <div className='float-right mt-1'>
          <button className="btn btn-dark btn-outline-primary text-uppercase btn-sm mr-3">Toogle comments</button>
          <button className="btn btn-dark btn-outline-primary text-uppercase btn-sm">Like {this.props.likeCount}</button>
          
        </div>
        {/*<Comments displayToggle={this.state.displayComments} postId={this.props.postId}/>*/}
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
};

export default connect(
  null, 
  null)(Article);
      