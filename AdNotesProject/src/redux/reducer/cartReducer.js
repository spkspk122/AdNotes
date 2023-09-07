import * as ActionTypes from "../index";

const INITIAL_STATE = {
  products: [],
  cartTotal: 0,
  userData: {},
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
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

    //cart
    case ActionTypes.addToCart:
      let addQuatity = action.payload;
      addQuatity.count += 1;
      return {
        ...state,
        products: [...state.products, addQuatity],
      };
    case ActionTypes.removeFromCart:
      let newProducts = state.products.filter(
        (obj) => obj.id !== action.payload
      );
      return {
        ...state,
        products: newProducts,
      };

    case ActionTypes.updatedProduct:
      let updatedProductIndex = state.products.findIndex(
        (obj) => obj.id == action.payload?.data?.id
      );
      let updateList = [...state.products];

      if (payload.Btnid === "add") {
        updateList[updatedProductIndex].count += 1;
      } else {
        const count = updateList[updatedProductIndex].count;

        if (count == 0) {
          let updatedArray = [...updateList.splice(updatedProductIndex, 1)];
        } else {
          updateList[updatedProductIndex].count -= 1;
        }
      }

      return {
        ...state,
        products: updateList,
      };
    default:
      return state;
  }
};
