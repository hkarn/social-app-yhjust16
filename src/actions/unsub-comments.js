

export function unsubComments(postId) {
  return function(dispatch){
    
 
    dispatch({
      type: 'READ_COMMENTS',
      payload: {[postId]: null}
    });
    


    
  };
}
