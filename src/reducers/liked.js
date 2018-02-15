export default function liked(state = {}, action) {

  switch(action.type){
  
  case 'LIKE_ADDED':

    return action.payload;
 
  default:
    return state;

  }
}