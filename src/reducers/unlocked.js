export default function unlocked(state = {}, action) {

  switch(action.type){
  
  case 'UNLOCKED_POST':

    return action.payload;
 
  default:
    return state;

  }
}