export default function posted(state = {}, action) {

  switch(action.type){
  
  case 'POSTED_SUCCESS':

    return {...state, ...action.payload};
 
  default:
    return state;

  }
}