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
        this.props.authStateChange(true, firebase.auth().currentUser);
      } else {
        this.props.authStateChange(false, null);
      }
    }.bind(this));
  }
  
  
  render() {

    return (
      <div className="application p-1 container mt-2">
        <header className="main-header fixed-top">
          <nav className="nav nav-pills nav-fill d-flex align-items-baseline">
            <Link to="/" className="nav-item nav-link font-weight-bold text-large align-middle">The Super Blog</Link>
            <Link to="/signin" className="nav-item nav-link text-secondary">
              {this.props.signedin ? (
                <span>My account</span>
              ) : (
                <span>Sign in</span>
              )}
            
            </Link>
          </nav>
        </header>

 


        <main className="main-content mt-3">
          <Route exact path="/" component={Home} className="mt-5"/>
          <Route exact path="/signin" component={Signin} />
        </main>
        <footer className="main-footer m-2 text-small text-center fixed-bottom">
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
  signedin: state.user.signin
});

export default connect(mapStateToProps, mapDispatchToProps)(App);