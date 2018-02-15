import firebase from '../config/firebase';

export function sendLike(postId, likeCount) {
  
  
  
  return function(dispatch){
    
    const userId = firebase.auth().currentUser.uid;
    

    const payload = 'Like was added';
    let updates = {};
    updates['/likes/' + postId + '/' + userId] = firebase.database.ServerValue.TIMESTAMP;
    updates['/user-posts/' + userId +'/' + postId + '/likeCount'] = likeCount++;
    updates['/posts/' + postId + '/likeCount'] = likeCount++;

    firebase.database().ref().update(updates).then(() => {
      dispatch({
        type: 'LIKE_ADDED',
        payload: payload,
      });
    
    });

    

  };
}
