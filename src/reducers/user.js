export default function user(state = {}, action) {
  switch(action.type){
  
  case 'AUTH_STATE_CHANGED':

    return {...state, ...action.payload};
 
  default:
    return state;

  }
}