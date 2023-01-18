import { v4 as uuidv4 } from 'uuid';

let initialState = {
  cart: [],
}


function categoryReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      return {
        cart: [...state.cart, payload]
      }
    case 'REMOVE_FROM_CART':
      return {
        cart: state.cart.filter(product => product.id !== payload.id )
      }
    default:
      return state
  }
}

export const addToCart = (product) => {
  product.id = uuidv4()
  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}

export const removeFromCart = (product) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product
  }
}

export default categoryReducer