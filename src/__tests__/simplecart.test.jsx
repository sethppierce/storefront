import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import SimpleCart from '../components/SimpleCart/SimpleCart'
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom'


const middlewares = [];
const mockStore = configureStore(middlewares);

describe('SimpleCart', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      cart: {
        cart: [
          { name: 'item 1' },
          { name: 'item 2' },
          { name: 'item 3' },
        ],
      }
    });
  });

  it('renders cart items', () => {
    render(
      <Provider store={store}>
        <SimpleCart />
      </Provider>
    );
    expect(screen.getByText('item 1')).toBeInTheDocument();
    expect(screen.getByText('item 2')).toBeInTheDocument();
    expect(screen.getByText('item 3')).toBeInTheDocument();
  });

  it('dispatches removeFromCart action when remove icon is clicked', () => {
    render(
      <Provider store={store}>
        <SimpleCart />
      </Provider>
    );
    const removeIcon = screen.getByTestId('remove-cart-icon-0');
    fireEvent.click(removeIcon);
    const actions = store.getActions();
    expect(actions[0].type).toEqual('REMOVE_FROM_CART');
    expect(actions[0].payload).toEqual({ name: 'item 1' });
  });
});