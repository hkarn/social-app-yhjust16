import React, { Component } from 'react';
import { connect } from 'react-redux';

class Article extends Component {
  render() {
    return (
      <article className="p-1">
        <header className="m-1 mt-4 text-center"><h3>Article header</h3></header>
        <main className="m-1 text-left">Main</main>
        <footer className="text-small font-italic text-right m-1 pr-4">Footer</footer>
      </article>
    );
  }
}
      
export default connect(
  null, 
  null)(Article);
      