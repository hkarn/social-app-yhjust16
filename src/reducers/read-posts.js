export default function postStream(state = {}, action) {

  switch(action.type){
  
  case 'READ_POSTS':

    return action.payload;
 
  default:
    return state;

  }
}