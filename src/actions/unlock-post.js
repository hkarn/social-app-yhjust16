export function unlockPost(postId) {
  
 
  return {
    type: 'UNLOCKED_POST',
    payload: { 
      unlock: postId
    }
  };
  
    
}
  
  
  