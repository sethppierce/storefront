import React from 'react'
import './styles.scss'
import { ButtonGroup, Button } from '@mui/material'
import { connect } from 'react-redux';
import { changeCategory } from '../../store/reducer';

const Categories = (props) => {

  const {
    changeCategory,
    categories,
    products,
  } = props;

  return (
    <div className='categories'>
      <p>Browse Our Categories</p>
      <ButtonGroup variant="text" aria-label="text button group">
        {
          categories.map((category,idx) => (
            <Button key={idx} 
            data-testid={`category-button-${category.name}`}
            onClick={() => changeCategory(category.name, products)}
            >
            {category.displayName}
            </Button>
          ))
        }
      </ButtonGroup>
    </div>
  )
}

const mapStateToProps = ({category}) => {
  return {
    categories: category.categories,
    products: category.products
  }
}

const mapDispatchToProps = { 
  changeCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories)