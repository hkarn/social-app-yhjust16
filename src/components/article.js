import React, { Component } from 'react';
import { connect } from 'react-redux';

class Article extends Component {

  render() {

    const postedOn = new Date(this.props.timestamp);
    const postedOnDate = postedOn.toDateString()
    const postedOnTime = postedOn.toLocaleTimeString();
    return (
      <article className="p-1">
        <header className="m-1 mt-4 text-center"><h3>{this.props.subject}</h3></header>
        <main className="m-1 text-left">{this.props.body}</main>
        <footer className="text-small font-italic text-right m-1 pr-4">by {this.props.author} on {postedOnDate} at {postedOnTime}</footer>
        {this.props.likeCount}
      </article>
    );
  }
}
      
export default connect(
  null, 
  null)(Article);
      