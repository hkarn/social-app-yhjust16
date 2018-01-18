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
      <div className="application">
        <header className="main-header">
          <nav>
            <ul>
            
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/signin">Sign in</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
        </main>
        <footer className="main-footer">
          
        </footer>
        
      </div>
    );

  }
}

App.propTypes = {
  authStateChange: PropTypes.func
};

const mapDispatchToProps = dispatch => bindActionCreators({
  authStateChange
}, dispatch);



export default connect(null, mapDispatchToProps)(App);