import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Products from '../components/Products/Products'
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom'


const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Products', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      category: {
        activeCategory: 'Electronics',
        activeProducts: [
          { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
          { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
        ],
      },
    });
  });

  it('renders the active category and products', () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    const activeCategory = screen.getByText('Electronics');
    expect(activeCategory).toBeInTheDocument();

    const product1 = screen.getByTestId('product-card-0');
    const product2 = screen.getByTestId('product-card-1');
    expect(product1).toBeInTheDocument();
    expect(product2).toBeInTheDocument();
  });

  it('dispatches addToCart action when button is clicked', () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    const addToCartButton0 = screen.getByTestId('add-to-cart-button-0');
    fireEvent.click(addToCartButton0);

    const actions = store.getActions();
    expect(actions[0].type).toEqual('ADD_TO_CART');
    expect(actions[0].payload.name).toEqual('TV');
  });
});
