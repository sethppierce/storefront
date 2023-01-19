import React from 'react'
import './styles.scss'
import { ButtonGroup, Button } from '@mui/material'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/category';
import { changeCategory } from '../../store/reducer';

const Categories = (props) => {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.category);

  const { products } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getCategories())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(categories)
  return (
    <div className='categories'>
      <p>Browse Our Categories</p>
      <ButtonGroup variant="text" aria-label="text button group">
        {
          categories.map((category,idx) => (
            <Button key={idx} 
            data-testid={`category-button-${category.name}`}
            onClick={() => dispatch(changeCategory(category.name, products))}
            >
            {category.name}
            </Button>
          ))
        }
      </ButtonGroup>
    </div>
  )
}



export default Categories