import React, { Component } from 'react';
import { connect } from 'react-redux';
import Signinform from './signin';
import IsSignedIn from './issignedin';
import PropTypes from 'prop-types';

class Signin extends Component {
  
 
  render() {

    return (
      <div className="signin text-center">
        {this.props.signedin ? (
          <IsSignedIn />
        ) : (
          <Signinform />
        )}
      </div>
    );
  }
}

Signin.propTypes = {
  signedin: PropTypes.bool
};

const mapStateToProps = state => ({
  signedin: state.user.signin
});

export default connect(
  mapStateToProps, 
  null)(Signin);
