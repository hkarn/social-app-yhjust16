import React, { Component } from 'react';
import { connect } from 'react-redux';

class Signin extends Component {
  render() {
    return (
      <div className="Signin">
        Signin
      </div>
    );
  }
}

export default connect(
  null, 
  null)(Signin);
