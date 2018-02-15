import firebase from '../config/firebase';

export function readComments(postId) {
  return function(dispatch){
    
 
    firebase.database().ref('comments/' + postId).on('value', (snapshot) => {
      dispatch({
        type: 'READ_COMMENTS',
        payload: {[postId]: snapshot.val()}
      });
    
    });

    
  };
}
