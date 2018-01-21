import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NotSignedInNewPost extends Component {
 

  render() {

    return (
      <div>
        <h5>Create new post</h5>
        <Link to="/signin">
          <button className="btn btn-dark bg-primary">You need to sign in to create a new post</button>
        </Link>
      </div>
    );
  }
}


      
export default (NotSignedInNewPost);
      