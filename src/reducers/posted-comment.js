export default function postedComment(state = {}, action) {

  switch(action.type){
  
  case 'POSTED_COMMENT_SUCCESS':

    return {...state, ...action.payload};
 
  default:
    return state;

  }
}