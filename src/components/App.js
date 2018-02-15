import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators }from 'redux';
import Home from './Home';
import Signin from './signin/';
import firebase from '../config/firebase';
import {authStateChange} from '../actions/';
import PropTypes from 'prop-types';



import './App.css';

class App extends Component {

  
  componentDidMount() {


    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {

        firebase.database().ref('admin').once('value', (snapshot) => {
          if (snapshot.hasChild(firebase.auth().currentUser.uid)) {
            this.props.authStateChange(true, firebase.auth().currentUser, true);
          } else {
            this.props.authStateChange(true, firebase.auth().currentUser, false);
          }
          
        })
          .catch(function() {
            this.props.authStateChange(true, firebase.auth().currentUser, false);
          }.bind(this));
        
        
        
      } else {
        this.props.authStateChange(false, null, false);
      }
    }.bind(this));
  }
  
  
  render() {

    return (
      <div className="application">
        <header className="main-header fixed-top container zindex-sticky bg-white">
          <nav className="nav nav-pills nav-fill d-flex align-items-baseline">
            <Link to="/social-app-yhjust16/" className="nav-item nav-link font-weight-bold text-large align-middle">The Super Blog</Link>
            <Link to="/social-app-yhjust16/signin/" className="nav-item nav-link text-secondary">
              {this.props.signedin ? (
                <span>My account</span>
              ) : (
                <span>Sign in</span>
              )}
            
            </Link>
          </nav>
        </header>

 


        <main className="main-content mt-5 pt-5 pb-5 mb-5 container text-center">
          <Route exact path="/social-app-yhjust16/" component={Home} />
          <Route exact path="/social-app-yhjust16/signin/" component={Signin} />
        </main>
        <footer className="main-footer p-2 text-small text-center fixed-bottom bg-white zindex-sticky">
          The Super Blog YHJUST16
        </footer>
        
      </div>
    );

  }
}

App.propTypes = {
  authStateChange: PropTypes.func,
  signedin: PropTypes.bool
};

const mapDispatchToProps = dispatch => bindActionCreators({
  authStateChange
}, dispatch);

const mapStateToProps = state => ({
  signedin: state.user.signin,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);