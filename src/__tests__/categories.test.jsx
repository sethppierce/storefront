import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Categories from '../components/Categories/Categories'
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Categories', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      category: {
        categories: [
          { name: 'electronics', displayName: 'Electronics' },
          { name: 'food', displayName: 'Food' },
          { name: 'clothing', displayName: 'Clothing' },
        ],
      }
    });
  });

  it('renders categories and buttons', () => {
    render(
      <Provider store={store}>
        <Categories />
      </Provider>)
    const electronicsButton = screen.getByTestId('category-button-electronics');
    const clothingButton = screen.getByTestId('category-button-clothing');
    const foodButton = screen.getByTestId('category-button-food');
    expect(foodButton).toBeInTheDocument();
    expect(electronicsButton).toBeInTheDocument();
    expect(clothingButton).toBeInTheDocument();
  });

  it('dispatches changeCategory action when button is clicked', () => {
    render(
      <Provider store={store}>
        <Categories />
      </Provider>)
    const electronicsButton = screen.getByTestId('category-button-electronics');
    fireEvent.click(electronicsButton);
    const actions = store.getActions();
    expect(actions[0].type).toEqual('CATEGORY_CHANGE');
    expect(actions[0].payload.category).toEqual('electronics');
  });
});
