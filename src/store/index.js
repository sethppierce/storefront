import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoryReducer from './reducer';

let reducers = combineReducers({
  category: categoryReducer
})

export default function store(){
  return createStore(reducers, composeWithDevTools())
}