import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoryReducer from './category';
import productReducer from './reducer';
import cartReducer from './cart';
import thunk from 'redux-thunk';


let reducers = combineReducers({
  products: productReducer,
  category: categoryReducer,
  cart: cartReducer
})

export default function store(){
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}