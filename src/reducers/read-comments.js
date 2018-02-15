export default function commentStream(state = {}, action) {

  switch(action.type){
  
  case 'READ_COMMENTS':

    return {...state, ...action.payload};
 
  default:
    return state;

  }
}