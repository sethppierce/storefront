import cartReducer, { addToCart, removeFromCart } from './cart';
import { legacy_createStore as createStore, combineReducers } from 'redux';

describe('Cart Reducer', () => {
  const reducers = combineReducers({
    cart: cartReducer,
  })

  const store = createStore(reducers)

  test('delivers initial state', () => {
    let state = store.getState();

    expect(state.cart.cart).toEqual([]);
  });

  test('adds product to cart', () => {
    const product = { name: 'Test Product', price: 12.99 };
    store.dispatch(addToCart(product));
    let newState = store.getState();

    expect(newState.cart.cart).toEqual([{ name: 'Test Product', price: 12.99, id: expect.any(String) }]);
  });

  test('removes product from cart', () => {
    let state = store.getState();
    let id = state.cart.cart[0].id
    const product = { name: 'Test Product', price: 12.99, id };
    store.dispatch(removeFromCart(product));
    let newState = store.getState();

    expect(newState.cart.cart).toEqual([]);
  });
});
