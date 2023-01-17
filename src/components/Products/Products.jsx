import React from 'react'
import { connect } from 'react-redux';
import { changeCategory } from '../../store/reducer';
import { Grid, Card, CardMedia, CardContent} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import './styles.scss'

const Products = (props) => {

  const {
    activeCategory,
    activeProducts
  } = props

  return (
    <div>
      { activeCategory !== '' ?
        <>
          <article>
            <h2>{activeCategory}</h2>
            <p>Category Description Goes Here</p>
          </article>
          <Grid container spacing={25} className='productContainer'>
            {activeProducts.map((product, idx) => (
              <Grid item key={uuidv4()} xs={3.25}>
                <Card sx={{ minWidth: 275, maxWidth: 500 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://via.placeholder.com/340"/>
                    <CardContent>
                      <h4>{product.name}</h4>
                    </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
        :
        null
      }
    </div>
  )
}

const mapStateToProps = ({ category }) => {
  return {
    activeProducts: category.activeProducts,
    activeCategory: category.activeCategory,
  }
}

const mapDispatchToProps = {
  changeCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)