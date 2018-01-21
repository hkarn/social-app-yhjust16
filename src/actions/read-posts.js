import firebase from '../config/firebase';

export function readPosts() {
  return function(dispatch){
    
 
    firebase.database().ref('posts/').on('value', (snapshot) => {
      dispatch({
        type: 'READ_POSTS',
        payload: snapshot.val()
      });
    
    });

    
  };
}
