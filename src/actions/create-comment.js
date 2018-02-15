import firebase from '../config/firebase';

export function createComment(body, postId) {

  return function(dispatch){

    const user = firebase.auth().currentUser;
    const uid = firebase.auth().currentUser.uid;
    const postData = {
      body: body,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      uid: uid,
      author: user.displayName,
      postId: postId,
    };

    const newPostKey = firebase.database().ref('comments').child(postId).push().key;

    let updates = {};
    updates['/comments/' + postId + '/' + newPostKey] = postData;
    updates['/user-comments/' + user.uid + '/' + postId + '/' + newPostKey] = postData;
  
    firebase.database().ref().update(updates)
      .then(() => {
        dispatch({
          type: 'POSTED_COMMENT_SUCCESS',
          payload: {
            postkey: newPostKey,
          }
        });
    
      });

    
  };
}