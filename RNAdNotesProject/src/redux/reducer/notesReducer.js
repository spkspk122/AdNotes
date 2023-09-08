import * as ActionTypes from '../index';

const INITIAL_STATE = {
  notes: [],
  userData: {},
};

export const notesReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    //userData

    case ActionTypes.login:
      return {
        ...state,
        userData: action.payload,
      };

    case ActionTypes.logout:
      return {
        ...INITIAL_STATE,
      };

    case ActionTypes.addNotes:
      console.log(action.payload, 'add');
      return {
        ...state,
        notes: [...state.notes, action.payload?.data],
      };
    case ActionTypes.deleteNote:
      let newNote = state.notes.filter(obj => obj.id !== action.payload);
      return {
        ...state,
        notes: newNote,
      };

    case ActionTypes.updateNote:
      console.log(action.payload, 'reducer');
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id === action.payload.id) {
            return {
              ...note,
              text: action.payload.text,
              photo: action.payload.photo,
              title: action.payload.title,
            };
          }
          return note;
        }),
      };
    default:
      return state;
  }
};
