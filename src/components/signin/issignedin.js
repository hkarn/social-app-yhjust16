import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import firebase from '../../config/firebase';


class IsSignedIn extends Component {
  
  signout = () => {
    firebase.auth().signOut()
    .then(function() {
      //code on logout
      //Note! auth state listener in App.js catches logout event and updates the app
    })
    .catch(function(error) {
      //catch error
    });
  }

  render() {

    return (
      <div className="welcome text-center">
        <h2 className="mt-5">Signed in as {this.props.username} </h2>
        <button 
            className="signout-button btn btn-warning mt-4"
            onClick={this.signout}> 
            SignOut
        </button>
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
