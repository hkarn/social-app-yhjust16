import firebase from '../config/firebase';

export function createPost(subject, body) {

  return function(dispatch){

    const user = firebase.auth().currentUser;
    const uid = firebase.auth().currentUser.uid;
    const postData = {
      subject: subject,
      body: body,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      uid: uid,
      author: user.displayName,
      likeCount: 0,
      comments: {},
    };

    const newPostKey = firebase.database().ref().child('posts').push().key;

    let updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + user.uid + '/' + newPostKey] = postData;
  
    firebase.database().ref().update(updates)
      .then(() => {
        dispatch({
          type: 'POSTED_SUCCESS',
          payload: {
            postkey: newPostKey,
          }
        });
    
      });

    
  };
}