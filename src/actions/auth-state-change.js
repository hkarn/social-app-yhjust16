export function authStateChange(loginstate, user) {
  return {
    type: 'AUTH_STATE_CHANGED',
    payload: {
      signin: loginstate,
      user: user
    }
  }
  ;
}