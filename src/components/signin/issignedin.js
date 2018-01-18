import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class IsSignedIn extends Component {
  
 
  render() {

    return (
      <div className="welcome">
        <h2>Welcome {this.props.username} </h2>
      </div>
    );
  }
}

IsSignedIn.propTypes = {
  username: PropTypes.string
};

const mapStateToProps = state => ({
  username: state.user.user.displayName

});

export default connect(
  mapStateToProps, 
  null)(IsSignedIn);
