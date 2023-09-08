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

    // case ActionTypes.updatedProduct:
    // let updatedProductIndex = state.products.findIndex(
    //   obj => obj.id == action.payload?.data?.id,
    // );
    // let updateList = [...state.products];

    // if (payload.Btnid === 'add') {
    //   updateList[updatedProductIndex].count += 1;
    // } else {
    //   const count = updateList[updatedProductIndex].count;

    //   if (count == 0) {
    //     let updatedArray = [...updateList.splice(updatedProductIndex, 1)];
    //   } else {
    //     updateList[updatedProductIndex].count -= 1;
    //   }
    // }

    // return {
    //   ...state,
    //   products: updateList,
    // };
    default:
      return state;
  }
};
