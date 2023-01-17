import categoryReducer from './reducer';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { changeCategory } from './reducer';

describe('Category Reducer', () => {
  const reducers = combineReducers({
    category: categoryReducer,
  })

  const store = createStore(reducers)

  test('delivers initial states', () => {
    let state = store.getState();

    expect(state.category.categories[0].name).toEqual('electronics')
    expect(state.category.categories[0].displayName).toEqual('Electronics')
    expect(state.category.products[0].name).toEqual('TV')
    expect(state.category.products[0].category).toEqual('electronics')
    expect(state.category.products[0].price).toEqual(699.00)
    expect(state.category.products[0].inStock).toEqual(5)
    expect(state.category.activeCategory).toEqual('')
    expect(state.category.activeProducts).toEqual([])

  })
  test('changes active category', () => {
    let state = store.getState();

    store.dispatch(changeCategory('electronics', state.category.products))
    let newState = store.getState();

    expect(newState.category.activeCategory).toEqual('electronics')
    expect(newState.category.activeProducts[0].name).toEqual('TV')
  })
})