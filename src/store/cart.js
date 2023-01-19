import { createAction, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const cartAdd = createAction(ADD_TO_CART)
export const cartRemove = createAction(REMOVE_FROM_CART)

export const addToCart = (product) => async (dispatch, getState) => {
  let updatedProduct = { ...product }
  updatedProduct.inStock = updatedProduct.inStock - 1
  let response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${updatedProduct._id}`, updatedProduct);
  dispatch(cartAdd(response.data))
}

export const removeFromCart = (product) => async (dispatch, getState) => {
  let updatedProduct = { ...product }
  updatedProduct.inStock = updatedProduct.inStock + 1
  let response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${updatedProduct._id}`, updatedProduct);
  dispatch(cartRemove(response.data))
}

const categoryReducer = createReducer(
  {
    cart: []
  },
  {
    [ADD_TO_CART]: (state, action) => {
      const itemExists = state.cart.find(item => item._id === action.payload._id);
      if (itemExists) {
        return state;
      } else {
        return {
          cart: [...state.cart, action.payload]
        }
      }
    },
    [REMOVE_FROM_CART]: (state, action) => {
      return {
        cart: state.cart.filter(product => product._id !== action.payload._id)

      }
    }
  }
)

export default categoryReducer