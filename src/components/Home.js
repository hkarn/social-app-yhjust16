import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        HOME
      </div>
    );
  }
}

export default connect(
  null, 
  null)(Home);