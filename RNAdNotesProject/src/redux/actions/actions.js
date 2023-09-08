import * as ActionTypes from '../index';

export const addNote = data => {
  return {
    type: ActionTypes.addNotes,
    payload: {data},
  };
};

export const deleteNote = data => {
  console.log(data, '£££££££££');
  return {
    type: ActionTypes.deleteNote,
    payload: data,
  };
};
export const updateNote = data => {
  console.log(data, 'actions');
  return {
    type: ActionTypes.updateNote,
    payload: data,
  };
};

export function login(data) {
  return {
    type: ActionTypes.login,
    payload: data,
  };
}

export function logout(data) {
  return {
    type: ActionTypes.logout,
    payload: data,
  };
}
