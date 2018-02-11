import firebase from '../config/firebase';

export function editPost(postId, subject, body, likes = 0) {

  const user = firebase.auth().currentUser;
  let postData = null;
  if (subject !== null && body !== null) {
    postData = {
      subject: subject,
      body: body,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      uid: firebase.auth().currentUser.uid,
      author: user.displayName,
      likeCount: likes,
    };
  }
  

  return function(dispatch){
    
   
    /*Client side manipulation should be blocked by Firebase write rules 
      and for user friendlieness buttons should only appear on
      posts the user/admin is allowed to edit/delete in the first place, so no validation is done in here.
      The app is also already subscribed to the post list so we dont need to update it seperatly.*/
      
    let updates = {};
    updates['/posts/' + postId] = postData;
    updates['/user-posts/' + firebase.auth().currentUser.uid + '/' + postId] = postData;
    firebase.database().ref().update(updates).then(() => {
      dispatch({
        type: 'UNLOCKED_POST',
        payload: { 
          unlock: null
        }
      });
    });
  };
}