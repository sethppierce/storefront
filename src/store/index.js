import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoryReducer from './reducer';
import cartReducer from './cart';

let reducers = combineReducers({
  category: categoryReducer,
  cart: cartReducer
})

export default function store(){
  return createStore(reducers, composeWithDevTools())
}