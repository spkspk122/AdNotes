import * as ActionTypes from '../index';

export function addToCart(data) {
  return {
    type: ActionTypes.addToCart,
    payload: data,
  };
}

export function removeFromCart(data) {
  return {
    type: ActionTypes.removeFromCart,
    payload: data,
  };
}

export function cartQuantity(data, Btnid) {
  return {
    type: ActionTypes.updatedProduct,
    payload: {data, Btnid},
  };
}

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
