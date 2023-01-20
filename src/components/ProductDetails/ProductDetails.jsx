import React from 'react'
import './styles.scss'
import { Container, Typography, Paper, Grid, Button } from '@mui/material'
import { useDispatch, useSelector, } from 'react-redux';
import { useParams } from "react-router-dom";
import { addToCart } from '../../store/cart';

const ProductDetails = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {activeProducts} = useSelector(state => state.products);

  const product = activeProducts.find(item => item._id === id)
  console.log(product)

  return (
    <Container maxWidth='sm' id='productDetails'>
      <div className='detailContainer'>
        <Typography variant="h1" align="center" className='productTitle'>
          {product.name}
        </Typography>
        <div className='prodCardContainer'>
          <Paper elevation={1}>
            <Grid container spacing={3} className='cardContainer'>
              <Grid item xs={12}>
                <img src={`https://source.unsplash.com/random?${product.name}`}  alt="Product" className='cardImg' />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" color="textSecondary" className='cardInStock'>
                  In Stock: <strong>{product.inStock}</strong>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" className='cardPrice'>
                  ${product.price}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Button variant="contained" color="primary" className='buyButton' onClick={() => dispatch(addToCart(product))}>
            Buy
          </Button>
        </div>
      </div>
    </Container>

  )
}

export default ProductDetails