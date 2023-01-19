import { createAction, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

const SET_PRODUCTS = 'SET_PRODUCTS';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


export const setProducts = createAction(SET_PRODUCTS)
export const addToCart = createAction(ADD_TO_CART)
export const removeFromCart = createAction(REMOVE_FROM_CART)


export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  dispatch(setProducts(response.data.results));
}

export const changeCategory = (category, products) => {
  return {
      type: 'CATEGORY_CHANGE',
      payload: { category, products }
    }
  
}


const productReducer = createReducer(
  {
    activeCategory: '',
    activeProducts: [],
    products: []
  },
  {
    [SET_PRODUCTS]: (state, action) => {
      return {
        products: action.payload
      }
    },
    'CATEGORY_CHANGE': (state, action) => {
      return {
        ...state,
        activeCategory: action.payload.category,
        activeProducts: state.products.filter(product => product.category === action.payload.category && product.inStock > 0),
      }
    },
    'ADD_TO_CART': (state, action) => {
      let addProduct = state.products.map(product => product.name === action.payload.name && product.inStock > 0 ? action.payload : product)
      return {
        ...state,
        products: addProduct,
        activeProducts: addProduct.filter(product => product.category === state.activeCategory && product.inStock > 0),
      }
    },
    'REMOVE_FROM_CART': (state, action) => {
      let removeProduct = state.products.map(product => product.name === action.payload.name ? action.payload : product)
      return {
        ...state,
        products: removeProduct,
        activeProducts: removeProduct.filter(product => product.category === state.activeCategory && product.inStock > 0),
      }
    }
  }
);


export default productReducer