import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

//mport Home from './Home'
//import Signin from './Signin'


import './App.css'
/*
<Route exact path="/" component={Home} />
<Route exact path="/signin" component={Signin} />
*/
class App extends Component {
  
  
  render() {

    return (
      <div className="application">

      <header className="main-header">
        <nav>
          <ul>
            
            <li>
              <Link to="/">Räknare</Link>
            </li>
            <li>
              <Link to="/signin">Priser</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content">

      </main>
      <footer className="main-footer">
      
      </footer>
        
      </div>
    );

  }
}


export default App;