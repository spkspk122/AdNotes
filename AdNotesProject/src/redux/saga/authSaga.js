import {all, call, put, takeLatest} from 'redux-saga/effects';




export function* loginRequest({payload}) {

  const {code, updateStatus} = payload;

}

export default all([
  takeLatest('@auth/LOGIN_API', loginRequest),
 
]);
